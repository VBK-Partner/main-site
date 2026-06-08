import SplitScreen from '@/components/home/SplitScreen'
import Footer from '@/components/shared/Footer'

export default function Home() {
  return (
    <main>
      <SplitScreen />
      <section
        style={{
          background: '#050506',
          fontFamily: 'var(--font-display)',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto py-12 md:py-16">
          <p
            className="text-xs font-semibold tracking-[0.22em] uppercase mb-4"
            style={{ color: 'var(--color-orange)' }}
          >
            Про нас
          </p>
          <div className="max-w-5xl space-y-5">
            <p className="text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.68)', lineHeight: 1.75 }}>
              ВБК Партнер — виробничо-будівельна компанія з більш ніж 10-річним досвідом роботи на ринку комерційного та промислового будівництва України. Ми здійснюємо повний цикл будівельно-ремонтних робіт: нове будівництво під ключ, реконструкція та капітальний ремонт офісів, складів, виробничих цехів, логістичних центрів, об&apos;єктів HoReCa, а також будівництво та монтаж твердопаливних котелень.
            </p>
            <p className="text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.62)', lineHeight: 1.75 }}>
              Паралельно із будівельним напрямком компанія реалізує пиломатеріали власного виробництва: дошку обрізну та стругану, брус різних перерізів, вагонку, імітацію бруса, рейку, терасну дошку, а також палети EUR/EPAL та нестандартні піддони під замовлення. Щорічний обсяг виробництва — понад 10 000 м³ деревини.
            </p>
            <p className="text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.58)', lineHeight: 1.75 }}>
              Замовити будівельні роботи або пиломатеріали можна за телефоном або через форму на сайті. Виїзд на об&apos;єкт та складання кошторису — безкоштовно.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
