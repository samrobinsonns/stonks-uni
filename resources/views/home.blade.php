@extends('layouts.app')

@section('content')
@guest
 <p>Please log in to access the app.</p>
@else
   <div id="app"></div>
@endguest
@endsection
