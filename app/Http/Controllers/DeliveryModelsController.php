<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DeliveryModelsController extends Controller
{
    public function index($slug){
        if($slug=='corporate-storytelling'){
            return inertia("Delivery/CorporateStory");
        }else if($slug=='startup-launch'){
            return inertia("Delivery/Startup");
        }else if($slug=='client-satisfaction'){
            return inertia("Delivery/ClientSatisfaction");
        }else if($slug=='production-process'){
            return inertia("Delivery/ProductionProcess");
        }else if($slug=='production-workflow'){
            return inertia("Delivery/ProductionWorkflow");
        }
    }
}
