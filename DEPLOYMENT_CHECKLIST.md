# 🚀 Deployment Checklist - WebP Converter

배포 전에 완료해야 할 작업 목록입니다.

## ✅ 완료된 항목
- [x] 모든 텍스트 영어 번역
- [x] SEO 메타 태그 설정
- [x] Structured Data (JSON-LD) 구현
- [x] Open Graph 태그 설정
- [x] Twitter Card 설정
- [x] Sitemap 생성 (`app/sitemap.ts`)
- [x] Robots.txt 생성 (`public/robots.txt`)
- [x] PWA Manifest 설정 (`app/manifest.ts`)
- [x] TypeScript 에러 수정

---

## 🎨 이미지 파일 생성 (필수)

### 1. PWA 아이콘 (manifest.ts)
**필요한 파일:**
- `public/icon-192.png` (192x192px)
- `public/icon-512.png` (512x512px)

**디자인 가이드:**
- WebP 로고 또는 "W" 심볼 추천
- 배경: 파란색 (#3b82f6) 또는 그라데이션
- 아이콘: 흰색 또는 밝은 색상
- 여백: 각 면에 10-15% 여백 유지
- 포맷: PNG (투명 배경 가능)

**생성 방법:**
```bash
# Figma, Canva, 또는 온라인 도구 사용
# https://realfavicongenerator.net/ (무료 도구)
# https://favicon.io/favicon-generator/ (텍스트로 생성)
```

---

### 2. Favicon (브라우저 탭 아이콘)
**필요한 파일:**
- `public/favicon.ico` (32x32px 또는 16x16px)

**디자인 가이드:**
- 간단한 "W" 로고
- 배경: 파란색 (#3b82f6)
- 아이콘: 흰색
- 포맷: ICO 또는 PNG

**생성 방법:**
```bash
# icon-192.png를 사용해서 변환
# https://www.icoconverter.com/
# https://favicon.io/
```

---

### 3. Apple Touch Icon (iOS 홈 화면)
**필요한 파일:**
- `public/apple-touch-icon.png` (180x180px)

**디자인 가이드:**
- icon-192.png와 동일한 디자인
- iOS는 자동으로 둥근 모서리 적용
- 여백 충분히 유지 (15-20%)
- 포맷: PNG

**생성 방법:**
```bash
# icon-192.png 리사이즈
# https://www.iloveimg.com/resize-image
```

---

### 4. Open Graph 이미지 (소셜 미디어 공유)
**필요한 파일:**
- `public/og-image.png` (1200x630px)

**디자인 가이드:**
- 큰 제목: "WebP Converter"
- 부제목: "Free Online Image Compression"
- 배경: 그라데이션 (파란색 → 보라색)
- 중앙에 샘플 이미지 변환 예시 (선택)
- 텍스트: 크고 읽기 쉽게
- 포맷: PNG 또는 JPG

**생성 방법:**
```bash
# Figma, Canva 템플릿 사용
# https://www.canva.com/create/og-images/
# 크기: 1200x630px (Facebook/Twitter 표준)
```

**중요:**
- 텍스트는 가장자리에서 10% 여백 유지
- 모바일에서 중앙 부분만 보일 수 있음

---

### 5. Screenshot (검색 결과용)
**필요한 파일:**
- `public/screenshot.png` (1280x720px 이상)

**디자인 가이드:**
- 실제 사이트 스크린샷
- 파일 업로드 + 변환 완료 화면
- 깔끔하게 캡처
- 포맷: PNG

**생성 방법:**
```bash
# 개발 서버 실행 후
npm run dev

# 브라우저에서 테스트 이미지 업로드
# 전체 화면 스크린샷 캡처
# 크기 조정: 1280x720px
```

---

## 🔧 설정 파일 수정

### 1. Google Search Console 등록 후
**파일:** `app/layout.tsx`
**수정:** Line 49

```typescript
verification: {
  google: "your-google-site-verification", // ← 실제 인증 코드로 변경
},
```

**단계:**
1. https://search.google.com/search-console 접속
2. 사이트 추가
3. HTML 태그 선택
4. `content="abcd1234..."` 값 복사
5. layout.tsx에 붙여넣기

---

### 2. 실제 도메인으로 URL 변경
**파일:** `app/layout.tsx`, `app/page-schema.tsx`, `app/sitemap.ts`

**현재:**
```typescript
url: "https://towebpi.vercel.app"
```

**변경 후:**
```typescript
url: "https://your-actual-domain.com"
```

**수정 필요한 파일:**
- `app/layout.tsx` (Line 25, 46)
- `app/page-schema.tsx` (Line 7, 23)
- `app/sitemap.ts` (Line 4)

---

### 3. Twitter 핸들 업데이트 (선택)
**파일:** `app/layout.tsx`
**수정:** Line 43

```typescript
creator: "@webpconverter", // ← 실제 Twitter 계정으로 변경
```

---

## 📦 Vercel 배포

### 1. GitHub에 푸시
```bash
git init
git add .
git commit -m "Initial commit: WebP Converter with SEO"
git branch -M main
git remote add origin https://github.com/yourusername/towebp.git
git push -u origin main
```

### 2. Vercel 연동
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

또는 Vercel 웹사이트에서:
1. https://vercel.com/new 접속
2. GitHub 저장소 선택
3. Deploy 클릭

---

## 🔍 배포 후 확인사항

### 1. SEO 테스트
- [Google Rich Results Test](https://search.google.com/test/rich-results)
  - 배포된 URL 입력
  - Structured Data 정상 인식 확인

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
  - Open Graph 이미지 확인

- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
  - Twitter Card 미리보기 확인

### 2. PWA 테스트
- Chrome DevTools → Lighthouse
  - PWA 점수 확인
  - "설치 가능" 여부 확인

### 3. 성능 테스트
- [PageSpeed Insights](https://pagespeed.web.dev/)
  - 모바일/데스크톱 성능 확인
  - Core Web Vitals 확인

### 4. 접근성 테스트
- Chrome DevTools → Lighthouse
  - Accessibility 점수 확인 (목표: 90+)

---

## 📊 우선순위별 작업

### 🔴 필수 (배포 전)
1. ✅ PWA 아이콘 생성 (icon-192.png, icon-512.png)
2. ✅ Favicon 생성 (favicon.ico)
3. ✅ Open Graph 이미지 (og-image.png)
4. ✅ 도메인 URL 변경 (layout.tsx, page-schema.tsx, sitemap.ts)

### 🟡 중요 (배포 직후)
5. ⭕ Google Search Console 등록 및 인증 코드 추가
6. ⭕ Apple Touch Icon 생성 (apple-touch-icon.png)
7. ⭕ Screenshot 생성 (screenshot.png)

### 🟢 선택 (추후)
8. ⚪ Twitter 계정 생성 및 핸들 업데이트
9. ⚪ Analytics 추가 (Google Analytics, Vercel Analytics)
10. ⚪ 실제 사용자 리뷰 수집 (page-schema.tsx의 rating 업데이트)

---

## 🎨 이미지 생성 빠른 가이드

### 방법 1: 온라인 도구 (추천)
```bash
# 1. Favicon & Icon 생성
https://favicon.io/favicon-generator/
- 텍스트: "W"
- 배경: #3b82f6 (파란색)
- 폰트: Bold
- 다운로드 후 public/ 폴더에 복사

# 2. OG Image 생성
https://www.canva.com/
- 템플릿 검색: "og image"
- 크기: 1200x630px
- 디자인 후 다운로드
```

### 방법 2: Figma/디자인 툴
```bash
# 전문가 디자인을 원하면
# Figma 템플릿 사용 또는 디자이너 의뢰
```

### 방법 3: AI 생성 (빠름)
```bash
# DALL-E, Midjourney 등 AI 도구
프롬프트: "Modern minimalist app icon for WebP image
converter, blue gradient background, white 'W' letter,
flat design, professional"
```

---

## ✅ 완료 후 체크리스트

- [ ] public/icon-192.png 존재
- [ ] public/icon-512.png 존재
- [ ] public/favicon.ico 존재
- [ ] public/apple-touch-icon.png 존재
- [ ] public/og-image.png 존재
- [ ] public/screenshot.png 존재 (선택)
- [ ] layout.tsx의 모든 URL을 실제 도메인으로 변경
- [ ] page-schema.tsx의 URL 변경
- [ ] sitemap.ts의 URL 변경
- [ ] Google Search Console 등록 완료
- [ ] Vercel 배포 완료
- [ ] SEO 테스트 통과
- [ ] PWA 설치 테스트 완료

---

**현재 상태:** 코드는 완성! 이미지만 추가하면 바로 배포 가능 🚀

**예상 소요 시간:**
- 이미지 생성: 30분 ~ 1시간
- 배포 & 설정: 15분
- **총 소요 시간: 약 1~1.5시간**
