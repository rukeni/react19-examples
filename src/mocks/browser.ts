import { setupWorker } from 'msw/browser'
import { http, HttpResponse } from 'msw'

// 모의 API 핸들러 정의
const handlers = [
  http.get('/api/example', () => {
    return HttpResponse.json({
      message: '모의 API 응답입니다.',
      success: true,
    })
  }),
]

// 서비스 워커 설정
export const worker = setupWorker(...handlers) 