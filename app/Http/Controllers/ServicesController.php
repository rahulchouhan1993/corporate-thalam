<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ServicesController extends Controller
{
    public function index($slug){
        if($slug=='commercial-advertisment-videos'){
            return inertia("Services/AdvertismentVideo");
        }else if($slug=='videographer-and-crew'){
            return inertia("Services/Videographer");
        }else if($slug=='digital-marketing'){
            return inertia("Services/DigitalMarketing");
        }else if($slug=='socail-media-influencers'){
            return inertia("Services/Influencers");
        }else if($slug=='socail-media-influencers-details'){
            return inertia("Services/InfluencerDetails");
        }else if($slug=='editing-and-color-grading'){
            return inertia("Services/Editing");
        }else if($slug=='event-managment'){
            return inertia("Services/EventManagment");
        }else if($slug=='personal-branding'){
            return inertia("Services/Branding");
        }else if($slug=='traning-certification'){
            return inertia("Services/Training");
        }
    }
}
