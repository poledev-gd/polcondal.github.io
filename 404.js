< !DOCTYPE html >
    <html>
        <head>
            <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                    <title>Single Page Apps for GitHub Pages</title>
                    <meta name="description" content="Lightweight solution for deploying single page apps with GitHub Pages.">

                        <style>
                            html {background - color: rgb(0, 120, 0); }
                        </style>

                        <!-- favicon -->
                        <link rel="icon" type=”image/svg+xml” href="/favicon/green-grid-144-168-192.svg">
                        <link rel="alternate icon" type="image/png" href="/favicon/green-grid-144-168-192-512x512.png">
                            <link rel="apple-touch-icon" href="/favicon/green-grid-144-168-192-180x180.png">
                                <link rel="manifest" href="/favicon/site.webmanifest">
                                    <meta name="theme-color" content="#000000">

                                        <!-- Start Single Page Apps for GitHub Pages -->
                                        <script type="text/javascript">
      // Single Page Apps for GitHub Pages
                                            // MIT License
                                            // https://github.com/rafgraph/spa-github-pages
                                            // This script checks to see if a redirect is present in the query string,
                                            // converts it back into the correct url and adds it to the
                                            // browser's history using window.history.replaceState(...),
                                            // which won't cause the browser to attempt to load the new url.
                                            // When the single page app is loaded further down in this file,
                                            // the correct url will be waiting in the browser's history for
                                            // the single page app to route accordingly.
                                            (function(l) {
        if (l.search[1] === '/' ) {
          var decoded = l.search.slice(1).split('&').map(function(s) {
            return s.replace(/~and~/g, '&')
          }).join('?');
                                            window.history.replaceState(null, null,
                                            l.pathname.slice(0, -1) + decoded + l.hash
                                            );
        }
      }(window.location))
                                        </script>
                                        <!-- End Single Page Apps for GitHub Pages -->

                                    </head>
                                    <body>
                                        <div id="root"></div>
                                        <!-- single page app in bundle.js -->
                                        <script src="/build/bundle.js"></script>
                                    </body>
                                </html>