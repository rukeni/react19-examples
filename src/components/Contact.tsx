import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">연락처</h1>
      <p className="mb-6">
        질문이나 제안이 있으시면 아래 양식을 통해 연락해 주세요.
      </p>
      <Button>
        보내기
      </Button>
      
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            이름
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="이름을 입력하세요"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            이메일
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="이메일을 입력하세요"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-1 font-medium">
            메시지
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="메시지를 입력하세요"
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          보내기
        </button>
      </form>
    </div>
  )
} 