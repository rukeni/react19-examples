import { Link, Outlet } from '@tanstack/react-router'

export function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <nav className="flex gap-4">
            <Link to="/" className="hover:underline">
              홈
            </Link>
            <Link to="/about" className="hover:underline">
              소개
            </Link>
            <Link to="/contact" className="hover:underline">
              연락처
            </Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto p-4">
        <Outlet />
      </main>
      
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>© 2024 TanStack Router 예제</p>
        </div>
      </footer>
    </div>
  )
} 