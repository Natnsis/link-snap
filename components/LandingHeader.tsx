import Link from 'next/link';

const LandingHeader = () => {
  return (
    <header className="flex justify-center">
      <nav className="flex gap-5 text-gray-500">
        <a href='#features'>Features</a>
        <a href='#how-it-works'>How It Works</a>
        <Link href="/auth/login">Get Started</Link>
      </nav>
    </header>
  )
}

export default LandingHeader
