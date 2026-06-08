'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, X, Building2, Warehouse, Factory, UtensilsCrossed, ShoppingBag, Flame } from 'lucide-react'
import { BUILD_SERVICES } from '@/lib/build-services'

type PanelGroup = { title: string; items: string[] }
type PanelData = { heading: string; lead: string[]; groups: PanelGroup[] }

const PANELS: Record<string, PanelData> = {
  'fasadni-roboty': {
    heading: 'Фасадні роботи — утеплення, оздоблення та захист будівлі',
    lead: [
      'Виконуємо фасадні роботи на комерційних і виробничих об\u2019єктах будь-якої складності — від утеплення окремої стіни до повного облицювання великого складського комплексу. Підбираємо систему під тип будівлі, бюджет і умови експлуатації.',
    ],
    groups: [
      {
        title: 'Що виконуємо:',
        items: [
          'Мокрий фасад (штукатурні системи з утепленням) — мінвата або пінопласт, армування, декоративна штукатурка',
          'Вентильований фасад — металокасети, фіброцемент, керамогранітні панелі',
          'Обшивка дерев\u2019яними матеріалами — вагонка, планкен, блок-хаус',
          'Монтаж фасадного утеплення — мінеральна вата, PIR-плити',
          'Забарвлення та декоративна обробка фасаду',
          'Ремонт і відновлення існуючого фасадного покриття',
        ],
      },
    ],
  },
  'pokrivelni-roboty': {
    heading: 'Покрівельні роботи — монтаж, ремонт і утеплення покрівлі',
    lead: [
      'Покрівля — один із тих елементів будівлі, де економія обертається втратами. Неправильно змонтована або зношена покрівля дає течі, руйнує утеплення і вимагає дедалі більших витрат.',
      'Один якісний монтаж — і покрівля служить десятиліттями без клопоту. Працюємо з покрівлями будь-якої конфігурації — від простих односхилих до складних вальмових і мансардних.',
    ],
    groups: [
      {
        title: 'Що виконуємо:',
        items: [
          'Монтаж покрівлі з профнастилу та металочерепиці',
          'Плоска покрівля — ПВХ-мембрана, бітумні матеріали, інверсійні системи',
          'Монтаж стропильних систем — у тому числі з власного бруса',
          'Утеплення покрівлі та горищних приміщень',
          'Монтаж і заміна водостічних систем',
          'Ремонт і відновлення покрівельного покриття',
          'Монтаж снігозатримувачів, аераторів, покрівельних люків',
        ],
      },
    ],
  },
  'vnutrishni-zovnishni-remonty': {
    heading: 'Внутрішні та зовнішні ремонтні роботи',
    lead: [
      'Це про довговічність, функціональність та відповідність нормам. Підлога, що витримує навантаження від техніки. Стіни, які легко підтримувати в чистоті. Виконуємо як чорнові, так і чистові роботи на комерційних і промислових об\u2019єктах.',
    ],
    groups: [
      {
        title: 'Зовнішні роботи:',
        items: [
          'Облицювання цоколю — плитка, декоративна штукатурка, натуральний камінь',
          'Благоустрій прилеглої території — бруківка, бордюри, дренаж',
          'Монтаж огороджень, воріт і хвірток',
          'Зовнішнє освітлення та малі архітектурні форми',
        ],
      },
      {
        title: 'Внутрішні роботи:',
        items: [
          'Стяжка підлоги — суха та мокра, армована для промислових приміщень',
          'Промислова полімерна підлога — епоксидна та поліуретанова',
          'Плиткові роботи у виробничих, санітарних та складських зонах',
          'Монтаж перегородок — гіпсокартон, газобетон, цегла',
          'Штукатурка, шпаклівка, фарбування стін і стель',
          'Монтаж підвісних стель — гіпсокартон, армстронг, реєчні системи',
          'Встановлення вікон, дверей і промислових воріт',
        ],
      },
    ],
  },
  'rekonstruktsiia': {
    heading: 'Реконструкція та капітальний ремонт — нове дихання для об\u2019єкта',
    lead: [
      'Не кожна задача потребує будівництва з нуля. Часто набагато вигідніше і швидше — реконструювати або капітально відремонтувати наявний об\u2019єкт. Результат — фактично новий об\u2019єкт за значно менших витрат.',
    ],
    groups: [
      {
        title: 'Реконструкція:',
        items: [
          'Перепланування офісних і виробничих приміщень',
          'Надбудова додаткових поверхів та розширення будівлі',
          'Підсилення несучих конструкцій і фундаменту',
          'Зміна призначення об\u2019єкта — наприклад, склад у виробничий цех або офісний центр',
          'Добудова нових секцій і прибудов',
        ],
      },
      {
        title: 'Капітальний ремонт:',
        items: [
          'Демонтажні роботи — знос перегородок, старого оздоблення, зношених комунікацій',
          'Відновлення або підсилення конструктивних елементів',
          'Повна заміна або ремонт покрівлі',
          'Утеплення та оновлення фасаду',
          'Комплексна заміна інженерних систем',
          'Нове чистове оздоблення приміщень',
        ],
      },
    ],
  },
  'montazh-konstruktsiy': {
    heading: 'Монтаж металевих і дерев\u2019яних конструкцій',
    lead: [
      'Виконуємо монтаж металевих та дерев\u2019яних конструкцій на нових об\u2019єктах і в рамках реконструкції — каркаси будівель, ферми, перекриття, стропильні системи. Розраховуємо під специфіку кожного проєкту.',
    ],
    groups: [
      {
        title: 'Металеві конструкції:',
        items: [
          'Монтаж несучих металевих каркасів будівель та споруд',
          'Монтаж ферм і балочних перекриттів',
          'Зварювальні роботи на об\u2019єкті',
          'Антикорозійний захист та фарбування конструкцій',
          'Монтаж металевих сходів, площадок і огороджень',
        ],
      },
      {
        title: 'Дерев\u2019яні конструкції:',
        items: [
          'Монтаж стропильних систем — вальмових, двосхилих, мансардних, плоских',
          'Установка ковзанів і накрокв\u2019яних елементів',
          'Монтаж дерев\u2019яних перекриттів та лаг',
          'Дерев\u2019яний каркас для виробничих і комерційних будівель',
        ],
      },
    ],
  },
  'tverdopalyvni-kotelni': {
    heading: 'Твердопаливні котельні під ключ — від проєкту до запуску',
    lead: [
      'ВБК Партнер будує та монтує твердопаливні котельні під ключ для комерційних і промислових об\u2019єктів. Беремося за весь цикл: від розробки схеми і підбору обладнання до монтажу, обв\u2019язки та першого запуску. Замовник отримує готову систему опалення, а не набір труб і котел без документації.',
    ],
    groups: [
      {
        title: 'Що входить у послугу:',
        items: [
          'Проєктування котельні — потужність, схема, прив\u2019язка до об\u2019єкту',
          'Підбір котла та допоміжного обладнання під специфіку замовника',
          'Будівельна частина — приміщення котельні, фундамент під котел, димар',
          'Монтаж котла, бурстера, теплоакумулятора',
          'Обв\u2019язка системи опалення — трубопроводи, насоси, запірна арматура',
          'Монтаж автоматики та систем безпеки',
          'Налаштування, перший запуск і здача в експлуатацію',
          'Навчання персоналу та повний пакет технічної документації',
        ],
      },
    ],
  },
  'inzhenerni-systemy': {
    heading: 'Інженерні системи — комфорт та безпека об\u2019єкту',
    lead: [
      'Будівля без інженерії — просто коробка. Саме системи опалення, вентиляції, водопостачання та електрики роблять її функціональною. Ми монтуємо весь спектр інженерних рішень — від простих офісних до складних промислових систем.',
    ],
    groups: [
      {
        title: 'Напрямки інженерних робіт:',
        items: [
          'Електромонтажні роботи — розведення мереж, встановлення щитів, прокладання кабеля',
          'Опалення — водяна тепла підлога, радіатори, котельні',
          'Холодне та гаряче водопостачання, каналізація',
          'Вентиляція та кондиціонування — промислові та офісні системи',
        ],
      },
    ],
  },
  'nove-budivnytstvo': {
    heading: 'Нове будівництво комерційних і виробничих об\u2019єктів під ключ',
    lead: [
      'Беремо на себе весь цикл. Один підрядник — весь обсяг: від підготовки ділянки та фундаменту до оздоблення і введення в експлуатацію. Профільні бригади паралельно ведуть різні напрямки без простоїв і без втрати якості.',
    ],
    groups: [
      {
        title: 'З якими об\u2019єктами працюємо:',
        items: [
          'Офіси та ділові центри',
          'Склади та логістичні комплекси',
          'Виробничі цехи та промислові будівлі',
          'Заклади HoReCa — ресторани, кафе, готелі',
          'Об\u2019єкти рітейлу — магазини, торгові приміщення',
          'Котельні та об\u2019єкти інженерної інфраструктури',
        ],
      },
    ],
  },
}

const OBJECTS = [
  { label: 'Офіси та ділові центри',           Icon: Building2       },
  { label: 'Склади та логістичні комплекси',    Icon: Warehouse        },
  { label: 'Виробничі цехи та промислові будівлі', Icon: Factory       },
  { label: 'HoReCa — ресторани, кафе, готелі', Icon: UtensilsCrossed  },
  { label: 'Рітейл — магазини, ТЦ, мережеві точки', Icon: ShoppingBag },
  { label: 'Твердопаливні котельні',            Icon: Flame            },
]

export default function BuildExpertise() {
  const [active, setActive] = useState<string | null>(null)

  function toggle(slug: string) {
    setActive((prev) => (prev === slug ? null : slug))
  }

  const panel = active ? PANELS[active] : null
  const service = active ? BUILD_SERVICES.find((s) => s.slug === active) : null

  return (
    <section id="expertise" style={{ background: 'var(--color-bg-subtle)', fontFamily: 'var(--font-display)' }}>

      {/* Header */}
      <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto pt-16 md:pt-28 pb-10 md:pb-16">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
          style={{ color: 'var(--color-orange)' }}>Наші напрямки</p>
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl"
          style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
          Що ми робимо
        </h2>
      </div>

      {/* Photo cards grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {BUILD_SERVICES.map(({ slug, cardTitle, photo }, i) => {
          const isActive = active === slug
          return (
            <button
              key={slug}
              onClick={() => toggle(slug)}
              className="reveal group relative overflow-hidden block aspect-[16/10] sm:aspect-[4/3] w-full text-left cursor-pointer"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo}
                alt={cardTitle}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ filter: `brightness(${isActive ? 0.3 : 0.55})` }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.8) 100%)' }}
              />
              {isActive && (
                <div
                  className="absolute inset-0"
                  style={{ background: 'rgba(232,75,0,0.18)' }}
                />
              )}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                <h3
                  className="font-bold text-white text-sm md:text-base lg:text-lg"
                  style={{ letterSpacing: '-0.01em', lineHeight: 1.3 }}
                >
                  {cardTitle}
                </h3>
                <span
                  className="mt-2 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.18em] transition-opacity duration-200"
                  style={{ color: 'var(--color-orange)', opacity: isActive ? 1 : 0 }}
                >
                  Деталі ↓
                </span>
              </div>
              <span
                className="absolute top-3 left-3 md:top-4 md:left-4 text-[10px] md:text-xs font-bold tracking-widest"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </button>
          )
        })}
      </div>

      {/* Expandable detail panel */}
      <div
        style={{
          maxHeight: active ? '1200px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.45s ease',
          background: '#0E0E0E',
        }}
      >
        {panel && service && (
          <div className="grid md:grid-cols-2">
            {/* Photo */}
            <div className="relative min-h-[220px] md:min-h-[420px] order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.photo}
                alt={service.cardTitle}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'brightness(0.65)' }}
              />
            </div>

            {/* Content */}
            <div className="relative p-6 sm:p-8 md:p-10 lg:p-14 order-2">
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-1 transition-opacity hover:opacity-60"
                style={{ color: 'rgba(255,255,255,0.35)' }}
                aria-label="Закрити"
              >
                <X size={16} />
              </button>

              <p
                className="text-[9px] md:text-[10px] font-bold tracking-[0.28em] uppercase mb-4"
                style={{ color: 'var(--color-orange)' }}
              >
                Детальніше
              </p>
              <h3
                className="font-bold text-lg sm:text-xl md:text-2xl text-white mb-4"
                style={{ letterSpacing: '-0.02em', lineHeight: 1.3 }}
              >
                {panel.heading}
              </h3>
              {panel.lead.map((para, pi) => (
                <p
                  key={pi}
                  className="mb-3 text-sm"
                  style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}
                >
                  {para}
                </p>
              ))}

              {panel.groups.map((group, gi) => (
                <div key={gi} className="mt-5">
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.14em] mb-3"
                    style={{ color: 'rgba(255,255,255,0.3)' }}
                  >
                    {group.title}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {group.items.map((item, ii) => (
                      <li key={ii} className="flex items-start gap-2.5">
                        <span
                          className="mt-[0.45em] shrink-0 w-1.5 h-1.5"
                          style={{ background: 'var(--color-orange)' }}
                        />
                        <span
                          className="text-sm"
                          style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="#quiz"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-white text-[11px] font-bold uppercase tracking-[0.12em] transition-opacity hover:opacity-85"
                  style={{ background: 'var(--color-orange)' }}
                >
                  Обговорити проєкт <ArrowRight size={11} strokeWidth={3} />
                </a>
                <Link
                  href={`/build/${active}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] border transition-opacity hover:opacity-85"
                  style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.2)' }}
                >
                  Дізнатися детальніше <ArrowRight size={11} strokeWidth={3} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Object types section */}
      <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto pt-12 md:pt-20 pb-16 md:pb-28">
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-start">
          <div className="md:w-56 shrink-0">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
              style={{ color: 'var(--color-orange)' }}>З якими об&apos;єктами</p>
            <h3 className="font-bold text-xl sm:text-2xl md:text-3xl"
              style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
              Працюємо
            </h3>
          </div>
          <div className="flex-1 w-full">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-5 md:gap-y-6 mb-8 md:mb-10">
              {OBJECTS.map(({ label, Icon }, i) => (
                <li key={label} className="reveal flex items-center gap-4"
                  style={{ transitionDelay: `${i * 50}ms` }}>
                  <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-sm"
                    style={{ background: 'var(--color-bg-subtle)', border: '1px solid rgba(0,0,0,0.08)' }}>
                    <Icon size={20} strokeWidth={1.5} style={{ color: 'var(--color-orange)' }} />
                  </span>
                  <span className="font-medium"
                    style={{ color: 'var(--color-text-sec)', fontSize: '0.95rem', lineHeight: 1.35 }}>
                    {label}
                  </span>
                </li>
              ))}
            </ul>
            <a href="#quiz"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-85"
              style={{ background: 'var(--color-orange)' }}>
              Поговорити про об&apos;єкт →
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}
