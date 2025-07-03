import { Link } from '@inertiajs/react';
export default function Videographer(){
    return (
    <>
        <section className="herobanner-services services-6">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="herobanner-head">
                        <h1><span>HIRE</span> VIDEOGRAPHER <br/>  & CREW</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="creative-crew ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="herobanner-head">
                            <h1>Hire Our <span>Creative Crew</span> by the Hour</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="creative-crew-main">
                            <div className="imagebox-creative-crew-main">
                                <img src="/images/1-ser.png" />
                                <div className="image-creative-crew-main">
                                    <h1>Professional <br/> Photography</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4  col-md-4 col-12">
                        <div className="creative-crew-main">
                            <div className="imagebox-creative-crew-main">
                                <img src="/images/2-ser.png" />
                                    <div className="image-creative-crew-main">
                                    <h1>Videography</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="creative-crew-main">
                            <div className="imagebox-creative-crew-main">
                                <img src="/images/3-ser.png" />
                                <div className="image-creative-crew-main">
                                    <h1>Production<br/> Support</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="brand-shoot expert-sec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="brand-shooot-content expert-sec-box">
                            <div className="brand-head head-5">
                                <div className="herobanner-head">
                                    <h1>Need expert help for your next <span>shoot</span> or <span>event</span>?</h1>
                                    <p>CT25 offer skilled photographers, videographers, and full production crew on an hourly basis.</p>
                                    <div className="stragetic-box-bottom">
                                        <div className="bottom-btn1 ">
                                            <a target="_blank" href="https://forms.gle/NPyErfsyBiVTxy9N8">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="creative-crew">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="herobanner-head">
                            <h1>Perfect for <span>flexible budgets</span> And <br/>fast-paced projects</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="imag-main-event1 crew-bottom">
                            <div className="imagebox-event">
                                <img src="/images/1oo.png" />
                            </div>
                            <div className="image-content-eent">
                                <h1>Personal Branding Shoots</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="imag-main-event1 crew-bottom">
                            <div className="imagebox-event">
                                <img src="/images/2oo.png" />
                            </div>
                            <div className="image-content-eent">
                                <h1>Corporate Videos & Events</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="imag-main-event1 crew-bottom">
                            <div className="imagebox-event">
                                <img src="/images/3oo.png" />
                            </div>
                            <div className="image-content-eent">
                                <h1>Product & Fashion Shoots</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 crew-left">
                        <div className="imag-main-event1 crew-bottom  ">
                            <div className="imagebox-event">
                                <img src="/images/event1.jpg" />
                            </div>
                            <div className="image-content-eent">
                                <h1>Advertisment & Short Films</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="imag-main-event1 crew-bottom">
                            <div className="imagebox-event">
                                <img src="/images/event2.jpeg" />
                            </div>
                            <div className="image-content-eent">
                                <h1>Political Videos & Events</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="stragetic-box-bottom ser-6-btn">
                            <div className="bottom-btn1">
                                <Link href="/pricing">View Our Pricing </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )

}