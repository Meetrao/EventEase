import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          EventEase
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#features" className="text-gray-600 hover:text-primary">Features</Link></li>
            <li><Link href="#how-it-works" className="text-gray-600 hover:text-primary">How It Works</Link></li>
            <li><Link href="#pricing" className="text-gray-600 hover:text-primary">Pricing</Link></li>
          </ul>
        </nav>
        <Button>Get Started</Button>
      </div>
    </header>
  )
}