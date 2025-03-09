import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// 자동 생성된 라우트 트리 가져오기
import { routeTree } from './routeTree.gen'

// 라우터 생성
const router = createRouter({ routeTree })

// 타입 선언
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// 개발 환경에서만 개발 도구 추가
// if (import.meta.env.DEV) {
//   const { worker } = await import('./mocks/browser')
//   await worker.start({ onUnhandledRequest: 'bypass' })
// }

// 라우터 초기화
await router.load()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
