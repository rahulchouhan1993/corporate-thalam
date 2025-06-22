<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WorksController extends Controller
{
    public function index($slug){
        if($slug=='media-production-for-corporates'){
            $pageTitle = 'Media Production For Corporates';
            return inertia("Works/CorporateProduction",compact('pageTitle'));
        }else if($slug=='media-production-for-politics'){
            $pageTitle = 'Media Production For Politics';
            return inertia("Works/PoliticalProduction",compact('pageTitle'));
        }else if($slug=='digital-marketing'){
            $pageTitle = 'Digital Marketing';
            return inertia("Works/DigitalMarketing",compact('pageTitle'));
        }else if($slug=='scripting'){
            $pageTitle = 'Scripting';
            return inertia("Works/Scripting",compact('pageTitle'));
        }
    }
}
