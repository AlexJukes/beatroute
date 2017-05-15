# Beatroutes

Single page web app which enables a user to generate a Spotify playlist based on the country selection of their choice.

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

![Screen shot of home page](https://github.com/AlexJukes/beatroute/blob/master/image/demo_images/Screen%20Shot%202017-05-14%20at%2019.08.55.png?raw=true)

2. Log in screen.

![Screen shot of log in screen](https://github.com/AlexJukes/beatroute/blob/master/image/demo_images/Screen%20Shot%202017-05-14%20at%2019.09.18.png?raw=true)

3. Select country.

![Screen shot of country selection screen](https://github.com/AlexJukes/beatroute/blob/master/image/demo_images/Screen%20Shot%202017-05-14%20at%2019.10.38.png?raw=true)

4. Playlist generated!

![Successful playlist creation screen](https://github.com/AlexJukes/beatroute/blob/master/image/demo_images/Screen%20Shot%202017-05-14%20at%2019.16.35.png?raw=true)


Technologies Used
------

[Discogs API](https://www.discogs.com/developers/)

- Used for looking up artists and tracks based on selected country.

[Spotify API](https://developer.spotify.com/web-api/)

- Used to authenticate user log-in and create playlist based on results returned by Discogs country lookup.

Acknowledgements
-----

The Spotify single-screen authorisation functionality and some related styling elements were taken directly from the Spotify tutorial materials on this subject, and can be found here:

 [https://github.com/spotify/web-api-auth-examples](https://github.com/spotify/web-api-auth-examples). 


Known Issues
-----

- Playlists aren't always limited to 10 songs.

- Doing multiple requests to the same country will generate identical playlists.


Future Additions
------

- Add date-range functionality to generate playlists from specific eras.

- Add geolocation feature to allow user to generate playlist on current location.

- Increase specificity of location to allow users to generate playlist based on city (Discogs doesn't provide this data - it would need to be found elsewhere).
