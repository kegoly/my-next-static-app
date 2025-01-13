import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full py-6 bg-white shadow-sm">
      <nav className="container mx-auto px-4">
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
          <li><Link href="/features" className="hover:text-blue-600">Features</Link></li>
          <li><Link href="/pricing" className="hover:text-blue-600">Pricing</Link></li>
        </ul>
      </nav>
    </header>
  );
}