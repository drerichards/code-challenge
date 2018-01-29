<ul>

@foreach ($data as $key => $rest)

	<li><a href='{{ url("/show/restaurant/$key") }}'>{{$rest['restaurant']['name']}}</a></li>

@endforeach
</ul>