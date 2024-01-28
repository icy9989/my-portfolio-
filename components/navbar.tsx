import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
        <div className="flex justify-between items-center">
            <Image
                src="/logo.png" 
                alt="Logo"
                width={40}
                height={40}
            />
            <div>
                <ul className="flex items-center gap-6 text-muted-foreground font-medium">
                    <li><Link href="" className="hover:text-purple-700 transition-all">Home</Link></li>
                    <li><Link href="" className="hover:text-purple-700 transition-all">Profile</Link></li>
                    <li><Link href="" className="hover:text-purple-700 transition-all">Skills</Link></li>
                    <li><Link href="" className="hover:text-purple-700 transition-all">Experience</Link></li>
                    <li><Link href="" className="hover:text-purple-700 transition-all">Projects</Link></li>
                    <li><Link href="" className="hover:text-purple-700 transition-all">Certificate</Link></li>
                    <li><Link href="" className="hover:text-purple-700 transition-all">Contact</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar