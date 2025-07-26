export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "웹 개발의 미래: 2024년 트렌드 분석",
    excerpt: "최신 웹 개발 트렌드와 기술들을 살펴보고, 개발자들이 주목해야 할 핵심 포인트들을 분석합니다.",
    content: `
# 웹 개발의 미래: 2024년 트렌드 분석

웹 개발 생태계는 끊임없이 진화하고 있습니다. 2024년 현재, 우리는 여러 혁신적인 기술들이 주류로 자리잡는 것을 목격하고 있습니다.

## 주요 트렌드

### 1. 서버 컴포넌트의 부상
React Server Components와 같은 기술들이 웹 애플리케이션의 성능을 획기적으로 개선하고 있습니다.

### 2. AI 통합
ChatGPT와 같은 AI 모델들이 개발 워크플로우에 깊숙이 통합되면서, 개발자의 생산성이 크게 향상되고 있습니다.

### 3. Edge Computing
Vercel Edge Functions, Cloudflare Workers 등 엣지 컴퓨팅 솔루션들이 글로벌 애플리케이션의 성능을 혁신하고 있습니다.

## 결론

이러한 트렌드들은 웹 개발의 패러다임을 바꾸고 있으며, 개발자들은 지속적인 학습과 적응이 필요한 시점입니다.
    `,
    date: "2024-01-15",
    author: "김개발",
    readTime: "5분"
  },
  {
    id: "2", 
    title: "타입스크립트 마스터하기: 고급 패턴과 베스트 프랙티스",
    excerpt: "타입스크립트의 고급 기능들을 활용하여 더 안전하고 유지보수 가능한 코드를 작성하는 방법을 알아봅니다.",
    content: `
# 타입스크립트 마스터하기: 고급 패턴과 베스트 프랙티스

타입스크립트는 단순히 자바스크립트에 타입을 추가한 것 이상의 강력한 기능들을 제공합니다.

## 고급 타입 패턴

### 1. Conditional Types
\`\`\`typescript
type ApiResponse<T> = T extends string 
  ? { message: T }
  : { data: T }
\`\`\`

### 2. Template Literal Types
\`\`\`typescript
type EventName<T extends string> = \`on\${Capitalize<T>}\`
\`\`\`

### 3. Mapped Types
\`\`\`typescript
type Optional<T> = {
  [K in keyof T]?: T[K]
}
\`\`\`

## 베스트 프랙티스

1. **엄격한 타입 체크 활성화**
2. **Union Types 적극 활용**
3. **타입 가드 함수 구현**
4. **Generic 제약 조건 활용**

이러한 패턴들을 마스터하면 더욱 견고한 애플리케이션을 구축할 수 있습니다.
    `,
    date: "2024-01-10",
    author: "이타입",
    readTime: "7분"
  },
  {
    id: "3",
    title: "성능 최적화의 핵심: 리액트 렌더링 이해하기",
    excerpt: "리액트 애플리케이션의 렌더링 최적화 기법과 성능 향상을 위한 실전 팁들을 공유합니다.",
    content: `
# 성능 최적화의 핵심: 리액트 렌더링 이해하기

리액트 애플리케이션의 성능은 사용자 경험에 직결되는 중요한 요소입니다.

## 렌더링 최적화 기법

### 1. React.memo 활용
불필요한 리렌더링을 방지하는 가장 기본적인 방법입니다.

\`\`\`javascript
const OptimizedComponent = React.memo(({ data }) => {
  return <div>{data.name}</div>
})
\`\`\`

### 2. useMemo와 useCallback
비용이 큰 계산이나 함수 재생성을 방지합니다.

### 3. 컴포넌트 분할
거대한 컴포넌트를 작은 단위로 분할하여 렌더링 범위를 제한합니다.

## 성능 측정 도구

- React DevTools Profiler
- Chrome DevTools Performance 탭
- Web Vitals 메트릭

## 실전 팁

1. **상태 끌어올리기 최소화**
2. **Effect 의존성 배열 최적화**
3. **가상화 기법 활용**
4. **코드 분할과 지연 로딩**

성능 최적화는 측정, 분석, 개선의 반복 과정입니다.
    `,
    date: "2024-01-05",
    author: "박성능",
    readTime: "6분"
  }
];