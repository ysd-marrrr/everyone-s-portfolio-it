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


Route::get('portfolios', 'PortfolioController@index');
Route::get('portfolios/{id}', 'PortfolioController@show');
Route::post('portfolios', 'PortfolioController@store')->middleware('client');
Route::put('portfolios/{id}', 'PortfolioController@update')->middleware('client');
Route::delete('portfolios/{id}', 'PortfolioController@destroy')->middleware('client');