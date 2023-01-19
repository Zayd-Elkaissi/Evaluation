<?php

namespace App\Http\Controllers;

use App\Models\stagaire;
use GuzzleHttp\Psr7\Message;
use Illuminate\Http\Request;
use Symfony\Component\Console\Input\Input;

class StagaireController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function index()
    // {
    //     $stagaire=stagaire::all();

    //     return $stagaire;
    // }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function check(Request $request)
    {

         $filter = stagaire::where('nom', 'like', '%' . $request->first_name . '%')->get();
                if($filter->count()){
                    return [
                        'message' => "existe"
                    ];
                }
                else{
                    return [
                        'message' => "n'extest pas"
                    ];
                }
    }


    public function search(Request $request){

        $Stagiaire= stagaire::where('nom' ,'LIKE', $request->nom.'%')->get();

        if(( $Stagiaire) ){
        return ['message'=>$Stagiaire];
     }else{
        return ['message'=>"exist pas"];







    }
}

}
