import { Link } from '@inertiajs/react';
import { useRef } from 'react';
export default function Header(){
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <div className="callSec">
                <div className="callNumber">
                <a href="tel:+91-9878456512">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.9201 2.00001H19.9201C20.1986 1.99888 20.4743 2.05592 20.7294 2.1675C20.9846 2.27907 21.2137 2.44271 21.402 2.64793C21.5902 2.85315 21.7336 3.09543 21.8228 3.35926C21.912 3.62308 21.9452 3.90263 21.9201 4.18001C21.5857 7.25717 20.5342 10.213 18.8501 12.81C17.3148 15.2262 15.2663 17.2747 12.8501 18.81C10.2413 20.5 7.27109 21.5518 4.1801 21.88C3.90356 21.905 3.62486 21.8721 3.36172 21.7835C3.09859 21.6949 2.85679 21.5524 2.65172 21.3652C2.44665 21.178 2.28281 20.9502 2.17062 20.6962C2.05843 20.4422 2.00036 20.1677 2.0001 19.89L2.0001 16.89C1.99532 16.4047 2.16718 15.9342 2.48363 15.5662C2.80008 15.1983 3.23954 14.9579 3.7201 14.89C4.68016 14.7634 5.62282 14.5286 6.5301 14.19C6.88802 14.0555 7.27701 14.0263 7.65098 14.1061C8.02494 14.1859 8.36821 14.3711 8.6401 14.64L9.9101 15.91C12.4136 14.4865 14.4865 12.4136 15.9101 9.91001L14.6401 8.64001C14.3712 8.36812 14.1859 8.02485 14.1062 7.65089C14.0264 7.27692 14.0556 6.88793 14.1901 6.53001C14.5286 5.62273 14.7635 4.68007 14.8901 3.72001C14.9586 3.23424 15.2033 2.7906 15.5776 2.47347C15.9519 2.15634 16.4297 1.98784 16.9201 2.00001Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    +91-9878456512 
                </a>
                </div>
            </div>
            <div className="whatsappicon">
                <a target="_blank" href="https://api.whatsapp.com/send?phone=919878456512&text=Hello%20Team%2C%20I%20would%20like%20to%20discuss%20my%20project%20with%20you.">
                <img src="/images/whatsapp.svg" alt="img" />
                </a>
            </div>
            <header>
                <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid p-0">
                        <a className="logo" href="/">
                        <img src="/images/logowork.svg" alt="img" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/#scroll-services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/#scroll-pricing">pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/#scroll-work">Work</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/#scroll-studies">case studies</Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link" href="/#scroll-team">team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/#scroll-about">about</Link>
                            </li>
                            {/* <li className="nav-item" onClick={() => scrollToSection('scroll-contact')}>
                                <a className="nav-link" href="javascript:void(0);">contact</a>
                            </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
                </div>
            </header>
        </>
    )
}