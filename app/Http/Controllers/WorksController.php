<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WorksController extends Controller
{
    public function index($slug){
        if($slug=='media-production-for-corporates'){
            return inertia("Works/CorporateProduction");
        }else if($slug=='media-production-for-politics'){
            return inertia("Works/PoliticalProduction");
        }else if($slug=='digital-marketing'){
            return inertia("Works/DigitalMarketing");
        }else if($slug=='scripting'){
            return inertia("Works/Scripting");
        }
    }
}
