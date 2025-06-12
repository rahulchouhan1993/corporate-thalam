import { Link } from '@inertiajs/react'
export default function Header(){
    return (
        <>
            <header>
                <nav>
                <Link className="nav-link" href="/">Home</Link>
                </nav>
            </header>
        </>
    )
}