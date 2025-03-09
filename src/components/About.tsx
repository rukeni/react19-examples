export function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">소개</h1>
      <p className="mb-4">
        이 프로젝트는 React 19와 TanStack Router를 사용한 예제 애플리케이션입니다.
      </p>
      <p className="mb-4">
        TanStack Router는 React 애플리케이션을 위한 강력한 라우팅 라이브러리로, 
        타입 안전성과 성능에 중점을 둔 현대적인 라우팅 솔루션입니다.
      </p>
      <div className="bg-green-100 p-4 rounded-lg border border-green-200 mt-6">
        <h2 className="text-xl font-semibold mb-2">프로젝트 기술 스택</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>React 19</li>
          <li>TypeScript</li>
          <li>TanStack Router</li>
          <li>Vite</li>
        </ul>
      </div>
    </div>
  )
} 