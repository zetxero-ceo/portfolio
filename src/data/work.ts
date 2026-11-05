// ข้อมูลผลงาน (ตัวอย่าง) — แก้เป็นผลงานจริงของลิก
// category: 'design' | 'code' | 'video'
export type Work = {
  slug: string;
  title: string;
  category: 'design' | 'code' | 'video';
  summary: string;
  problem: string;
  process: string;
  result: string;
  links?: { label: string; href: string }[];
  youtubeId?: string; // วิดีโอ: ใส่ ID ของ YouTube เพื่อฝัง
};

export const categoryLabel = {
  design: 'ดีไซน์',
  code: 'โค้ด',
  video: 'วิดีโอ',
} as const;

export const works: Work[] = [
  {
    slug: 'sample-design',
    title: 'ผลงานดีไซน์ตัวอย่าง',
    category: 'design',
    summary: 'ข้อความตัวอย่าง: สรุปผลงานดีไซน์ใน 1-2 บรรทัด',
    problem: 'ตัวอย่าง: โจทย์หรือปัญหาที่ต้องแก้',
    process: 'ตัวอย่าง: ขั้นตอนการทำงาน เครื่องมือที่ใช้',
    result: 'ตัวอย่าง: ผลลัพธ์ที่ได้',
  },
  {
    slug: 'sample-code',
    title: 'โปรเจกต์โค้ดตัวอย่าง',
    category: 'code',
    summary: 'ข้อความตัวอย่าง: สรุปโปรเจกต์โค้ดใน 1-2 บรรทัด',
    problem: 'ตัวอย่าง: ปัญหาที่โปรเจกต์นี้แก้',
    process: 'ตัวอย่าง: เทคโนโลยีที่ใช้ และวิธีทำ',
    result: 'ตัวอย่าง: ผลลัพธ์ที่ได้',
    links: [{ label: 'GitHub (ใส่ลิงก์จริง)', href: 'https://github.com/' }],
  },
  {
    slug: 'sample-video',
    title: 'ผลงานวิดีโอตัวอย่าง',
    category: 'video',
    summary: 'ข้อความตัวอย่าง: สรุปผลงานวิดีโอใน 1-2 บรรทัด',
    problem: 'ตัวอย่าง: วัตถุประสงค์ของวิดีโอ',
    process: 'ตัวอย่าง: ขั้นตอนถ่ายทำและตัดต่อ',
    result: 'ตัวอย่าง: ผลลัพธ์ที่ได้ (ใส่ youtubeId เพื่อฝังวิดีโอ)',
  },
];
