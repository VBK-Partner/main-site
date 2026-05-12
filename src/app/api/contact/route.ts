import { NextRequest, NextResponse } from 'next/server'
import { sendToTelegram } from '@/lib/telegram'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { phone, messenger, source, answers } = body

  if (!phone || typeof phone !== 'string' || !/^\+?[\d\s\-()]{7,20}$/.test(phone)) {
    return NextResponse.json({ error: 'Invalid phone' }, { status: 400 })
  }

  const safeSource = String(source ?? '').replace(/[<>&"']/g, '')
  const safeMessenger = String(messenger ?? '').replace(/[<>&"']/g, '')
  const safeAnswers = Array.isArray(answers)
    ? answers.map((a) => String(a).replace(/[<>&"']/g, '')).join('\n  ')
    : ''

  const message = [
    `<b>Нова заявка — ${safeSource}</b>`,
    `📱 Телефон: <code>${phone}</code>`,
    `💬 Месенджер: ${safeMessenger}`,
    safeAnswers ? `📋 Відповіді:\n  ${safeAnswers}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  const ok = await sendToTelegram(message)

  if (!ok) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
