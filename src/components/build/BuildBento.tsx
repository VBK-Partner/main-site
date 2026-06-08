import { ArrowRight } from 'lucide-react'

const PARAGRAPHS = [
  'ВБК Партнер займається будівництвом і ремонтом комерційних та виробничих об\u2019єктів — офісів, складів, виробничих цехів, ресторанів і котелень. Беремося як за окремий вид робіт, так і за повний цикл: від фундаменту до здачі під ключ.',
  'За 10 років реалізували понад 200 об\u2019єктів — від невеликих ремонтів до масштабних будівельних проєктів. Працюємо з профільними бригадами під кожен напрямок — покрівля, фасад, інженерія, внутрішнє оздоблення йдуть паралельно, без простоїв і втрати якості.',
  'Окремо беремося за покрівельні та фасадні роботи, монтаж інженерних систем, капітальний ремонт приміщень, зведення металевих і дерев\u2019яних конструкцій. Також будуємо та монтуємо твердопаливні котельні під ключ — від проєкту до першого запуску.',
  'Ми не беремо оплату за виїзд на об\u2019єкт і не просимо аванс за кошторис. Чому? Тому що впевнені: якщо ми правильно оцінимо задачу й чесно запропонуємо умови — більшість замовників оберуть нас. Практика це підтверджує.',
]

export default function BuildBento() {
  return (
    <section style={{ background: '#111111', fontFamily: 'var(--font-display)' }}>
      <div className="mx-auto max-w-screen-xl px-5 sm:px-8 md:px-14 lg:px-20 py-14 md:py-24"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>

        <p className="text-[10px] font-bold tracking-[0.32em] uppercase mb-8"
          style={{ color: 'var(--color-orange)' }}>Про компанію</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 mb-10">
          {PARAGRAPHS.map((p, i) => (
            <p key={i} style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.97rem', lineHeight: 1.75 }}>
              {p}
            </p>
          ))}
        </div>

        <a href="#quiz"
          className="inline-flex items-center gap-3 px-7 py-3.5 text-white font-bold uppercase tracking-[0.12em] text-xs hover:opacity-90 transition-opacity"
          style={{ background: 'var(--color-orange)' }}>
          Залишити заявку <ArrowRight size={13} strokeWidth={3} />
        </a>

      </div>
    </section>
  )
}

