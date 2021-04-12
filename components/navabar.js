import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (

        <nav>
            <div className="logo">
                <Image  src="/HighPixel.png" width={200} height={77}/>
            </div>

            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/user'>Users</Link>
        </nav>

    );
}

export default Navbar;