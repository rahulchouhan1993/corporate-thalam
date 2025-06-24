import { Link } from '@inertiajs/react';
import InfluencerSlider from "../../Component/InfluencerSlider";
export default function Influencers(){
    return (
    <>
    
    <section class="herobanner-services services-3">
    <div class="container">
    <div class="row">
        <div class="col-lg-12">
        <div class="herobanner-head ser-1-1">
            <h1>HIRE - SOCIAL MEDIA <span>INFLUENCERS</span> FOR YOUR BRANDS</h1>
        </div>
        </div>
    </div>
    </div>
    </section>
    <section class="brand-section boostbrandsec">
    <div class="container">
    <div class="row">
        <div class="col-lg-12">
        <div class="brand-head">
            <h1><span>Boost</span> your brand visibility and credibility by partnering with the <span>right
                influencers</span> across Instagram, YouTube, Twitter & more!</h1>
            <p>Collaborate with the <span>right faces</span> gives your brand direct access to a loyal and targeted
            audience.</p>
        </div>
        </div>
        <ul class="brandBoostrow">
            <li><a href="#">Brief Collection</a></li>
            <li><a href="#">Influencer Shortlisting</a></li>
            <li><a href="#">Content Collaboration</a></li>
            <li><a href="#">Campaign Launch & Monitoring</a></li>
        </ul>
    </div>
    </div>


    </section>
    <section class="image-box-marque">
    <div class="col-lg-12">
    <div class="herobanner-head">
    <h1>We match your brand with influencers based on <span>Niches</span></h1>
    </div>
    </div>
    <div class="marquee-container">
    <InfluencerSlider />
    </div>
    <div class="stragetic-box-bottom marque-p">
    <p>
    Fashion, Tech, Education, Fitness, Lifestyle, Real Estate, Startups & more
    </p>
    </div>
    </section>

    <section class="brand-section2 boostbrandto">
    <div class="container">
    <div class="row">
    <div class="col-lg-12">
    <div class="brand-head">
        <h1>Ready to <span>Boost</span> Your Brand?</h1>
    </div>
    </div>
    <div class="col-lg-12">
    <div class="main-btn-ser">
        <div class="bottom-btn1  ">
        <a href="#">Content planning & creative scripting</a>
        </div>
        <div class="bottom-btn1 line-12">
        <a href="#">Reels and video post-production</a>
        </div>
        <div class="bottom-btn1 line-12">
        <a href="#">Boosting campaigns for extra reach</a>
        </div>
        <div class="bottom-btn1 line-12">
        <a href="#">Multilingual influencer partnerships</a>
        </div>
        <div class="bottom-btn1 line-12">
        <a href="#">Cross-platform publishing</a>
        </div>
    </div>
    </div>
    <div class="col-lg-12">
    <div class="bottom-btn1 brand-4 blue-btn">
        <a href="#" class="btn-primary">Contact Us</a>
    </div>
    </div>
    </div>
    </div>
    </section>
    <section class="herobanner-services influencer">
    <div class="container">
    <div class="row">
        <div class="col-lg-12">
        <div class="herobanner-head">
            <h1>ARE YOU A SOCIAL MEDIA <span>INFLUENCER?</span></h1>
        </div>
        </div>
        <div class="col-lg-12">
    <div class="bottom-btn1 brand-4 blue-btn">
        <Link href="/are-you-a-influencer" class=" btn-sm-typ">Read This</Link>
    </div>
        </div>
    </div>
    </div>
    </section>
    </>
    )

}