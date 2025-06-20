import Reviews from "../Component/Reviews";
import TeamSlider from "../Component/TeamSlider";
import { route } from 'ziggy-js';
import { Link } from '@inertiajs/react';
export default function Home(){
//console.log(window.Ziggy.routes.home);
    const creativeImages = [
        "images/tecjimg01.jpg",
        "images/tecjimg02.jpg",
        "images/tecjimg03.jpg",
        "images/tecjimg04.jpg",
        "images/tecjimg01.jpg",
        "images/tecjimg02.jpg",
        "images/tecjimg03.jpg",
        "images/tecjimg04.jpg"
    ];

    const showHostImages = [
        "images/tecjimg05.jpg",
        "images/tecjimg06.jpg",
        "images/tecjimg07.jpg",
        "images/tecjimg08.jpg",
        "images/tecjimg05.jpg",
        "images/tecjimg06.jpg",
        "images/tecjimg07.jpg",
        "images/tecjimg08.jpg"
    ];
    return (
    <>
        <section className="videoSec">
            <div className="video-bg">
              <img src="images/Banner-bg-gif.gif" alt="Background GIF" />
            </div>
            <div className="videoCnt">
              <h1>Best <span>Branding & Video Production</span> Company in South afrika India</h1>
            </div>
        </section>

        <section className="services-section" >
            <h2 id="scroll-services">OUR <span className="highlight">SERVICES</span>
            </h2>
            <div className="container" >
                <div className="services-grid">
                    <div className="serviceBxFrst">
                        <Link href="service/commercial-advertisment-videos" className="service-box">
                            <img src="images/commeimg.jpg" alt="img" />
                            <div className="overlay">COMMERCIAL ADVERTISEMENT VIDEOS</div>
                        </Link>
                    </div>
                    <div className="serviceBxMid">
                        <Link href="service/videographer-and-crew" className="service-box">
                            <img src="images/hireimg.jpg" alt="img" />
                            <div className="overlay">HIRE VIDEOGRAPHER & CREW</div>
                        </Link>
                        <Link href="service/digital-marketing" className="service-box">
                            <img src="images/digital.jpg" alt="img" />
                            <div className="overlay">DIGITAL MARKETING & LEAD GENERATION</div>
                        </Link>
                        <Link href="service/socail-media-influencers" className="service-box">
                            <img src="images/socialimg.jpg" alt="img" />
                            <div className="overlay">HIRE SOCIAL MEDIA INFLUENCERS FOR YOUR BRANDS</div>
                        </Link>
                        <Link href="service/editing-and-color-grading" className="service-box">
                            <img src="images/editingimg.jpg" alt="img" />
                            <div className="overlay">EDITING & COLOR GRADING</div>
                        </Link>
                        <Link href="service/event-managment" className="service-box">
                            <img src="images/eventmagement.jpg" alt="img" />
                            <div className="overlay">EVENT MANAGEMENT</div>
                        </Link>
                        <Link href="service/personal-branding" className="service-box">
                            <img src="images/hireimg.jpg" alt="img" />
                            <div className="overlay">PERSONAL BRANDING</div>
                        </Link>
                    </div>
                    <div className="serviceBxLast">
                         <Link href="service/traning-certification" className="service-box">
                            <img src="images/trainingcertificatimg.jpg" alt="img" />
                            <div className="overlay">TRAINING & CERTIFICATION PROGRAMS</div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="about-section" id="scroll-about">
            <div className="container">
                <h2>ABOUT <span className="highlight">US</span></h2>
                <div className="about-grid">
                    <div className="about-item top-border">
                        <h1 className="number">12+</h1>
                        <h3>Creative Writers & Tool Experts</h3>
                        <p>Delivering sharp content, Seamless edits, and high-impact deliverables.</p>
                    </div>
                    <div className="about-item top-border">
                        <h1 className="number">1</h1>
                        <h3>Studio & Office Space</h3>
                        <p>A dynamic studio is built for innovation and professional growth.</p>
                    </div>
                    <div className="about-item top-border">
                        <h1 className="number">25+</h1>
                        <h3>Projects Delivered</h3>
                        <p>Delivered high-quality projects that empowered clients to achieve remarkable growth and success. </p>
                    </div>
                    <div className="about-item bottom-border">
                        <h3>Quality</h3>
                        <p>Creative Writers & Tool Experts, Creative Writers & Tool Experts</p>
                    </div>
                    <div className="about-item bottom-border">
                        <h3>Delivery</h3>
                        <p>Deliverables on time enhances client satisfaction and fosters long-term Success.</p>
                    </div>
                    <div className="about-item bottom-border">
                        <h3>Service</h3>
                        <p>Creative Writers & Tool Experts, Creative Writers & Tool Experts</p>
                    </div>
                </div>
            </div>
            <div className="about-footer-line">
                <span>CREATIVE <span className="highlight">EXPERTS</span>, YOUNG <span className="highlight">MINDS</span></span>
            </div>
        </section>

        <section className="industries-section" id="scroll-work">
            <div className="container">
                <h2>
                    <span className="highlight">INDUSTRIES</span> WE WORK
                </h2>
                <div className="industries-grid">
                    <div className="industry-box">
                        <img src="images/educationicon.png" alt="Education" />
                        <p>Education</p>
                    </div>
                    <div className="industry-box">
                        <img src="images/realicon.png" alt="Real Estate" />
                        <p>Real Estate</p>
                    </div>
                    <div className="industry-box">
                        <img src="images/retail.png" alt="Retails" />
                        <p>Retails</p>
                    </div>
                    <div className="industry-box">
                        <img src="images/eventicon.png" alt="Events" />
                        <p>Events</p>
                    </div>
                    <div className="industry-box">
                        <img src="images/financialicon.png" alt="Financial Institutions" />
                        <p>Financial Institutions</p>
                    </div>
                    <div className="industry-box">
                        <img src="images/bankicon.png" alt="Banks" />
                        <p>Banks</p>
                    </div>
                    <div className="industry-box">
                        <img src="images/politicali.png" alt="Political Parties" />
                        <p>Political Parties</p>
                    </div>
                    <div className="industry-box">
                        <img src="images/induicon.png" alt="Individuals" />
                        <p>Individuals</p>
                    </div>
                    <div className="industry-box">
                        <img src="images/beauty.png" alt="Beauty & Cosmetics" />
                        <p>Beauty & Cosmetics</p>
                    </div>
                    <div className="industry-box">
                        <img src="images/hardware.png" alt="Hardware & Software" />
                        <p>Hardware & Software</p>
                    </div>
                    <div className="industry-box">
                        <img src="images/restaurants.png" alt="Restaurants & Night Clubs" />
                        <p>Restaurants & Night Clubs</p>
                    </div>
                    <div className="industry-box">
                        <img src="images/travel.png" alt="Travel & Tourism" />
                        <p>Travel & Tourism</p>
                    </div>
                </div>
                <div className="support-text"> SUPPORTING <span className="highlight">BRANDS</span> AND <span className="highlight">PROFESSIONALS</span> TO GROW SMARTER WITH <span className="highlight">DIGITAL PRESENCE</span> FOR ALL INDUSTRIES </div>
            </div>
        </section>

        <section className="social-media">
            <h2>OUR <span className="highlight">SOCIAL</span> MEDIA </h2>
            <div className="social-wrapper">
                <div className="social-column">
                    <div className="banner">
                        <button className="youtube-button">
                            <img src="images/corporate.png" alt="Corporate Thalam" />
                        </button>
                    </div>
                    <div className="tags">
                        <button>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.74016 12.2092L12.7085 17.5H18.5418L11.9935 8.76833L17.4418 2.5H15.2335L10.9693 7.405L7.29183 2.5H1.4585L7.71683 10.8458L1.9335 17.5H4.14183L8.74016 12.2092ZM13.5418 15.8333L4.79183 4.16667H6.4585L15.2085 15.8333H13.5418Z" fill="#01123D" />
                            </svg>
                            @CorporateThalam_25 
                        </button>
                        <button>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.49984 1.66675H13.4998C16.1665 1.66675 18.3332 3.83341 18.3332 6.50008V13.5001C18.3332 14.782 17.8239 16.0113 16.9175 16.9178C16.0111 17.8242 14.7817 18.3334 13.4998 18.3334H6.49984C3.83317 18.3334 1.6665 16.1667 1.6665 13.5001V6.50008C1.6665 5.2182 2.17573 3.98882 3.08215 3.0824C3.98858 2.17597 5.21796 1.66675 6.49984 1.66675ZM6.33317 3.33341C5.53752 3.33341 4.77446 3.64949 4.21185 4.21209C3.64924 4.7747 3.33317 5.53777 3.33317 6.33341V13.6667C3.33317 15.3251 4.67484 16.6667 6.33317 16.6667H13.6665C14.4622 16.6667 15.2252 16.3507 15.7878 15.7881C16.3504 15.2255 16.6665 14.4624 16.6665 13.6667V6.33341C16.6665 4.67508 15.3248 3.33341 13.6665 3.33341H6.33317ZM14.3748 4.58341C14.6511 4.58341 14.9161 4.69316 15.1114 4.88851C15.3068 5.08386 15.4165 5.34881 15.4165 5.62508C15.4165 5.90135 15.3068 6.1663 15.1114 6.36165C14.9161 6.557 14.6511 6.66675 14.3748 6.66675C14.0986 6.66675 13.8336 6.557 13.6383 6.36165C13.4429 6.1663 13.3332 5.90135 13.3332 5.62508C13.3332 5.34881 13.4429 5.08386 13.6383 4.88851C13.8336 4.69316 14.0986 4.58341 14.3748 4.58341ZM9.99984 5.83341C11.1049 5.83341 12.1647 6.2724 12.9461 7.0538C13.7275 7.8352 14.1665 8.89501 14.1665 10.0001C14.1665 11.1052 13.7275 12.165 12.9461 12.9464C12.1647 13.7278 11.1049 14.1667 9.99984 14.1667C8.89477 14.1667 7.83496 13.7278 7.05356 12.9464C6.27216 12.165 5.83317 11.1052 5.83317 10.0001C5.83317 8.89501 6.27216 7.8352 7.05356 7.0538C7.83496 6.2724 8.89477 5.83341 9.99984 5.83341ZM9.99984 7.50008C9.3368 7.50008 8.70091 7.76347 8.23207 8.23231C7.76323 8.70115 7.49984 9.33704 7.49984 10.0001C7.49984 10.6631 7.76323 11.299 8.23207 11.7678C8.70091 12.2367 9.3368 12.5001 9.99984 12.5001C10.6629 12.5001 11.2988 12.2367 11.7676 11.7678C12.2364 11.299 12.4998 10.6631 12.4998 10.0001C12.4998 9.33704 12.2364 8.70115 11.7676 8.23231C11.2988 7.76347 10.6629 7.50008 9.99984 7.50008Z" fill="#01123D" />
                            </svg>
                            CorporateThalam_25 
                        </button>
                        <button>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.49984 1.66675H13.4998C16.1665 1.66675 18.3332 3.83341 18.3332 6.50008V13.5001C18.3332 14.782 17.8239 16.0113 16.9175 16.9178C16.0111 17.8242 14.7817 18.3334 13.4998 18.3334H6.49984C3.83317 18.3334 1.6665 16.1667 1.6665 13.5001V6.50008C1.6665 5.2182 2.17573 3.98882 3.08215 3.0824C3.98858 2.17597 5.21796 1.66675 6.49984 1.66675ZM6.33317 3.33341C5.53752 3.33341 4.77446 3.64949 4.21185 4.21209C3.64924 4.7747 3.33317 5.53777 3.33317 6.33341V13.6667C3.33317 15.3251 4.67484 16.6667 6.33317 16.6667H13.6665C14.4622 16.6667 15.2252 16.3507 15.7878 15.7881C16.3504 15.2255 16.6665 14.4624 16.6665 13.6667V6.33341C16.6665 4.67508 15.3248 3.33341 13.6665 3.33341H6.33317ZM14.3748 4.58341C14.6511 4.58341 14.9161 4.69316 15.1114 4.88851C15.3068 5.08386 15.4165 5.34881 15.4165 5.62508C15.4165 5.90135 15.3068 6.1663 15.1114 6.36165C14.9161 6.557 14.6511 6.66675 14.3748 6.66675C14.0986 6.66675 13.8336 6.557 13.6383 6.36165C13.4429 6.1663 13.3332 5.90135 13.3332 5.62508C13.3332 5.34881 13.4429 5.08386 13.6383 4.88851C13.8336 4.69316 14.0986 4.58341 14.3748 4.58341ZM9.99984 5.83341C11.1049 5.83341 12.1647 6.2724 12.9461 7.0538C13.7275 7.8352 14.1665 8.89501 14.1665 10.0001C14.1665 11.1052 13.7275 12.165 12.9461 12.9464C12.1647 13.7278 11.1049 14.1667 9.99984 14.1667C8.89477 14.1667 7.83496 13.7278 7.05356 12.9464C6.27216 12.165 5.83317 11.1052 5.83317 10.0001C5.83317 8.89501 6.27216 7.8352 7.05356 7.0538C7.83496 6.2724 8.89477 5.83341 9.99984 5.83341ZM9.99984 7.50008C9.3368 7.50008 8.70091 7.76347 8.23207 8.23231C7.76323 8.70115 7.49984 9.33704 7.49984 10.0001C7.49984 10.6631 7.76323 11.299 8.23207 11.7678C8.70091 12.2367 9.3368 12.5001 9.99984 12.5001C10.6629 12.5001 11.2988 12.2367 11.7676 11.7678C12.2364 11.299 12.4998 10.6631 12.4998 10.0001C12.4998 9.33704 12.2364 8.70115 11.7676 8.23231C11.2988 7.76347 10.6629 7.50008 9.99984 7.50008Z" fill="#01123D" />
                            </svg>
                            CorporateThalam_25 
                        </button>
                    </div>
                    <div className="posts">
                        <a href="#">
                        <img src="images/shenot.png" alt="Post 1" />
                        </a>
                        <a href="#">
                        <img src="images/2.png" alt="Post 1" />
                        </a>
                        <a href="#">
                        <img src="images/3.png" alt="Post 1" />
                        </a>
                    </div>
                    <div className="posts">
                        <a href="#">
                        <img src="images/5.png" alt="Post 1" />
                        </a>
                        <a href="#">
                        <img src="images/6.png" alt="Post 1" />
                        </a>
                        <a href="#">
                        <img src="images/8.png" alt="Post 1" />
                        </a>
                    </div>
                </div>
                <div className="social-column">
                    <div className="banner">
                        <button className="youtube-button">
                            <img src="images/polictth.png" alt="YouTube" />
                        </button>
                    </div>
                    <div className="tags">
                        <button>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.74016 12.2092L12.7085 17.5H18.5418L11.9935 8.76833L17.4418 2.5H15.2335L10.9693 7.405L7.29183 2.5H1.4585L7.71683 10.8458L1.9335 17.5H4.14183L8.74016 12.2092ZM13.5418 15.8333L4.79183 4.16667H6.4585L15.2085 15.8333H13.5418Z" fill="#01123D" />
                            </svg>
                            @CorporateThalam_25 
                        </button>
                        <button>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.49984 1.66675H13.4998C16.1665 1.66675 18.3332 3.83341 18.3332 6.50008V13.5001C18.3332 14.782 17.8239 16.0113 16.9175 16.9178C16.0111 17.8242 14.7817 18.3334 13.4998 18.3334H6.49984C3.83317 18.3334 1.6665 16.1667 1.6665 13.5001V6.50008C1.6665 5.2182 2.17573 3.98882 3.08215 3.0824C3.98858 2.17597 5.21796 1.66675 6.49984 1.66675ZM6.33317 3.33341C5.53752 3.33341 4.77446 3.64949 4.21185 4.21209C3.64924 4.7747 3.33317 5.53777 3.33317 6.33341V13.6667C3.33317 15.3251 4.67484 16.6667 6.33317 16.6667H13.6665C14.4622 16.6667 15.2252 16.3507 15.7878 15.7881C16.3504 15.2255 16.6665 14.4624 16.6665 13.6667V6.33341C16.6665 4.67508 15.3248 3.33341 13.6665 3.33341H6.33317ZM14.3748 4.58341C14.6511 4.58341 14.9161 4.69316 15.1114 4.88851C15.3068 5.08386 15.4165 5.34881 15.4165 5.62508C15.4165 5.90135 15.3068 6.1663 15.1114 6.36165C14.9161 6.557 14.6511 6.66675 14.3748 6.66675C14.0986 6.66675 13.8336 6.557 13.6383 6.36165C13.4429 6.1663 13.3332 5.90135 13.3332 5.62508C13.3332 5.34881 13.4429 5.08386 13.6383 4.88851C13.8336 4.69316 14.0986 4.58341 14.3748 4.58341ZM9.99984 5.83341C11.1049 5.83341 12.1647 6.2724 12.9461 7.0538C13.7275 7.8352 14.1665 8.89501 14.1665 10.0001C14.1665 11.1052 13.7275 12.165 12.9461 12.9464C12.1647 13.7278 11.1049 14.1667 9.99984 14.1667C8.89477 14.1667 7.83496 13.7278 7.05356 12.9464C6.27216 12.165 5.83317 11.1052 5.83317 10.0001C5.83317 8.89501 6.27216 7.8352 7.05356 7.0538C7.83496 6.2724 8.89477 5.83341 9.99984 5.83341ZM9.99984 7.50008C9.3368 7.50008 8.70091 7.76347 8.23207 8.23231C7.76323 8.70115 7.49984 9.33704 7.49984 10.0001C7.49984 10.6631 7.76323 11.299 8.23207 11.7678C8.70091 12.2367 9.3368 12.5001 9.99984 12.5001C10.6629 12.5001 11.2988 12.2367 11.7676 11.7678C12.2364 11.299 12.4998 10.6631 12.4998 10.0001C12.4998 9.33704 12.2364 8.70115 11.7676 8.23231C11.2988 7.76347 10.6629 7.50008 9.99984 7.50008Z" fill="#01123D" />
                            </svg>
                            CorporateThalam_25 
                        </button>
                        <button>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.49984 1.66675H13.4998C16.1665 1.66675 18.3332 3.83341 18.3332 6.50008V13.5001C18.3332 14.782 17.8239 16.0113 16.9175 16.9178C16.0111 17.8242 14.7817 18.3334 13.4998 18.3334H6.49984C3.83317 18.3334 1.6665 16.1667 1.6665 13.5001V6.50008C1.6665 5.2182 2.17573 3.98882 3.08215 3.0824C3.98858 2.17597 5.21796 1.66675 6.49984 1.66675ZM6.33317 3.33341C5.53752 3.33341 4.77446 3.64949 4.21185 4.21209C3.64924 4.7747 3.33317 5.53777 3.33317 6.33341V13.6667C3.33317 15.3251 4.67484 16.6667 6.33317 16.6667H13.6665C14.4622 16.6667 15.2252 16.3507 15.7878 15.7881C16.3504 15.2255 16.6665 14.4624 16.6665 13.6667V6.33341C16.6665 4.67508 15.3248 3.33341 13.6665 3.33341H6.33317ZM14.3748 4.58341C14.6511 4.58341 14.9161 4.69316 15.1114 4.88851C15.3068 5.08386 15.4165 5.34881 15.4165 5.62508C15.4165 5.90135 15.3068 6.1663 15.1114 6.36165C14.9161 6.557 14.6511 6.66675 14.3748 6.66675C14.0986 6.66675 13.8336 6.557 13.6383 6.36165C13.4429 6.1663 13.3332 5.90135 13.3332 5.62508C13.3332 5.34881 13.4429 5.08386 13.6383 4.88851C13.8336 4.69316 14.0986 4.58341 14.3748 4.58341ZM9.99984 5.83341C11.1049 5.83341 12.1647 6.2724 12.9461 7.0538C13.7275 7.8352 14.1665 8.89501 14.1665 10.0001C14.1665 11.1052 13.7275 12.165 12.9461 12.9464C12.1647 13.7278 11.1049 14.1667 9.99984 14.1667C8.89477 14.1667 7.83496 13.7278 7.05356 12.9464C6.27216 12.165 5.83317 11.1052 5.83317 10.0001C5.83317 8.89501 6.27216 7.8352 7.05356 7.0538C7.83496 6.2724 8.89477 5.83341 9.99984 5.83341ZM9.99984 7.50008C9.3368 7.50008 8.70091 7.76347 8.23207 8.23231C7.76323 8.70115 7.49984 9.33704 7.49984 10.0001C7.49984 10.6631 7.76323 11.299 8.23207 11.7678C8.70091 12.2367 9.3368 12.5001 9.99984 12.5001C10.6629 12.5001 11.2988 12.2367 11.7676 11.7678C12.2364 11.299 12.4998 10.6631 12.4998 10.0001C12.4998 9.33704 12.2364 8.70115 11.7676 8.23231C11.2988 7.76347 10.6629 7.50008 9.99984 7.50008Z" fill="#01123D" />
                            </svg>
                            CorporateThalam_25 
                        </button>
                    </div>
                    <div className="posts">
                        <a href="#">
                        <img src="images/4.png" alt="Post 1" />
                        </a>
                        <a href="#">
                        <img src="images/4.png" alt="Post 1" />
                        </a>
                        <a href="#">
                        <img src="images/4.png" alt="Post 1" />
                        </a>
                    </div>
                    <div className="posts">
                        <a href="#">
                        <img src="images/7.png" alt="Post 1" />
                        </a>
                        <a href="#">
                        <img src="images/7.png" alt="Post 1" />
                        </a>
                        <a href="#">
                        <img src="images/7.png" alt="Post 1" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section className="member-section">
            <div className="container">
                <h2>BECOME OUR MEMBER TO EXPLORE MORE <span className="highlight">OPPORTUNITIES</span></h2>
                <div className="member-grid">
                    <div className="member-card">
                        <img src="images/student.png" alt="Students" />
                        <p>Students</p>
                    </div>
                    <div className="member-card">
                        <img src="images/corporateemp.png" alt="Corporate Employee" />
                        <p>Corporate Employee</p>
                    </div>
                    <div className="member-card">
                        <img src="images/business.png" alt="Business Owners" />
                        <p>Business Owners</p>
                    </div>
                    <div className="member-card">
                        <img src="images/influencer.png" alt="Social Media Influencer" />
                        <p>Social media Influencer</p>
                    </div>
                    <div className="member-card">
                        <img src="images/politician.png" alt="Politician" />
                        <p>Politician</p>
                    </div>
                    <div className="member-card">
                        <img src="images/vj.png" alt="VJ & Show Hosts" />
                        <p>VJ & Show Hosts</p>
                    </div>
                    <div className="member-card">
                        <img src="images/model.png" alt="Models" />
                        <p>Models</p>
                    </div>
                    <div className="member-card">
                        <img src="images/editor.png" alt="Editors" />
                        <p>Editors</p>
                    </div>
                    <div className="member-card">
                        <img src="images/producer.png" alt="Producers" />
                        <p>Producers</p>
                    </div>
                    <div className="member-card">
                        <img src="images/camera.png" alt="Camera Person" />
                        <p>Camera Person</p>
                    </div>
                </div>
                <div className="register-btn">
                    <a href="#">Free Register Now</a>
                </div>
            </div>
        </section>

        <section className="ourWorkSec">
            <div className="container">
                <h2 className="ourworkHead">Our <span>Works</span></h2>
                <div className="ourWorkTabs">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#mediaProductionCorporates" type="button" role="tab" aria-controls="mediaProductionCorporates" aria-selected="true"> Media Production For Corporates</button>
                        </li>
                        <li onClick={() => window.location.href = '/works/media-production-for-politics'} className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#mediaProductionPolitics" type="button" role="tab" aria-controls="mediaProductionPolitics" aria-selected="false">Media Production For Politics</button>
                        </li>
                        <li onClick={() => window.location.href = '/works/digital-marketing'} className="nav-item" role="presentation">
                            <button className="nav-link" id="LeadGeneration-tab" data-bs-toggle="tab" data-bs-target="#LeadGeneration" type="button" role="tab" aria-controls="LeadGeneration" aria-selected="false">Digital Marketing & Lead Generation</button>
                        </li>
                        
                        <li onClick={() => window.location.href = '/works/scripting'}  className="nav-item" role="presentation">
                            <button className="nav-link" id="Scripting-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="Scripting" aria-selected="false">Conceptualization & Scripting</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="mediaProductionCorporates" role="tabpanel" aria-labelledby="mediaProductionCorporates-tab">
                            <div className="serviceListBx">
                                <ul>
                                    <li>
                                        <a href="#">
                                        <span>
                                        <img src="images/servicepor01.jpg" alt="img" />
                                        </span>
                                        <span className="serviceListTitle">Service Posters</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <span>
                                        <img src="images/servicepor02.jpg" alt="img" />
                                        </span>
                                        <span className="serviceListTitle">Reels & Shorts</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <span>
                                        <img src="images/servicepor03.jpg" alt="img" />
                                        </span> 
                                        <span className="serviceListTitle">Podcasts & Personal Branding</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <span>
                                        <img src="images/servicepor04.jpg" alt="img" />
                                        </span>
                                        <span className="serviceListTitle">Corporate Videos</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="viewAll">
                                    <Link href="/works/media-production-for-corporates">View all</Link>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="mediaProductionPolitics" role="tabpanel" aria-labelledby="mediaProductionPolitics-tab">...</div>
                        <div className="tab-pane fade" id="LeadGeneration" role="tabpanel" aria-labelledby="LeadGeneration-tab"> ...</div>
                        <div className="tab-pane fade" id="Scripting" role="tabpanel" aria-labelledby="Scripting-tab">...</div>
                    </div>
                </div>
            </div>
        </section>

        <section className="service-model">
            <div className="container">
                <div className="service-layout">
                    <div className="servicelayoutBx">
                        <div className="service-header">
                            <h2>
                            <strong>CT25 SERVICES <span className="highlight">DELIVERY</span> MODEL </strong>
                            </h2>
                            <p> CT25 believes a structured, organized approach ensures client clarity, timely delivery, and uncompromised quality within budget. </p>
                        </div>
                        <div className="flow-section">
                            <div className="clientRes">
                                <div className="flow-box">Client Representative</div>
                                <div className="flow-box">Project Manager</div>
                                <div className="flow-box">Production Head</div>
                            </div>
                            <div className="flow-connector">
                                <div className="curveRt">
                                    <img src="images/curvemain-rigth.png" alt="" />
                                </div>
                                <div className="flow-connector-bx">
                                    <div className="flow-sub-box">Content Writer</div>
                                    <div className="flow-sub-box">Content Writer</div>
                                </div>
                                <div className="curveLt">
                                    <img src="images/curvemain-rigth.png" alt="" />
                                </div>
                            </div>
                            <div className="deliverables">Deliverables</div>
                        </div>
                    </div>
                    <div className="info-stages">
                        <div className="info-column">
                            <h4>INFORMATION REQUIREMENTS</h4>
                                <div className="info-box">
                                    <span>Client Assessment</span>
                                </div>
                                <div className="info-box ">
                                    {/* <span >Branding <br>Assets</span> */}
                                </div>
                                <div className="info-box">
                                    <span>Story Board</span>
                                </div>
                        </div>
                        <div className="info-column">
                            <h4>STAGE 1</h4>
                            <div className="info-box tall">
                            <span className=" paddin-1">Scripting & Client Approvals</span>
                            </div>
                        </div>
                        <div className="info-column">
                            <h4>STAGE 2</h4>
                            <div className="info-subMain">
                            <div className="info-submission">
                                <span>VIDEO SUBMISSION 1</span>
                                <div className="submission-box">Rough Cut with <br/>Color Grading</div>
                            </div>
                            </div>
                            <div className="info-subMain">
                            <div className="info-submission">
                                <span>VIDEO SUBMISSION 2</span>
                                <div className="submission-box">Adding Text, <br/>Assets, Transitions</div>
                            </div>
                            </div>
                            <div className="info-subMain">
                            <div className="info-submission">
                                <span>VIDEO SUBMISSION 3</span>
                                <div className="submission-box">Adding <br/>Sounds <br/>(Music + SFX)</div>
                            </div>
                            </div>
                        </div>
                    </div>
              </div>
            </div>
        </section>

        <div className="caseStudiesBx" id="scroll-studies">
            <div className="caseStudiesLeft">
                <div className="caseStudiesCnt">
                    <h2>Our Case Studies | Experiences | Working Principles</h2>
                    <ul>
                        <li> CT25’s Role in Corporate Storytelling </li>
                        <li> How CT25 Helped a Startup Launch with High-Impact Brand Videos in Just 7 Days </li>
                        <li> The CT25 Media Production Model for Consistent Client Satisfaction </li>
                        <li> How does CT25 ensure client data and media assets remain secure throughout the production process? </li>
                        <li> CT25 follow ISO standard in our work production workflow </li>
                    </ul>
                </div>
            </div>
            <div className="cseStudiesRt">
                <div className="followIso">
                    <img src="images/isologo.png" alt="img" />
                    <h2>We follow ISO standards in our production workflow</h2>
                </div>
            </div>
        </div>

        <section className="team-behind-section">
            <div className="container">
              <h2 className="section-title"> OUR TEAM’S - <span>BEHIND</span> THE SCREEN </h2>
              <div className="grid-wrapper">
                  <div className="grid-row top-row">
                    <div className="grid-item w-20">
                        <img src="images/teamimg01.png" alt="1" />
                    </div>
                    <div className="grid-item w-20">
                        <img src="images/teamimg02.png" alt="2" />
                    </div>
                    <div className="grid-item w-35">
                        <img src="images/teamimg03.png" alt="3" />
                    </div>
                    <div className="grid-item w-24 text-box">
                        <img src="images/teamimg04.png" alt="3" />
                        <div className="text-overlay hardwork">
                          <h3>Hard work & Dedication</h3>
                          <p> CT25 Believes, Only a structured and organized approach will meets, client understanding, tight deadlines without compromising on quality or costs </p>
                        </div>
                    </div>
                  </div>
                  <div className="grid-row bottom-row">
                    <div className="grid-col-1">
                        <div className="grid-item">
                          <img src="images/teamimg05.png" alt="4" />
                        </div>
                    </div>
                    <div className="grid-col-2">
                        <div className="grid-item">
                          <img src="images/teamimg06.png" alt="5" />
                        </div>
                        <div className="grid-item">
                          <img src="images/teamimg07.png" alt="6" />
                        </div>
                        <div className="cta-row">
                          <p>Looking for Career with CT25 ?</p>
                          <button>Apply Now</button>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </section>

        <div className="pricingMethBx" id="scroll-pricing">
            <h2 className="heading">Our <span>Pricing</span> Methodologies </h2>
            <section className="pricing-methodolgies">
              <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                        <div className="main-pro-box">
                          <div className="col-lg-2">
                              <div className="pro-ject-box-1">
                                <div className="project-box-h pr-w">
                                    <ul>
                                      <li className="lil">Projects</li>
                                    </ul>
                                </div>
                              </div>
                          </div>
                          <div className="col-lg-2">
                              <div className="project-box-h2 project-list line-1">
                                <ul>
                                    <li className="lid lip">Scopes</li>
                                    <li className="lid">Posters</li>
                                    <li className="lid">Videos</li>
                                    <li className="size1">Meta Campaign & Lead Collections</li>
                                </ul>
                              </div>
                          </div>
                          <div className="col-lg-1">
                              <div className=" project-box-h projec-req1 lip12 ">
                                <ul>
                                    <li>RESOURCES REQUIREMENTS </li>
                                </ul>
                              </div>
                          </div>
                          <div className="col-lg-2">
                              <div className=" project-box-h project-list2">
                                <ul>
                                    <li className="lil">Content Writers</li>
                                    <li className="lil">Direction & VJ</li>
                                    <li className="lil">Editors</li>
                                    <li className="lil">Digital Marketing Executive</li>
                                </ul>
                              </div>
                          </div>
                          <div className="col-lg-2">
                              <div className=" project-box-h project-list line-3">
                                <ul>
                                    <li className="lil">Estimated Hours</li>
                                    <li className="lil">Estimated Hours</li>
                                    <li className="lil">Estimated Hours</li>
                                    <li className="lil">Estimated Hours</li>
                                </ul>
                              </div>
                          </div>
                          <div className="col-lg-2">
                              <div className=" project-box-h project-list line-4">
                                <ul>
                                    <li>*225($3)/hr</li>
                                    <li>*345($4.5)/hr</li>
                                    <li>*255($3)/hr</li>
                                    <li>*175($2.5)/hr</li>
                                </ul>
                              </div>
                          </div>
                          <div className="col-lg-2">
                              <div className=" project-box-h projec-req2">
                                <ul>
                                    <li>TOTAL ESTIMATED BUDGET </li>
                                </ul>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </section>
        </div>

        <section className="pricing-section">
            <div className="container">
                <div className="pricing-card">
                    <h3>Monthly Package</h3>
                    <p>Great for ongoing brand engagement and follower growth</p>
                    <div className="pricing-box">
                        <strong>15 Posters & 5 Shorts/Reels</strong>
                        <div className="price">
                            <span>INR 20,000. </span>
                            <span>USD 235.</span>
                            <span>AED 870. </span>
                        </div>
                    </div>
                </div>
                <div className="pricing-card">
                    <h3>Price Per Reels or Shorts</h3>
                    <p>Best for one-off campaigns, offers, or quick promos.</p>
                    <div className="pricing-box">
                        <strong>1Min Reel with engaging contents</strong>
                        <div className="price">
                            <span>INR 20,000. </span>
                            <span>USD 235.</span>
                            <span>AED 870. </span>
                        </div>
                    </div>
                </div>
                <div className="pricing-card">
                    <h3>Long Videos</h3>
                    <p>Ideal for YouTube content or deep-dive brand storytelling</p>
                    <div className="pricing-box">
                        <strong>10 Min Long Video with engaging contents</strong>
                        <div className="price">
                            <span>INR 20,000. </span>
                            <span>USD 235.</span>
                            <span>AED 870. </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="transparent-section">
            <div className="container">
                <h2>OUR TRANSPARENT <span>PRICING</span> METHODOLOGY: </h2>
                <p> At CT25, we follow a transparent and structured pricing model to ensure clarity and fairness in every project we take on. Our approach begins by breaking down your project scope — whether it includes posters, videos, or campaign activities — into specific resource requirements. Based on this, we estimate the man-hours needed for each expert role such as content writers, editors, VJs, and digital marketers. </p>
                <p> Once the estimation is finalized and approved, the hourly rates listed in our pricing matrix are applied. This ensures that clients pay only for the exact effort required, with no hidden costs. Our process not only gives clients complete visibility but also makes us one of the most affordable and reliable media partners in the industry. </p>
                <div className="pricing-buttons">
                    <a href="#" className="btn-primary">View Packages</a>
                    <a href="#" className="btn-outline">Contact Us for Quotation</a>
                </div>
            </div>
        </section>

        <section className="courteamBx" id="scroll-team">
            <div className="container">
                <h2 className="section-title">OUR <span>CORE</span> TEAM </h2>
                <p className="subtitle">Innovation at our core, CT25 Expert Team rethink, reshape, and redefine creative boundaries. </p>
                <div className="team-title">Creative & Technical Team</div>
                <div className="team-slider creative-slider">
                    <TeamSlider images={creativeImages}/>
                </div>
                <div className="team-title ourHosts">Our Show Hosts</div>
                <div className="team-slider show-host-slider">
                    <TeamSlider images={showHostImages}/>
                </div>
            </div>
        </section>

        <section className="faqBx">
            <div className="container">
                <h2 className="faq-heading">FREQUENTLY ASKED <span>QUESTIONS</span>
                </h2>
                <div className="accordion" id="faqAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> what are the costs </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                            <div className="accordion-body"> we apply our hourly rates from the pricing matrix, ensuring you only pay for the exact effort required, with no hidden fees. </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> what does our process involve </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                            <div className="accordion-body"> we apply our hourly rates from the pricing matrix, ensuring you only pay for the exact effort required, with no hidden fees. </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> how do we ensure quality control </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                            <div className="accordion-body"> we apply our hourly rates from the pricing matrix, ensuring you only pay for the exact effort required, with no hidden fees. </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> what tools do we use for project management </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                            <div className="accordion-body"> we apply our hourly rates from the pricing matrix, ensuring you only pay for the exact effort required, with no hidden fees. </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive"> how can we improve team collaboration </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                            <div className="accordion-body"> we apply our hourly rates from the pricing matrix, ensuring you only pay for the exact effort required, with no hidden fees. </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="clientsBx">
            <div className="container">
                <h2 className="client-title">
                <span>CLIENT</span> WE HAVE WORKED FOR
                </h2>
                <div className="row g-0 text-center">
                <div className="col-6 col-md-2 client-logo">
                    <img src="images/client01.png" alt="img" />
                </div>
                <div className="col-6 col-md-2 client-logo">
                    <img src="images/client02.png" alt="img" />
                </div>
                <div className="col-6 col-md-2 client-logo">
                    <img src="images/client03.png" alt="img" />
                </div>
                <div className="col-6 col-md-2 client-logo">
                    <img src="images/client04.png" alt="img" />
                </div>
                <div className="col-6 col-md-2 client-logo">
                    <img src="images/client01.png" alt="img" />
                </div>
                <div className="col-6 col-md-2 client-logo">
                    <img src="images/client02.png" alt="img" />
                </div>
                <div className="col-6 col-md-2 client-logo">
                    <img src="images/client03.png" alt="img" />
                </div>
                <div className="col-6 col-md-2 client-logo">
                    <img src="images/client04.png" alt="img" />
                </div>
                <div className="col-6 col-md-2 client-logo">
                    <img src="images/client01.png" alt="img" />
                </div>
                <div className="col-6 col-md-2 client-logo">
                    <img src="images/client02.png" alt="img" />
                </div>
                <div className="col-6 col-md-2 client-logo">
                    <img src="images/client03.png" alt="img" />
                </div>
                <div className="col-6 col-md-2 client-logo">
                    <img src="images/client04.png" alt="img" />
                </div>
                </div>
            </div>
        </section>

        <section className="ourCustomerSays">
            <h2 className="section-title">WHAT OUR CUSTOMERS SAYS ON <span>GOOGLE REVIEWS</span>
            </h2>
            <div className="review-slider">
                <Reviews/>
            </div>
        </section>
    </>
    )
}