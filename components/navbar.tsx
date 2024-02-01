import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const navbars = [
    {
        href: "#profile",
        title: "Profile"
    },
    {
        href: "#skill",
        title: "Skills"
    },
    {
        href: "#development",
        title: "Developments"
    },
    {
        href: "#experience",
        title: "Experiences"
    },
    {
        href: "#project",
        title: "Projects"
    },
    {
        href: "#contact",
        title: "Contact"
    },
]

const Navbar = () => {
  return (
    <nav>
        <div className="flex justify-between items-center">
            <div className="w-14 h-14 relative">
                <Image
                    src="/logo.png" 
                    alt="Logo"
                    fill
                    className="absolute"
                />
            </div> 
            <div className="ml-auto md:hidden bg-slate-50 p-2 rounded-sm cursor-pointer">
                <Menu className="w-6 h-6 text-slate-500" />
            </div>
            <div className="md:flex justify-end hidden">
                <ul className="flex items-center gap-6 font-medium">
                    <li><Link href="" className="hover:text-purple-700 transition-all">Home</Link></li>
                    {navbars.map(({ href, title }) => (
                        <li key={title}>
                            <Link href={href} className="hover:text-purple-700 transition-all">{title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar