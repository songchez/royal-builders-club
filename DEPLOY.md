# Cloudflare 배포 가이드 (GitHub 연동 · Workers Builds)

> Next.js 16 기준 공식 권장 스택 = **OpenNext + Cloudflare Workers**.
> GitHub 연동(푸시마다 자동 배포, PR마다 프리뷰)은 Pages가 아닌
> **Workers Builds**에서 동일하게 제공됩니다. 이 프로젝트는
> `npm run cf:build` 검증이 완료된 상태입니다.

---

## 0. 전제

- 빌드/검증 완료: `npm run cf:build` → `.open-next/worker.js` + 정적 자산 159개 ✔
- 설정 파일: `wrangler.jsonc`, `open-next.config.ts` 이미 커밋 대상에 포함

## 1. GitHub에 올리기

```bash
git init
git add -A
git commit -m "Royal Builders Club v1"
git branch -M main
git remote add origin https://github.com/<사용자>/<레포이름>.git
git push -u origin main
```

> `.env.local`은 절대 푸시하지 말 것(샘플은 `.env.local.example`로 관리).
> `data/*.json`도 개인정보이므로 `.gitignore` 추가 권장.

## 2. Cloudflare 대시보드에서 레포 연결

1. 대시보드 → **Workers & Pages** → **Create application** → **Import a Git repository**
2. GitHub 계정 연결 후 위 레포 선택
3. 빌드 설정(커스텀):

| 항목 | 값 |
|---|---|
| Framework preset | `None` |
| Build command | `npm run cf:build` |
| Deploy command | `npx wrangler deploy` |
| Build output | (자동 — wrangler.jsonc가 지정) |

4. 환경 변수(Settings → Environment variables):
   - `NODE_VERSION` = `20`
   - (선택) `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `INQUIRY_TO`
     — Workers는 소켓 SMTP를 지원하지 않으므로, 메일 발송은 추후
     Resend/MailChannels 등 HTTP 기반 API로 교체 권장(코드 교체 지점: `app/api/inquiry/route.ts`)

5. **Deploy** 클릭 → 최초 배포 완료. 이후 `git push`마다 자동 배포,
   PR마다 프리뷰 URL 발급.

## 3. 문의 데이터 저장소(KV) 만들기

Workers에는 파일시스템이 없어, 코드(`lib/store.ts`)는 KV 바인딩
`RBC_STORE`를 자동 인식합니다.

```bash
# 로컬에 wrangler 로그인 후
npx wrangler kv namespace create RBC_STORE
# 출력된 id를 wrangler.jsonc 에 추가:
# "kv_namespaces": [{ "binding": "RBC_STORE", "id": "<발급된 id>" }]
```

KV가 없어도 사이트는 정상 동작하며, 문의는 워커 로그에만 남습니다.

## 4. 도메인 연결 (royalbuilders.kr)

1. 도메인 등록기관 네임서버를 Cloudflare로 이전
2. Workers & Pages → 배포된 워커 → **Settings → Domains & Routes** →
   `royalbuilders.kr` 및 `www.royalbuilders.kr` 추가 (SSL 자동)

## 5. 로컬 미리보기

```bash
npm run cf:preview   # workerd 로컬 에뮬레이션
```

---

## 참고: 왜 Pages(next-on-pages)가 아닌가

- `@cloudflare/next-on-pages`는 Next 15부터 비권장(deprecated), Next 16 미지원
- Workers Builds = 같은 Git 연동 UX + 공식 지원 + 우리가 검증한 빌드 그대로
