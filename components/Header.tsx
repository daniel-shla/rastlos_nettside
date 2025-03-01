import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center border-b border-gray-200">
      <div className="flex items-center">
        <Link href="/" className="mr-4">
          <Image src="/logo.png" alt="Rastlos Logo" width={275} height={200} />
        </Link>
        <nav className="flex gap-4">
          <Link href="/about" className="hover:text-blue-500 font-anton text-header-text text-xl">OM OSS</Link> {/* Color applied */}
          <Link href="/siifra" className="hover:text-blue-500 font-anton text-header-text text-xl">SI IFRA</Link> {/* Color applied */}
          <Link href="/privacy" className="hover:text-blue-500 font-anton text-header-text text-xl">PERSONVERNSERKLÆRING</Link> {/* Color applied */}
          <Link href="/tilbakemelding" className="hover:text-blue-500 font-anton text-header-text text-xl">TILBAKEMELDING</Link> {/* Color applied */}
        </nav>
      </div>
      <nav className="flex gap-4">
        <Link href="/merch" className="hover:text-blue-500 font-anton text-header-text text-xl">Merch</Link> {/* Color applied */}
        <Link href="/events" className="hover:text-blue-500 font-anton text-header-text text-xl">Arrangementer</Link> {/* Color applied */}
        <Link href="/intern" className="hover:text-blue-500 font-anton text-header-text text-xl">Bli Intern</Link> {/* Color applied */}
      </nav>
    </header>
  );
}
