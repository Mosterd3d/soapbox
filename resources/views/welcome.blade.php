<html>

<head>
    <title>Soapbox: Products</title>
{{--    <meta name="csrf-token" content="{{ csrf_token() }}">--}}
    <meta name="csrf-token" value="{{ csrf_token() }}" />
    <!-- Bootstrap -->
{{--    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/css/bootstrap.css" rel="stylesheet">--}}

{{--    <!-- Font Awesome JS -->--}}
{{--    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js"--}}
{{--            integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossorigin="anonymous">--}}
{{--    </script>--}}
{{--    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js"integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossorigin="anonymous">--}}
{{--    </script>--}}

    <link rel="stylesheet" type="text/css" href="{{ url('css/app.css') }}">


</head>

<body>
<div id="app">
    <app></app>
</div>
<script src="{{ mix('/js/app.js') }}"></script>
</body>

</html>
