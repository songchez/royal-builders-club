import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

export type Standard = {
  slug: string;
  group: string;
  name: string;
  capitalCorp: string;
  capitalPersonal?: string;
  coop: string;
  tech: string;
  office: string;
  updated: string;
  source: string;
  contentHtml?: string;
};

const DIR = path.join(process.cwd(), "content", "standards");

export function getStandards(): Standard[] {
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".md"));
  const list = files.map((file) => {
    const raw = fs.readFileSync(path.join(DIR, file), "utf-8");
    const { data } = matter(raw);
    return data as unknown as Standard;
  });
  const order = ["종합건설업", "전문건설업", "전기·정보통신·소방", "주택·기타 인허가"];
  return list.sort((a, b) => {
    const g = order.indexOf(a.group) - order.indexOf(b.group);
    if (g !== 0) return g;
    return a.name.localeCompare(b.name, "ko");
  });
}

export async function getStandard(slug: string): Promise<Standard | null> {
  const file = path.join(DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  const contentHtml = (await remark().use(gfm).use(html).process(content)).toString();
  return { ...(data as unknown as Standard), contentHtml };
}
