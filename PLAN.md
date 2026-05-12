# План розробки — VBK Partner (vbk-partner.com)

## Стек технологій

### Рекомендований стек: **Next.js 14+ (App Router)**

| Категорія | Інструмент | Причина |
|-----------|-----------|---------|
| Фреймворк | **Next.js 14** (App Router) | SSG + SSR, вбудований роутинг, image optimization, font optimization |
| Мова | **TypeScript** | Типізація, менше помилок у компонентах форм і квізів |
| Стилізація | **Tailwind CSS** | Швидка верстка, responsive утиліти, mobile-first за замовчуванням |
| Анімації | **CSS-нативні** + Intersection Observer API | Без важких бібліотек (Framer Motion — тільки якщо потрібно) |
| Форми / Quiz | **Чистий React state** (без бібліотек) | Простий квіз не потребує react-hook-form |
| Відправка форм | **Telegram Bot API** через Next.js Route Handler | Без бекенду, безпечно через серверну функцію |
| Деплой | **Vercel** | Безкоштовно для Next.js, автоматичний SSL, CDN, preview deployments |
| Репозиторій | **GitHub** | Версіонування, деплой через Vercel інтеграцію |
| Аналітика | **Google Analytics 4** (gtag через `@next/third-parties`) | Офіційний пакет Next.js, `afterInteractive` за замовчуванням |
| Іконки | **Lucide React** або SVG-файли вручну | Легкі, blueprint-стиль через stroke |
| Зображення | **next/image** | Автоматична WebP-конвертація, srcset, lazy loading |

> **Чому не Astro?** Astro краще для суто статичних сайтів. Тут є квіз (React state), Before/After слайдер, модальні вікна — Next.js зручніше і знайоміше більшості розробників.

---

## Структура проекту

```
vbk-partner/
├── app/
│   ├── page.tsx              # Головна (Parking Page)
│   ├── build/
│   │   └── page.tsx          # Лендинг Будівництво
│   ├── wood/
│   │   └── page.tsx          # Лендинг Деревообробка
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # Telegram Bot API handler
│   └── layout.tsx            # Root layout (GA4, fonts, meta)
├── components/
│   ├── shared/               # Header, Footer, StickyCTA
│   ├── home/                 # SplitScreen
│   ├── build/                # Hero, BentoGrid, Portfolio, Quiz
│   └── wood/                 # Hero, BentoGrid, Catalog, Quiz
├── public/
│   ├── price-list.pdf
│   ├── images/               # WebP фото
│   └── videos/               # Hero відео (poster + webm/mp4)
├── lib/
│   └── telegram.ts           # Утиліта відправки в Telegram
└── next.config.ts
```

---

## Фази розробки

### Фаза 0 — Підготовка (до верстки)
- [ ] `npx create-next-app@latest vbk-partner --typescript --tailwind --app`
- [ ] Налаштувати дизайн-систему в `tailwind.config.ts` (кольори, шрифти)
- [ ] Отримати токен Telegram Bot (BotFather) + Chat ID
- [ ] Отримати GA4 Measurement ID
- [ ] Зібрати медіа: фото/відео для hero, WebP-версії, PDF прайс-листа
- [ ] Підключити репозиторій до Vercel

**Дизайн-система (tailwind.config.ts):**
```ts
colors: {
  slate:  '#2F353B',   // фон / текст
  orange: '#FF6600',   // CTA (Будівництво)
  blue:   '#007BFF',   // CTA (альтернатива)
  wood:   '#C19A6B',   // акцент (Деревообробка)
}
fonts: Inter або Manrope (700 Bold + 400 Regular)
```

---

### Фаза 1 — Головна сторінка (`/`)

**Мета:** Розподілити трафік між `/build` і `/wood`

- [ ] Header: логотип (ліворуч) + телефон + Viber/Telegram (праворуч)
- [ ] Split-Screen Hero:
  - Ліва половина: фото/відео будівництва, CTA → `/build`
  - Права половина: фото деревини, CTA → `/wood`
  - Hover-ефект: flex-grow 60/40, transition 350ms ease-in-out
  - Mobile (<768px): вертикальне стекування, кожна 100vw × 50vh
- [ ] Footer: назва, рік, Privacy Policy, іконки месенджерів
- [ ] Технічні вимоги: LCP < 1.0 сек, розмір < 200 KB без медіа
- [ ] Відео: `autoplay muted loop playsinline` + `poster` як fallback

---

### Фаза 2 — Лендинг Будівництво (`/build`)

| # | Блок | Деталі |
|---|------|--------|
| 1 | **Hero** | H1: «Будівництво промислових об'єктів під ключ», Safety Orange CTA → скрол до квізу |
| 2 | **Trust Bento Grid** | CSS Grid 4–5 карток різного розміру, анімація через Intersection Observer (opacity + translateY) |
| 3 | **Expertise / Pains & Gains** | 4 тезиси з blueprint SVG-іконками |
| 4 | **Портфоліо** | CSS Grid 3 колонки / горизонтальний snap-scroll на мобільному, Before/After слайдер (pointer events + clip-path) |
| 5 | **Quiz Lead Form** | 3 кроки + фінал, прогрес-бар, відправка → Telegram |

**Quiz кроки (build):**
1. Який об'єкт? → Ангар / Склад / Виробництво / Інше
2. Орієнтовна площа? → до 500 м² / 500–2000 м² / 2000+ м²
3. Чи потрібні пиломатеріали? → Так / Ні
4. Фінал: телефон + вибір месенджера + кнопка «Надіслати»

---

### Фаза 3 — Лендинг Деревообробка (`/wood`)

| # | Блок | Деталі |
|---|------|--------|
| 1 | **Hero** | H1: «Пиломатеріали від виробника», CTA «Завантажити прайс» (PDF) + «Зворотній дзвінок» |
| 2 | **Trust Bento Grid** | 4 картки |
| 3 | **Expertise** | 4 тезиси (Напряму від виробника / Завжди є в наявності / Доставка / Оптові ціни) |
| 4 | **Каталог продукції** | Фільтр (Дошка / Брус / Рейка / Все), картка продукту, модальне вікно «Купити в 1 клік» → Telegram |
| 5 | **Quiz Lead Form** | 3 кроки (адаптовані під деревообробку) + відправка → Telegram |

**Quiz кроки (wood):**
1. Що плануєте? → Будівництво / Ремонт / Виробництво / Інше
2. Кількість? → до 5 м³ / 5–20 м³ / 20+ м³
3. Потрібна доставка? → Так / Ні
4. Фінал: телефон + месенджер + відправка

---

### Фаза 4 — Спільні технічні задачі

#### Мікро-анімації
- Scroll reveal: Intersection Observer, `opacity 0→1` + `translateY 20px→0`, duration 400ms
- Hover кнопок: `scale(1.04)` + shadow, transition 200ms
- Split-screen expand: flex-grow transition 350ms ease-in-out
- Before/After слайдер: pointer events, CSS clip-path
- Quiz progress bar: width transition 300ms

#### Інтеграції
```ts
// lib/telegram.ts — відправка через Next.js Route Handler (серверна сторона)
POST https://api.telegram.org/bot{TOKEN}/sendMessage
// Токен НЕ виноситься на клієнт — тільки через process.env
```
- Viber: `viber://chat?number=...`
- GA4: через `@next/third-parties/google`
- PDF прайс: `/public/price-list.pdf`

#### SEO (на кожну сторінку через Next.js Metadata API)
| Сторінка | title | Schema.org |
|----------|-------|------------|
| `/` | VBK Partner — Будівництво та Пиломатеріали | Organization + WebSite |
| `/build` | Будівництво промоб'єктів під ключ \| VBK Partner | LocalBusiness + Service |
| `/wood` | Пиломатеріали від виробника \| VBK Partner | LocalBusiness + Product |

- `sitemap.xml` — автогенерація через `app/sitemap.ts`
- `robots.txt` — через `app/robots.ts`
- Canonical, OG-теги для кожної сторінки
- `next/image` для всіх зображень (автоWebP, srcset)
- `font-display: swap`, preload основного шрифту

#### Перформанс (цілі Lighthouse)
| Метрика | Ціль |
|---------|------|
| Performance | ≥ 90 |
| Accessibility | ≥ 90 |
| SEO | ≥ 95 |
| LCP | < 2.5 сек |
| CLS | 0 |

#### Доступність (a11y)
- Семантичний HTML: `<main>`, `<nav>`, `<section>`, `<header>`, `<footer>`
- `alt`-тексти для всіх зображень
- Фокусні стилі: `outline: 2px solid var(--color-accent)`
- Контраст тексту ≥ 4.5:1 (WCAG AA)
- Quiz: `aria-live` для оголошення кроків скрін-рідерам

#### Адаптивність
- Mobile-first, breakpoints: 375 / 768 / 1024 / 1440px
- Sticky CTA-панель (Telegram) на мобільному: `position: fixed; bottom: 0`
- Bento Grid: 1 колонка на мобільному
- Портфоліо: snap-scroll на мобільному

---

### Фаза 5 — Здача проекту

- [ ] `README.md` з інструкцією локального запуску та деплою
- [ ] Figma-макет або Storybook для UI-компонентів
- [ ] Lighthouse-звіти (скріншоти) по всіх трьох сторінках
- [ ] Крос-браузерна перевірка: Chrome, Firefox, Safari, Edge
- [ ] Перевірка на пристроях: iPhone 12+, Samsung Galaxy S21+, iPad
- [ ] Google Search Console: 1 властивість + sitemap
- [ ] Документація: Telegram Bot токен, GA4 Measurement ID (у `.env.local`)

---

## Швидкий старт

```bash
npx create-next-app@latest vbk-partner --typescript --tailwind --app --src-dir
cd vbk-partner
npm install lucide-react @next/third-parties
```

`.env.local`:
```
TELEGRAM_BOT_TOKEN=your_token
TELEGRAM_CHAT_ID=your_chat_id
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
```
