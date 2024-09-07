import Link from "next/link"


export default function Navbar() {
    return(
        <nav>
            <a href="index.html" className="logo">Xplore
                <i className="fab fa-stay"></i>kill
            </a>
            <div className="nav-links" id="navlinks">
                
                <i className="fa fa-times" ></i>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/courses">Course</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <i className="fa fa-bars" ></i>
           
        </nav>
    )
}