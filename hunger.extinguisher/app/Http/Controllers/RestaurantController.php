<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Guzzle\Service\Client;

class RestaurantController extends Controller
{
   private $uri = "https://developers.zomato.com/";

   public function viewList(Request $request)
   {
   		$data = [];
   		$info = $request->all();

   		$data['cuisines'] = json_decode($info['in_cuisines']);
   		$data['coordinates'] = json_decode($info['in_city_coor']);

		$client = new Client($this->uri); 
	    $dat = [
				'lat'      => $data['coordinates']->latitude,
				'lon' 	   => $data['coordinates']->longitude,
				'cuisines' => $info['cuisine'],
	        ];
   		$results = $client->get('/api/v2.1/search?'.http_build_query($dat), ['user-key' => env('ZOMATO_KEY')]); 
		 
		$response = $results->send();

		$request->session()->put('results', $response->json()['restaurants']);

  	    return view('list', ['data' => $response->json()['restaurants']]);
   }

   public function show($id) 
   {
   		$rests = session('results');
   		$theOne = $rests[$id];

   		return view('details', ['restaurant' => $theOne['restaurant']]);
   	}
}


