import Reviews from "../Component/Reviews";
import TeamSlider from "../Component/TeamSlider";
import { route } from 'ziggy-js';
import { Link } from '@inertiajs/react';
export default function Home(){
//console.log(window.Ziggy.routes.home);
    const creativeImages = [
        {
        img: "/images/Shiva.jpeg",
        title: "Shiva",
        post: "Excutive Editor"
        },
        {
        img: "/images/Sabari.jpeg",
        title: "Sabari Grisan",
        post: "Excutive Editor"
        },
        {
        img: "/images/Abirami.jpeg",
        title: "Sree Abirami SA",
        post: "Content Writer"
        },
        {
        img: "/images/Abinaya.jpeg",
        title: "Abinaya Varshini",
        post: " Content Writer"
        },
        {
        img: "/images/Pavithra.jpeg",
        title: "Pavithra",
        post: "Mass Communication and Marketing Specialist"
        },
        {
        img: "/images/Jerry.jpeg",
        title: "Jerry Leonardo Mathew",
        post: "Director"
        },
        {
        img: "/images/Vadivel.jpeg",
        title: "Vadivel",
        post: "Creative Head"
        }
    ];

    const showHostImages = [
        {
        img: "/images/Nimitha.jpeg",
        title: "Nimitha",
        post: "Presenter"
        },
        {
        img: "/images/Monisha.jpeg",
        title: "Monisha",
        post: "Presenter"
        },
        {
        img: "/images/Kavitha.jpeg",
        title: "Kavitha",
        post: "Presenter"
        },
        {
        img: "/images/Swathi.jpeg",
        title: "Swathi",
        post: " Presenter"
        }
    ];
    return (
    <>
        <div className="homevideobanner">
            <span className="toplayer"></span>
            <span className="bottomlayer"></span>
            <span className="topleftlayer"></span>
            <span className="bottomrightlayer"></span>
            <section className="videoSec" style={{ backgroundImage:"url(images/hq-gif.gif)"}}>
                {/* <div className="video-bg">
                <img src="images/hq-gif.gif" alt="Background GIF" />
                </div> */}
                <button type="button" className="btn recordingbtn">recording</button>
                <div className="videoCnt">
                <h1>Best <span>Branding & Video Production</span> Company in South India</h1>
                </div>
            </section>
        </div>

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

        <section className="about-section homeaboutsect" id="scroll-about">
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

        <section className="industries-section homemoreindustry" id="scroll-work">
            <div className="container">
                <h2>
                    <span className="highlight">INDUSTRIES</span> WE WORK
                </h2>
                <div className="industries-grid">
                    <div className="industry-box">
                        <img src="images/Education.svg" alt="Education" />
                        <p>Education</p>
                    </div>
                    <div className="industry-box">
                        <img src="images/RealEstate.svg" alt="Real Estate" />
                        <p>Real Estate</p>
                    </div>
                    <div className="industry-box">
                        <img src="images/Retails.svg" alt="Retails" />
                        <p>Retails</p>
                    </div>
                    <div className="industry-box">
                        <img src="images/Events.svg" alt="Events" />
                        <p>Events</p>
                    </div>
                    <div className="industry-box">
                        <img src="images/Financial.svg" alt="Financial Institutions" />
                        <p>Financial Institutions</p>
                    </div>
                    <div className="industry-box">
                        <img src="images/Banks.svg" alt="Banks" />
                        <p>Banks</p>
                    </div>
                    <div className="industry-box">
                        <img src="images/Political.svg" alt="Political Parties" />
                        <p>Political Parties</p>
                    </div>
                    <div className="industry-box">
                        <img src="images/Individuals.svg" alt="Individuals" />
                        <p>Individuals</p>
                    </div>
                    <div className="industry-box">
                        <img src="images/Beauty.svg" alt="Beauty & Cosmetics" />
                        <p>Beauty & Cosmetics</p>
                    </div>
                    <div className="industry-box">
                        <img src="images/Hardware.svg" alt="Hardware & Software" />
                        <p>Hardware & Software</p>
                    </div>
                    <div className="industry-box">
                        <img src="images/Restaurants.svg" alt="Restaurants & Night Clubs" />
                        <p>Restaurants & Night Clubs</p>
                    </div>
                    <div className="industry-box">
                        <img src="images/Travel.svg" alt="Travel & Tourism" />
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
                        <a href="https://www.youtube.com/@corporatethalam25" target="_blank" className="youtube-button">
                            <img src="images/socialyoutubeimg1.svg" alt="Corporate Thalam" />
                        </a>
                    </div>
                    <div className="tags">
                        <a href="https://x.com/corporatethalam?t=fX28Q8XvWDv08NDZwLHlJg&s=08" target="_blank">
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.74016 10.2092L11.7085 15.5H17.5418L10.9935 6.76833L16.4418 0.5H14.2335L9.96933 5.405L6.29183 0.5H0.458496L6.71683 8.84583L0.933496 15.5H3.14183L7.74016 10.2092ZM12.5418 13.8333L3.79183 2.16667H5.4585L14.2085 13.8333H12.5418Z" fill="#01123D"/></svg>
                            @corporatethalam 
                        </a>
                        <a href="https://www.linkedin.com/in/corporate-thalam-8397b9363/recent-activity/all/" target="_blank">
                            <svg fill="#01123D" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#01123D" stroke-width="9.6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z" fill-rule="evenodd"></path> </g></svg>
                            @corporate_thalam_25 
                        </a>
                        <a href="https://www.instagram.com/corporate_thalam_25/" target="_blank">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.49984 0.666748H12.4998C15.1665 0.666748 17.3332 2.83341 17.3332 5.50008V12.5001C17.3332 13.782 16.8239 15.0113 15.9175 15.9178C15.0111 16.8242 13.7817 17.3334 12.4998 17.3334H5.49984C2.83317 17.3334 0.666504 15.1667 0.666504 12.5001V5.50008C0.666504 4.2182 1.17573 2.98882 2.08215 2.0824C2.98858 1.17597 4.21796 0.666748 5.49984 0.666748ZM5.33317 2.33341C4.53752 2.33341 3.77446 2.64949 3.21185 3.21209C2.64924 3.7747 2.33317 4.53777 2.33317 5.33341V12.6667C2.33317 14.3251 3.67484 15.6667 5.33317 15.6667H12.6665C13.4622 15.6667 14.2252 15.3507 14.7878 14.7881C15.3504 14.2255 15.6665 13.4624 15.6665 12.6667V5.33341C15.6665 3.67508 14.3248 2.33341 12.6665 2.33341H5.33317ZM13.3748 3.58341C13.6511 3.58341 13.9161 3.69316 14.1114 3.88851C14.3068 4.08386 14.4165 4.34881 14.4165 4.62508C14.4165 4.90135 14.3068 5.1663 14.1114 5.36165C13.9161 5.557 13.6511 5.66675 13.3748 5.66675C13.0986 5.66675 12.8336 5.557 12.6383 5.36165C12.4429 5.1663 12.3332 4.90135 12.3332 4.62508C12.3332 4.34881 12.4429 4.08386 12.6383 3.88851C12.8336 3.69316 13.0986 3.58341 13.3748 3.58341ZM8.99984 4.83341C10.1049 4.83341 11.1647 5.2724 11.9461 6.0538C12.7275 6.8352 13.1665 7.89501 13.1665 9.00008C13.1665 10.1052 12.7275 11.165 11.9461 11.9464C11.1647 12.7278 10.1049 13.1667 8.99984 13.1667C7.89477 13.1667 6.83496 12.7278 6.05356 11.9464C5.27216 11.165 4.83317 10.1052 4.83317 9.00008C4.83317 7.89501 5.27216 6.8352 6.05356 6.0538C6.83496 5.2724 7.89477 4.83341 8.99984 4.83341ZM8.99984 6.50008C8.3368 6.50008 7.70091 6.76347 7.23207 7.23231C6.76323 7.70115 6.49984 8.33704 6.49984 9.00008C6.49984 9.66312 6.76323 10.299 7.23207 10.7678C7.70091 11.2367 8.3368 11.5001 8.99984 11.5001C9.66288 11.5001 10.2988 11.2367 10.7676 10.7678C11.2364 10.299 11.4998 9.66312 11.4998 9.00008C11.4998 8.33704 11.2364 7.70115 10.7676 7.23231C10.2988 6.76347 9.66288 6.50008 8.99984 6.50008Z" fill="#01123D"/></svg>
                            @corporate_thalam_25 
                        </a>
                        <a href="https://www.facebook.com/share/1PDz3KYDYK/" target="_blank">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.99984 0.666748C4.39984 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.0334 3.53317 16.3917 7.33317 17.1667V11.5001H5.6665V9.00008H7.33317V6.91675C7.33317 5.30841 8.6415 4.00008 10.2498 4.00008H12.3332V6.50008H10.6665C10.2082 6.50008 9.83317 6.87508 9.83317 7.33341V9.00008H12.3332V11.5001H9.83317V17.2917C14.0415 16.8751 17.3332 13.3251 17.3332 9.00008Z" fill="#01123D"/></svg>
                            @corporate_thalam_25 
                        </a>
                    </div>
                    <div className="posts">
                        <a href="#">
                        <iframe width="200" height="200" src="https://www.youtube.com/embed/m8pwcYgDL1w?si=NEzCgR14jADKofBD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </a>
                        <a href="#">
                        <iframe width="200" height="200" src="https://www.youtube.com/embed/gY0L_hccLsI?si=pZp2TfAGEW9uZmHZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </a>
                        <a href="#">
                        <iframe width="200" height="200" src="https://www.youtube.com/embed/3UwMwkBY0Qs?si=pYRJWpQDHaQtgt0a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </a>
                    </div>
                    <div className="posts">
                        <a href="#">
                        <iframe width="200" height="200" src="https://www.youtube.com/embed/yjgzjvecJhM?si=8y9YEaGqkPWrzfJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </a>
                        <a href="#">
                       <iframe width="200" height="200" src="https://www.youtube.com/embed/hMmrjLveyQs?si=IPKwKrrxd4fT4TsY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </a>
                        <a href="#">
                        <iframe width="200" height="200" src="https://www.youtube.com/embed/4qMO9VeSknQ?si=WYZ40BKYuwbBkAW6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </a>
                    </div>
                </div>
                <div className="social-column">
                    <div className="banner">
                        <a href="https://www.youtube.com/@Politicalthalam_25" target="_blank" className="youtube-button">
                            <img src="images/socialyoutubeimgn.png" alt="YouTube" />
                        </a>
                    </div>
                    <div className="tags">
                        <a href="https://x.com/Politicalthalam?t=RhtCeBJlKaYFez1cQ0a-iw&s=08" target="_blank">
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.74016 10.2092L11.7085 15.5H17.5418L10.9935 6.76833L16.4418 0.5H14.2335L9.96933 5.405L6.29183 0.5H0.458496L6.71683 8.84583L0.933496 15.5H3.14183L7.74016 10.2092ZM12.5418 13.8333L3.79183 2.16667H5.4585L14.2085 13.8333H12.5418Z" fill="#01123D"/></svg>
                            @Politicalthalam
                        </a>
                        <a href="https://www.linkedin.com/company/political-thalam-25/posts/?feedView=all" target="_blank">
                            <svg fill="#01123D" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#01123D" stroke-width="9.6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z" fill-rule="evenodd"></path> </g></svg>
                            @political_thalam_25
                        </a>
                        <a href="https://instagram.com/political_thalam_25?igsh=cjg4eXp3NDdxM3M2 " target="_blank">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.49984 0.666748H12.4998C15.1665 0.666748 17.3332 2.83341 17.3332 5.50008V12.5001C17.3332 13.782 16.8239 15.0113 15.9175 15.9178C15.0111 16.8242 13.7817 17.3334 12.4998 17.3334H5.49984C2.83317 17.3334 0.666504 15.1667 0.666504 12.5001V5.50008C0.666504 4.2182 1.17573 2.98882 2.08215 2.0824C2.98858 1.17597 4.21796 0.666748 5.49984 0.666748ZM5.33317 2.33341C4.53752 2.33341 3.77446 2.64949 3.21185 3.21209C2.64924 3.7747 2.33317 4.53777 2.33317 5.33341V12.6667C2.33317 14.3251 3.67484 15.6667 5.33317 15.6667H12.6665C13.4622 15.6667 14.2252 15.3507 14.7878 14.7881C15.3504 14.2255 15.6665 13.4624 15.6665 12.6667V5.33341C15.6665 3.67508 14.3248 2.33341 12.6665 2.33341H5.33317ZM13.3748 3.58341C13.6511 3.58341 13.9161 3.69316 14.1114 3.88851C14.3068 4.08386 14.4165 4.34881 14.4165 4.62508C14.4165 4.90135 14.3068 5.1663 14.1114 5.36165C13.9161 5.557 13.6511 5.66675 13.3748 5.66675C13.0986 5.66675 12.8336 5.557 12.6383 5.36165C12.4429 5.1663 12.3332 4.90135 12.3332 4.62508C12.3332 4.34881 12.4429 4.08386 12.6383 3.88851C12.8336 3.69316 13.0986 3.58341 13.3748 3.58341ZM8.99984 4.83341C10.1049 4.83341 11.1647 5.2724 11.9461 6.0538C12.7275 6.8352 13.1665 7.89501 13.1665 9.00008C13.1665 10.1052 12.7275 11.165 11.9461 11.9464C11.1647 12.7278 10.1049 13.1667 8.99984 13.1667C7.89477 13.1667 6.83496 12.7278 6.05356 11.9464C5.27216 11.165 4.83317 10.1052 4.83317 9.00008C4.83317 7.89501 5.27216 6.8352 6.05356 6.0538C6.83496 5.2724 7.89477 4.83341 8.99984 4.83341ZM8.99984 6.50008C8.3368 6.50008 7.70091 6.76347 7.23207 7.23231C6.76323 7.70115 6.49984 8.33704 6.49984 9.00008C6.49984 9.66312 6.76323 10.299 7.23207 10.7678C7.70091 11.2367 8.3368 11.5001 8.99984 11.5001C9.66288 11.5001 10.2988 11.2367 10.7676 10.7678C11.2364 10.299 11.4998 9.66312 11.4998 9.00008C11.4998 8.33704 11.2364 7.70115 10.7676 7.23231C10.2988 6.76347 9.66288 6.50008 8.99984 6.50008Z" fill="#01123D"/></svg>
                            @political_thalam_25 
                        </a>
                        <a href="https://facebook.com/people/political-thalam-25/61574838445245" target="_blank">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.99984 0.666748C4.39984 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.0334 3.53317 16.3917 7.33317 17.1667V11.5001H5.6665V9.00008H7.33317V6.91675C7.33317 5.30841 8.6415 4.00008 10.2498 4.00008H12.3332V6.50008H10.6665C10.2082 6.50008 9.83317 6.87508 9.83317 7.33341V9.00008H12.3332V11.5001H9.83317V17.2917C14.0415 16.8751 17.3332 13.3251 17.3332 9.00008Z" fill="#01123D"/></svg>
                            @political_thalam_25
                        </a>
                    </div>
                    <div className="posts">
                        <a href="#">
                        <iframe width="200" height="200" src="https://www.youtube.com/embed/gNruKXFlG8c?si=Xi6fTTjurJwLbxUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </a>
                        <a href="#">
                        <iframe width="200" height="200" src="https://www.youtube.com/embed/s5lznTEyCf8?si=IPdW9Ib7zh7tWF9i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </a>
                        <a href="#">
                        <iframe width="200" height="200" src="https://www.youtube.com/embed/7AupzFQn-tY?si=ihICpoKC6SApo9C5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </a>
                    </div>
                    <div className="posts">
                        <a href="#">
                        <iframe width="200" height="200" src="https://www.youtube.com/embed/fIhf5cJC_9g?si=eHkttSc40QrtlJ1z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </a>
                        <a href="#">
                        <iframe width="200" height="200" src="https://www.youtube.com/embed/DIOOSpR4Bo8?si=ulOyX8OVAlZQuUKM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </a>
                        <a href="#">
                        <iframe width="200" height="200" src="https://www.youtube.com/embed/4KSHKhWs4Go?si=siEN-VUBxkRsfGUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                        <img src="images/bestudent.svg" alt="Students" />
                        <p>Students</p>
                    </div>
                    <div className="member-card">
                        <img src="images/beemployee.svg" alt="Corporate Employee" />
                        <p>Corporate Employee</p>
                    </div>
                    <div className="member-card">
                        <img src="images/BusinessOwners.svg" alt="Business Owners" />
                        <p>Business Owners</p>
                    </div>
                    <div className="member-card">
                        <img src="images/Influencer.svg" alt="Social Media Influencer" />
                        <p>Social media Influencer</p>
                    </div>
                    <div className="member-card">
                        <img src="images/bePolitician.svg" alt="Politician" />
                        <p>Politician</p>
                    </div>
                    <div className="member-card">
                        <img src="images/VJShowHosts.svg" alt="VJ & Show Hosts" />
                        <p>VJ & Show Hosts</p>
                    </div>
                    <div className="member-card">
                        <img src="images/Models.svg" alt="Models" />
                        <p>Models</p>
                    </div>
                    <div className="member-card">
                        <img src="images/Editors.svg" alt="Editors" />
                        <p>Editors</p>
                    </div>
                    <div className="member-card">
                        <img src="images/Producers.svg" alt="Producers" />
                        <p>Producers</p>
                    </div>
                    <div className="member-card">
                        <img src="images/CameraPerson.svg" alt="Camera Person" />
                        <p>Camera Person</p>
                    </div>
                </div>
                <div className="register-btn">
                    <a href="https://forms.gle/CzGahMy5GF4Wijen7" target="_blank">Free Register Now</a>
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
                                <ul className="hometabservicelist">
                                    <li>
                                        <a href="#">
                                        <span>
                                        <img src="images/servicepor01.jpg" alt="img" />
                                        </span>
                                        <span className="serviceListTitle">Service Posters</span>
                                        </a>
                                    </li>
                                    <li className="mobilehide"> 
                                        <a href="#">
                                        <span>
                                        <img src="images/servicepor02.jpg" alt="img" />
                                        </span>
                                        <span className="serviceListTitle">Reels & Shorts</span>
                                        </a>
                                    </li>
                                    <li className="mobilehide">
                                        <a href="#">
                                        <span>
                                        <img src="images/servicepor03.jpg" alt="img" />
                                        </span> 
                                        <span className="serviceListTitle">Podcasts & Personal Branding</span>
                                        </a>
                                    </li>
                                    <li className="mobilehide">
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

        <section className="service-model homedeliveryboxsec">
            <div className="container" id="delivery-model-scroll">
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
                                    <img src="images/Deliverlayer2.svg" alt="" />
                                </div>
                                <div className="flow-connector-bx">
                                    <div className="flow-sub-box">Content Writer</div>
                                    <div className="flow-sub-box">Content Writer</div>
                                </div>
                                <div className="curveLt">
                                    <img src="images/Deliverlayer2.svg" alt="" />
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
                        <li><Link href='/delivery-model/corporate-storytelling'> CT25’s Role in Corporate Storytelling</Link> </li>
                        <li> <Link href='/delivery-model/startup-launch'>How CT25 Helped a Startup Launch with High-Impact Brand Videos in Just 7 Days</Link> </li>
                        <li> <Link href='/delivery-model/client-satisfaction'>The CT25 Media Production Model for Consistent Client Satisfaction</Link> </li>
                        <li> <Link href='/delivery-model/production-process'>How does CT25 ensure client data and media assets remain secure throughout the production process?</Link> </li>
                        <li> <Link href='/delivery-model/production-workflow'>CT25 follow ISO standard in our work production workflow</Link> </li>
                    </ul>
                </div>
            </div>
            <div className="cseStudiesRt">
                <div className="followIso">
                    <img src="images/isoimage.svg" alt="img" />
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
                        <img src="images/behindseenimgn.jpg" alt="1" />
                    </div>
                    <div className="grid-item w-20">
                        <img src="images/behindseenimg7.jpg" alt="2" />
                    </div>
                    <div className="grid-item w-35">
                        <img src="images/behindseenimg3.jpg" alt="3" />
                    </div>
                    <div className="grid-item w-24 text-box objectleft">
                        <img src="images/behindseenimg2.jpg" alt="3" />
                        
                    </div>
                  </div>
                  <div className="grid-row bottom-row">
                    <div className="grid-col-1">
                        <div className="grid-item h-100">
                          <img src="images/behindseenimg4.jpg" alt="4" />
                        </div>
                    </div>
                    <div className="grid-col-2">
                        <div className="grid-item">
                          <img src="images/behindseenimg5.jpg" alt="5" />
                        </div>
                        <div className="grid-item">
                          <img src="images/behindseenimg6.jpg" alt="6" />
                        </div>
                        <div className="cta-row">
                          <p>Looking for Career with CT25 ?</p>
                          <button onClick={() => window.open('https://forms.gle/CzGahMy5GF4Wijen7', '_blank')}>Apply Now</button>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </section>

        <div className="pricingMethBx homemathopricesec" id="scroll-pricing">
            <h2 className="heading">Our <span>Pricing</span> Methodologies </h2>
            <section className="pricing-methodolgies">
              <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                        <div className="main-pro-box homepricingrow">
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
                                    <li>*₹225($3)/hr</li>
                                    <li>*₹345($4.5)/hr</li>
                                    <li>*₹255($3)/hr</li>
                                    <li>*₹175($2.5)/hr</li>
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

        <section className="pricing-section homepricesec">
            <div className="container">
                <div className="pricing-card">
                    <h3>Monthly Package</h3>
                    <p>Great for ongoing brand engagement and follower growth</p>
                    <div className="pricing-box">
                        <strong>15 Posters & 5 Shorts/Reels</strong>
                        <div className="price">
                            <span>INR 2000 </span>
                            <span>USD 23.31</span>
                            <span>AED 85.59 </span>
                        </div>
                    </div>
                </div>
                <div className="pricing-card">
                    <h3>Price Per Reels or Shorts</h3>
                    <p>Best for one-off campaigns, offers, or quick promos.</p>
                    <div className="pricing-box">
                        <strong>1Min Reel with engaging contents</strong>
                        <div className="price">
                            <span>INR 6000 </span>
                            <span>USD 69.92</span>
                            <span>AED 256.79 </span>
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
                    <Link href="/pricing" className="btn-primary">View Packages</Link>
                    <a href="https://forms.gle/NPyErfsyBiVTxy9N8" target="_blank" className="btn-outline">Contact Us for Quotation</a>
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
                            <div className="accordion-body"> We use a transparent pricing model based on actual effort — no hidden fees. You only pay for the expertise and time truly needed.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> what does our process involve </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                            <div className="accordion-body"> We start by understanding your goals, then create and execute a custom strategy. You get regular updates and clear milestones.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> how do we ensure quality control </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                            <div className="accordion-body"> We follow strict review processes with multiple checkpoints. Every deliverable is carefully checked to meet our high standards.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> what tools do we use for project management </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                            <div className="accordion-body"> We use tools like Asana, Notion, and Slack to manage projects smoothly. You’ll always have full visibility and real-time updates.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive"> how can we improve team collaboration </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">We encourage open communication and structured feedback. This ensures ideas flow freely and every team member contributes fully.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="clientsBx homeworkclient">
            <div className="container">
                <h2 className="client-title">
                <span>CLIENT</span> WE HAVE WORKED FOR
                </h2>
                <div className="row g-0 text-center">
                <div className="col-6 col-md-3">
                    <div className="client-logo">
                        <img className="img-fluid" src="images/client01.jpeg" alt="img" />
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="client-logo">
                        <img className="img-fluid" src="images/client02.jpeg" alt="img" />
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="client-logo">
                        <img className="img-fluid" src="images/client03.jpeg" alt="img" />
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="client-logo">
                        <img className="img-fluid" src="images/client04.jpeg" alt="img" />
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="client-logo">
                        <img className="img-fluid" src="images/client05.jpeg" alt="img" />
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="client-logo">
                        <img className="img-fluid" src="images/client06.jpeg" alt="img" />
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="client-logo">
                        <img className="img-fluid" src="images/client07.jpeg" alt="img" />
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="client-logo">
                        <img className="img-fluid" src="images/client08.jpeg" alt="img" />
                    </div>
                </div>
                
                </div>
            </div>
        </section>

        {/* <section className="ourCustomerSays">
            <div className="container">
                <h2 className="section-title">WHAT OUR CUSTOMERS SAYS ON <span>GOOGLE REVIEWS</span>
                </h2>
                <div className="review-slidersec">
                    <Reviews/>
                </div>
            </div>
        </section> */}
    </>
    )
}