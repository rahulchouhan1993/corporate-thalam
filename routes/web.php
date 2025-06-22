<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomesController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\WorksController;
use App\Http\Controllers\DeliveryModelsController;
Route::get('/', [HomesController::class, 'index'])->name('home');
Route::get('/service/{slug}', [ServicesController::class, 'index'])->name('services');
Route::get('/about-us', [HomesController::class, 'aboutUs'])->name('about');
Route::get('/works/{slug}', [WorksController::class, 'index'])->name('services');
Route::get('/delivery-model/{slug}', [DeliveryModelsController::class, 'index'])->name('delivery-model');
Route::get('/pricing', [HomesController::class, 'pricing'])->name('pricing');
