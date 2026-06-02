const BOT_TOKEN = '8795558933:AAHTaDwZf-JQwat-bb-YHXTPyq4twB0g2qg'
const CHAT_IDS = ['311673351', '8795558933', '1433346868', '744164242']

export async function sendToTelegram(message: string): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN || BOT_TOKEN
  const chatIdRaw = process.env.TELEGRAM_CHAT_ID
  const chatIds = chatIdRaw
    ? chatIdRaw.split(',').map(id => id.trim()).filter(Boolean)
    : CHAT_IDS
  const url = `https://api.telegram.org/bot${token}/sendMessage`

  const results = await Promise.all(
    chatIds.map(chatId =>
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' }),
      }).then(r => r.ok).catch(() => false)
    )
  )

  return results.some(Boolean)
}
