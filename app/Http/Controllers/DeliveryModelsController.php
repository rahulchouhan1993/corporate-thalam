<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DeliveryModelsController extends Controller
{
    public function index($slug){
        if($slug=='corporate-storytelling'){
            $pageTitle = 'Corporate Storytelling';
            return inertia("Delivery/CorporateStory",compact('pageTitle'));
        }else if($slug=='startup-launch'){
            $pageTitle = 'Startup Launch';
            return inertia("Delivery/Startup",compact('pageTitle'));
        }else if($slug=='client-satisfaction'){
            $pageTitle = 'Client Satisfaction';
            return inertia("Delivery/ClientSatisfaction",compact('pageTitle'));
        }else if($slug=='production-process'){ 
            $pageTitle = 'Production Process';
            return inertia("Delivery/ProductionProcess",compact('pageTitle'));
        }else if($slug=='production-workflow'){
            $pageTitle = 'Production Workflow';
            return inertia("Delivery/ProductionWorkflow",compact('pageTitle'));
        }
    }
}
