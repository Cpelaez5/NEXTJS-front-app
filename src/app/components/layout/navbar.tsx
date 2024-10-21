// /src/components/layout/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">MyApp</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/auth/login" className="text-gray-300 hover:text-white transition duration-200">Login</Link>
          </li>
          <li>
            <Link href="/auth/register" className="text-gray-300 hover:text-white transition duration-200">Register</Link>
          </li>
          <li>
            <Link href="/dashboard" className="text-gray-300 hover:text-white transition duration-200">Dashboard</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}