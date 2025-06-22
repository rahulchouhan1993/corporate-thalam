<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ServicesController extends Controller
{
    public function index($slug){
        if($slug=='commercial-advertisment-videos'){
            $pageTitle = 'Advertisment Video';
            return inertia("Services/AdvertismentVideo",compact('pageTitle'));
        }else if($slug=='videographer-and-crew'){
            $pageTitle = 'Videograper & Crew';
            return inertia("Services/Videographer",compact('pageTitle'));
        }else if($slug=='digital-marketing'){
            $pageTitle = 'Digital Marketing';
            return inertia("Services/DigitalMarketing",compact('pageTitle'));
        }else if($slug=='socail-media-influencers'){
            $pageTitle = 'Social Media Influencers';
            return inertia("Services/Influencers",compact('pageTitle'));
        }else if($slug=='socail-media-influencers-details'){
            $pageTitle = 'Social Media Influencers';
            return inertia("Services/InfluencerDetails",compact('pageTitle'));
        }else if($slug=='editing-and-color-grading'){
            $pageTitle = 'Editing & Color Grading';
            return inertia("Services/Editing",compact('pageTitle'));
        }else if($slug=='event-managment'){
            $pageTitle = 'Event Managment';
            return inertia("Services/EventManagment",compact('pageTitle'));
        }else if($slug=='personal-branding'){
            $pageTitle = 'Personal Branding';
            return inertia("Services/Branding",compact('pageTitle'));
        }else if($slug=='traning-certification'){
            $pageTitle = 'Training Certification';
            return inertia("Services/Training",compact('pageTitle'));
        }
    }
}
