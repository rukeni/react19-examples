export function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">홈페이지</h1>
      <p className="mb-4">
        TanStack Router를 사용한 React 19 예제 애플리케이션에 오신 것을 환영합니다!
      </p>
      <p className="mb-4">
        이 예제는 React 19와 TanStack Router를 함께 사용하는 방법을 보여줍니다.
      </p>
      <div className="bg-blue-100 p-4 rounded-lg border border-blue-200 mt-6">
        <h2 className="text-xl font-semibold mb-2">TanStack Router의 특징</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>타입 안전성 - TypeScript와 완벽하게 통합</li>
          <li>자동 코드 분할 및 지연 로딩</li>
          <li>중첩 라우팅 지원</li>
          <li>데이터 로딩 및 변형 통합</li>
          <li>검색 파라미터 관리</li>
        </ul>
      </div>
    </div>
  )
} 