import { NextRequest, NextResponse } from 'next/server'
import { sendToTelegram } from '@/lib/telegram'

const PHONE_RE = /^\+?[\d\s\-()]{7,20}$/
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function esc(s: unknown): string {
  return String(s ?? '').replace(/[<>&"']/g, '')
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { phone, email, messenger, source, answers, name, company } = body

  const hasPhone = typeof phone === 'string' && PHONE_RE.test(phone)
  const hasEmail = typeof email === 'string' && EMAIL_RE.test(email)

  if (!hasPhone && !hasEmail) {
    return NextResponse.json({ error: 'Provide phone or email' }, { status: 400 })
  }

  const lines: string[] = [`<b>Нова заявка — ${esc(source) || 'site'}</b>`]
  if (name) lines.push(`👤 Імʼя: ${esc(name)}`)
  if (company) lines.push(`🏢 Компанія: ${esc(company)}`)
  if (hasPhone) lines.push(`📱 Телефон: <code>${esc(phone)}</code>`)
  if (hasEmail) lines.push(`✉️ Email: <code>${esc(email)}</code>`)
  if (messenger) lines.push(`💬 Месенджер: ${esc(messenger)}`)
  if (Array.isArray(answers) && answers.length) {
    lines.push(`📋 Відповіді:\n  ${answers.map(esc).join('\n  ')}`)
  }

  const ok = await sendToTelegram(lines.join('\n'))
  if (!ok) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
