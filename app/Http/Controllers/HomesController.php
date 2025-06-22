<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class HomesController extends Controller
{
    public function index(){
        $pageTitle = 'Home';
        return Inertia::render('Home',compact('pageTitle'));
    }

    public function aboutUs(){
        $pageTitle = 'About Us';
        return Inertia::render('About',compact('pageTitle'));
    }

    public function pricing(){
        $pageTitle = 'Pricing';
        return Inertia::render('Pricing',compact('pageTitle'));
    }
}
