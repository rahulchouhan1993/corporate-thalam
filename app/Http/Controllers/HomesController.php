<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class HomesController extends Controller
{
    public function index(){
        return Inertia::render('Home');
    }

    public function aboutUs(){
        return Inertia::render('About');
    }

    public function pricing(){
        return Inertia::render('Pricing');
    }
}
