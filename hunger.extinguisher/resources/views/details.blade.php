<a href="/">Start Over</a>
<h1>{{ $restaurant['name']}}</h1>
<a href="{{ $restaurant['url'] }}" target="_blank" >More Details</a>
<p>Cuisines: {{ $restaurant['cuisines'] }} </p>

<p>{{ $restaurant['location']['address']}}</p>
<p>{{ $restaurant['location']['city']}}</p>
