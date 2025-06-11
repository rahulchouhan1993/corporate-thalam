import { Link } from '@inertiajs/react'
export default function Header(){
    return (
        <>
            <header>
                <nav>
                <Link className="nav-link" href="/">Home</Link>
                {/* <Link className="nav-link" href="/service/commercial-advertisment-videos">S1</Link>
                <Link className="nav-link" href="/service/videographer-and-crew">S2</Link>
                <Link className="nav-link" href="/service/digital-marketing">S3</Link>
                <Link className="nav-link" href="/service/socail-media-influencers">S4</Link>
                <Link className="nav-link" href="/service/editing-and-color-grading">S5</Link>
                <Link className="nav-link" href="/service/personal-branding">S6</Link>
                <Link className="nav-link" href="/service/traning-certification">S7</Link> */}
                </nav>
            </header>
        </>
    )
}