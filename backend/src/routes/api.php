<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('portfolios', 'PortfolioController', ['only' => ['index', 'show']]);

Route::post('portfolios', 'PortfolioController@store')->middleware('client');
Route::put('portfolios', 'PortfolioController@update')->middleware('client');
Route::delete('portfolios', 'PortfolioController@destroy')->middleware('client');