import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import raw from "../content/standards.json";

/**
 * 등록기준 콘텐츠 로더 (런타임 fs 없음)
 * ------------------------------------------------
 * 데이터는 scripts/generate-standards.mjs 가
 * content/standards/*.md(사람용) + content/standards.json(앱 번들용)
 * 두 형태로 출력합니다. 앱은 JSON을 정적 임포트하므로
 * Cloudflare Workers(파일시스템 없음)에서도 안전합니다.
 */

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

type RawDoc = Omit<Standard, "contentHtml"> & { body: string };

const DOCS = raw as unknown as RawDoc[];

const GROUP_ORDER = ["종합건설업", "전문건설업", "전기·정보통신·소방", "주택·기타 인허가"];

function sorted(list: RawDoc[]) {
  return [...list].sort((a, b) => {
    const g = GROUP_ORDER.indexOf(a.group) - GROUP_ORDER.indexOf(b.group);
    if (g !== 0) return g;
    return a.name.localeCompare(b.name, "ko");
  });
}

export function getStandards(): Standard[] {
  return sorted(DOCS).map(({ body, ...meta }) => meta as Standard);
}

export function getStandardSlugs(): string[] {
  return DOCS.map((d) => d.slug);
}

export async function getStandard(slug: string): Promise<Standard | null> {
  const doc = DOCS.find((d) => d.slug === slug);
  if (!doc) return null;
  const { body, ...meta } = doc;
  const contentHtml = (await remark().use(gfm).use(html).process(body)).toString();
  return { ...(meta as Standard), contentHtml };
}
