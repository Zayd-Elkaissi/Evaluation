<?php

namespace App\Http\Controllers;

use App\Models\People;
use Illuminate\Http\Request;

class PeopleController extends Controller
{
    //

    public function people(Request $request){
        $people = People::where('firstName', 'Like',  '%'. $request->first_name.'%' );
        if ($people->count()) {
            return ['message'=> 'exest'];
        }else{
            return[ 'message' => "n'extest pas"];
        }
    }

    public function filter(Request $request){
        $filterPeople = People::where('firstName', 'Like', $request->first_name . '%')->get();
        if (($filterPeople)) {
            return ['result' => $filterPeople];
        }else{
            return['result' => "n'extest pas"];
        }
    }

    // public function selection(){

    // }
}
