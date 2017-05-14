# Beatroute

Single page web app which enables a user to generate a 10-song Spotify playlist based on the country selection of their choice.

This app is built using vanilla JavaScript and jQuery and was fully written using Test Driven Development and SOLID principles.


Setup
------

1. Clone the repo onto your local machine.

2. Make sure you have [Node](https://nodejs.org/en/download/) installed on your machine.

3. Run `npm install` to ensure packages are properly installed.

4. Enter the directory and run `node app.js`.

5. Open your browser and visit `localhost:8888`

Screenshots
------

1. Home page

2. Log in screen.

3. Select country.

4. Playlist generated!


Technologies
------

[Discogs API](https://www.discogs.com/developers/)

- Used for looking up artists and tracks based on selected country.

[Spotify API](https://developer.spotify.com/web-api/)

- Used to authenticate user log-in and create playlist based on results returned by Discogs country lookup.


Known Issues and Future Improvements
-----

-
