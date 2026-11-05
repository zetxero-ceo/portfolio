// ข้อมูลผลงาน — แก้/เพิ่มได้ที่ไฟล์นี้
// category: 'design' | 'code' | 'video'
export type Work = {
  slug: string;
  title: string;
  category: 'design' | 'code' | 'video';
  summary: string;
  role: string;
  tech: string[];
  repo: string; // ลิงก์ GitHub
  liveUrl?: string; // ลิงก์เว็บจริง (ถ้ามี)
  youtubeId?: string; // วิดีโอ: ใส่ ID ของ YouTube เพื่อฝัง
};

export const categoryLabel = {
  design: 'ดีไซน์',
  code: 'โค้ด',
  video: 'วิดีโอ',
} as const;

const gh = (name: string) => `https://github.com/saharatyokthuan/${name}`;
const solo = 'พัฒนาเพียงคนเดียว';
const withAI = 'ออกแบบความต้องการและทดสอบใช้งาน พัฒนาร่วมกับ Claude Code (AI)';

export const works: Work[] = [
  {
    slug: 'diary',
    title: 'Diary',
    category: 'code',
    summary: 'เว็บบันทึกส่วนตัวภาษาไทย เปิดให้ทุกคนอ่าน เขียนพร้อมรูปจากมือถือได้ผ่านหน้า /admin/ มีหมวดหมู่ ฉบับร่าง และ RSS',
    role: withAI,
    tech: ['Astro', 'TypeScript', 'Sveltia CMS', 'GitHub Pages', 'GitHub Actions', 'Playwright'],
    repo: gh('Diary'),
    liveUrl: 'https://saharatyokthuan.github.io/Diary/',
  },
  {
    slug: 'cash-manager',
    title: 'cash-manager',
    category: 'code',
    summary: 'แอปบันทึกรายรับ-รายจ่าย เงินยืม หนี้สิน/บัตรเครดิต และรายการประจำ ซิงก์ข้อมูลบนคลาวด์ ใช้งานออฟไลน์และติดตั้งบนมือถือได้ (PWA)',
    role: withAI,
    tech: ['HTML', 'JavaScript', 'CSS', 'Firebase (Firestore, Auth)', 'Chart.js', 'SheetJS', 'PWA'],
    repo: gh('cash-manager'),
    liveUrl: 'https://saharatyokthuan.github.io/cash-manager/',
  },
  {
    slug: 'shiftmate',
    title: 'shiftmate',
    category: 'code',
    summary: 'ระบบจัดตารางกะทำงานพนักงาน รองรับส่งออก JSON, CSV, XLSX และแบ็กเอนด์ Flask เสริม',
    role: `${solo}: โค้ดทั้งหมด, UI, และแบ็กเอนด์ Flask`,
    tech: ['HTML', 'JavaScript', 'CSS', 'Flask', 'SQLite'],
    repo: gh('shiftmate'),
  },
  {
    slug: 'pos-mobile',
    title: 'pos-mobile',
    category: 'code',
    summary: 'ระบบ Point of Sale สำหรับร้านค้าขนาดเล็ก รองรับสแกนบาร์โค้ดและส่งออก Excel',
    role: `${solo}: โค้ดทั้งหมด, UI, และการเชื่อมต่อ SheetJS/Chart.js`,
    tech: ['HTML', 'JavaScript', 'CSS', 'SheetJS', 'Chart.js'],
    repo: gh('pos-mobile'),
  },
  {
    slug: 'cash-flow',
    title: 'Cash-Flow',
    category: 'code',
    summary: 'แอปบันทึกรายรับ-รายจ่ายส่วนตัว รองรับกระเป๋าเงิน งบประมาณ และแผนภูมิบน Canvas',
    role: `${solo}: โค้ดทั้งหมด, UI, และตรรกะทางธุรกิจ`,
    tech: ['HTML', 'JavaScript', 'CSS', 'SheetJS', 'Canvas'],
    repo: gh('Cash-Flow'),
  },
  {
    slug: 'vender',
    title: 'vender',
    category: 'code',
    summary: 'ระบบจัดการสต็อกตู้ขายอัตโนมัติ ทำงานแบบออฟไลน์ก่อน รองรับสำรองและกู้คืนข้อมูล JSON',
    role: `${solo}: โค้ดทั้งหมดและออกแบบสำหรับมือถือ`,
    tech: ['HTML', 'JavaScript', 'CSS'],
    repo: gh('vender'),
  },
  {
    slug: 'olympus',
    title: 'Olympus',
    category: 'code',
    summary: 'บอทหลายแพลตฟอร์มสำหรับ Telegram (Telegraf) และ Discord (discord.js)',
    role: `${solo}: โค้ดทั้งหมดสำหรับบอททั้งสองตัว`,
    tech: ['Node.js', 'Telegraf', 'discord.js', 'dotenv'],
    repo: gh('Olympus'),
  },
];
