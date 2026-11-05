# portfolio

เว็บไซต์ส่วนตัว (แนะนำตัว + โชว์ผลงาน ดีไซน์/โค้ด/วิดีโอ) สร้างด้วย [Astro](https://astro.build) — เฟสแรกไม่มีระบบ login

## ใช้งาน

```bash
npm install
npm run dev      # เปิดดูที่ http://localhost:4321/portfolio/
npm run build    # สร้างไฟล์ใน dist/
```

## แก้เนื้อหา

- ผลงาน: `src/data/work.ts` (เพิ่ม/แก้ผลงาน ใส่ `youtubeId` เพื่อฝังวิดีโอ)
- หน้าแนะนำตัว/ติดต่อ: `src/pages/about.astro`, `src/pages/contact.astro`
- โทนสี: ตัวแปร `--accent` ฯลฯ ใน `src/layouts/Base.astro`

## Deploy (GitHub Pages)

1. Merge เข้า `main`
2. Settings → Pages → Source: **GitHub Actions**
3. Workflow `.github/workflows/deploy.yml` จะ build และ deploy เอง
4. ที่อยู่: `https://zetxero-ceo.github.io/portfolio/`

ย้ายไปโดเมนของตัวเอง: แก้ `site` ใน `astro.config.mjs` และลบ `base`

## หมายเหตุ

- วิดีโอยาวควรฝัง YouTube/Vimeo ไม่ใส่ไฟล์ใหญ่ใน repo (GitHub Pages จำกัดราว 1 GB)
- ถ้าเพิ่มฟอร์มติดต่อ/analytics/สมาชิก ให้ดูเรื่อง PDPA ก่อน
