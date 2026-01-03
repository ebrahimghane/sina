# ویجت جستجوی هوشمند SINA

ویجت جاوااسکریپتی سبک و ایزوله برای جستجوی هوشمند که در هر سایتی قابل تزریق است.

## ساختار پروژه

این پروژه به صورت Monorepo با استفاده از Turborepo و PNPM مدیریت می‌شود:

```
sina-monorepo/
├── apps/
│   ├── widget/          # پروژه اصلی ویجت (خروجی: sina-sdk.js)
│   └── playground/      # محیط تست
├── packages/
│   ├── api/            # کلاینت API
│   ├── ui/             # کامپوننت‌های React
│   ├── shared-utils/   # توابع کمکی
│   └── ts-config/      # تنظیمات TypeScript
```

## نصب و راه‌اندازی

### پیش‌نیازها

- Node.js >= 18.0.0
- PNPM >= 8.0.0

### نصب وابستگی‌ها

```bash
pnpm install
```

### ساخت پروژه

```bash
pnpm build
```

خروجی در `apps/widget/dist/sina-sdk.js` قرار می‌گیرد.

## استفاده

### روش 1: استفاده از Loader Script

```html
<script>
  (function(w,d,s,o,f,js,fjs){
    w['SinaWidget']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
    js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
    js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
  }(window,document,'script','sina','https://cdn.yourdomain.com/sina-sdk.js'));

  sina('init', { 
    apiKey: 'gwiuATzYDmeayT7eqmbHG2obv6lGpqJa',
    containerId: 'sina-search-root',
    placeholder: 'جستجو کنید...'
  });
</script>
<div id="sina-search-root"></div>
```

### روش 2: استفاده از Data Attributes

```html
<div 
  id="sina-search-root"
  data-city="tehran"
  data-specialty="cardiology"
  data-placeholder="جستجوی پزشک..."
></div>
```

### پارامترهای پیکربندی

- `apiKey` (الزامی): کلید API برای دسترسی به Searchia API
- `containerId` (اختیاری): شناسه المنت Container (پیش‌فرض: `sina-search-root`)
- `placeholder` (اختیاری): متن placeholder برای input (پیش‌فرض: `جستجو...`)
- `city` (اختیاری): شهر کاربر (می‌تواند از data-attribute خوانده شود)
- `specialty` (اختیاری): تخصص (می‌تواند از data-attribute خوانده شود)

## ویژگی‌ها

- ✅ **Shadow DOM**: ایزولاسیون کامل CSS
- ✅ **Zero Dependencies**: بدون وابستگی‌های خارجی (به جز React)
- ✅ **Mobile First**: طراحی Responsive با تمرکز بر موبایل
- ✅ **Debouncing**: کاهش درخواست‌های API با تاخیر 300ms
- ✅ **Error Handling**: مدیریت خطا بدون Crash
- ✅ **TypeScript**: پشتیبانی کامل از TypeScript

## توسعه

### اجرای محیط توسعه

```bash
# ساخت و watch کردن تغییرات
pnpm dev

# اجرای playground برای تست
cd apps/playground
pnpm dev
```

### ساخت برای تولید

```bash
pnpm build
```

## معماری

ویجت از معماری زیر استفاده می‌کند:

1. **Loader Script**: بارگذاری Async و مدیریت صف دستورات
2. **Shadow DOM**: ایزولاسیون کامل از استایل‌های سایت میزبان
3. **React Components**: کامپوننت‌های قابل استفاده مجدد
4. **State Management**: مدیریت وضعیت برای آمادگی Chat UI در آینده

## API

### Searchia API

- **Endpoint**: `https://apigw.paziresh24.com/v1/searchia-api/v2/qs/index/slim_clinic_query_su`
- **Method**: GET
- **Headers**: `apikey: gwiuATzYDmeayT7eqmbHG2obv6lGpqJa`
- **Query Params**: `query` (متن جستجو)

### Redirect URL

با کلیک روی هر پیشنهاد، کاربر به آدرس زیر هدایت می‌شود:

```
https://www.paziresh24.com/s/?text={QUERY}&ref=search_suggestion_box_qs_sina&semantic_search=true
```

## مجوز

این پروژه خصوصی است و برای استفاده داخلی طراحی شده است.

