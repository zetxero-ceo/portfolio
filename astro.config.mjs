import { defineConfig } from 'astro/config';

// ตอนนี้ deploy ที่ https://zetxero-ceo.github.io/portfolio/
// ถ้าย้ายไปโดเมนของตัวเอง: เปลี่ยน site เป็นโดเมนนั้น และลบบรรทัด base ออก
export default defineConfig({
  site: 'https://zetxero-ceo.github.io',
  base: '/portfolio',
});
