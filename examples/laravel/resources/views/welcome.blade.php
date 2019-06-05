<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body class="bg-white text-gray-600 font-sans font-thin h-screen m-0">
        <div class="flex items-center justify-end h-12 no-underline text-sm font-normal">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a class="pr-5" href="{{ url('/home') }}">Home</a>
                    @else
                        <a class="pr-5" href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            <a class="pr-5" href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
            @endif
        </div>
        <div class="flex items-center justify-center h-screen -mt-12">
            <div class="text-center">
                <div class="text-6xl mb-6">
                    Laravel
                </div>

                <div class="uppercase no-underline text-sm font-normal">
                    <a class="" href="https://laravel.com/docs">Docs</a>
                    <a class="px-8" href="https://laracasts.com">Laracasts</a>
                    <a class="px-8" href="https://laravel-news.com">News</a>
                    <a class="px-8" href="https://blog.laravel.com">Blog</a>
                    <a class="px-8" href="https://nova.laravel.com">Nova</a>
                    <a class="px-8" href="https://forge.laravel.com">Forge</a>
                    <a class="px-8" href="https://github.com/laravel/laravel">GitHub</a>
                </div>
            </div>
        </div>
    </body>
</html>
