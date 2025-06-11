<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomesController extends Controller
{
    public function index(){
        return inertia('Home');
    }

    public function aboutUs(){
        return inertia('About');
    }
}
