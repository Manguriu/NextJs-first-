import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav>
        <div className="logo">
            <Image src="/b.jpg" width={125} height={78}
            />

        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/new">Test Data</Link>
        </nav>
     );
}
 
export default Navbar

