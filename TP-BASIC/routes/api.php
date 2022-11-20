<?php

use App\Http\Controllers\TasksController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/task',[TasksController::class,'index']);
Route::get('/task/{id}',[TasksController::class,'show']);
Route::post('/task/store',[TasksController::class,'store']);
Route::put('/task/update/{id}',[TasksController::class,'update']);
Route::delete('/task/delete/{id}',[TasksController::class,'destroy']);
