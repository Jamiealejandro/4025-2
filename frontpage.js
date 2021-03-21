export default ({markup, css}) => {
  return `<!doctype html>
  <html lang="en">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Roman History Lover's Forum </title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <link rel="stylesheet" href="indexcss.css">
  </head>
  <header>

  <h1> Roman History Lover's Forum</h1>
  <h2> This is the homepage </h2>

</header>
    <body style="margin:0">
      <nav class="breadcrumb">
        <a class="breadcrumb-item" href="signup.html">Sign Up</a>
        <a class="breadcrumb-item" href="login.js">Log In</a>
      </nav>
    <body>
      <div id="root">${markup}</div>
      <style id="jss-server-side">${css}</style>
      <script type="text/javascript" src="/dist/bundle.js"></script>
    </body>
  </html>`
}
