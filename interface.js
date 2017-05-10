$(document).ready(function() {

  function track(queryArray) {
    var artistAndTrackString = queryArray[6];
    var url = "https://api.spotify.com/v1/search?query=" + artistAndTrackString + '&type=track&offset=0&limit=1';

    $.get(url, function(data) {
      goToUrl(data.tracks.items[0].id);
    });
  }

  function goToUrl(id) {
    window.location.replace('spotify:track:' + id);
  }

  $('#displayTitle').click(function(){
    track(queryArray);
  });

  $('#selected-country').change(function() {
    var country = $('#selected-country').val();
    callDiscogs(country);
  });

  function callDiscogs(country){
    var discogsApiCall = new DiscogsApiCall(country);
    discogsApiCall.sendRequest();
    discogsApiCall.getTrackArray(discogsApiCall.jsonParseResponse());
    var queryArray = discogsApiCall.formatTrackArray();
    console.log(discogsApiCall.formatTrackArray());
    track(queryArray);
  }

  function makePlaylist(){
    $.ajax('https://api.spotify.com/v1/users/allbecauseyoutoldmeso/playlists', {
  		method: 'POST',
  		data: JSON.stringify({
  			'name': 'beetroute playlist',
  			'public': false
  		}),
  		dataType: 'json',
  		headers: {
  			'Authorization': 'Bearer BQCtm3zaOrVptyLizVq559NuyRl5yiWRAes_HikSv-6qInhY5rUXjz5CyKdCmDJWkFhkbUIzxbDmqvHqDzlc3uVmmz9w7ikXLMb_c4ICkTH-kn70IqkTpOUdedsM2mrbWP9FrLwHYKeGOWV0Plw_I-Z77ZhoqkFDR5cP8fLVQykbarAFvs7oNGivglz9NNiAiQB0YRoilAkuK5BHmGqCN5y76-AaL6-21Gwr39CPHDjChR2acw',
  			'Content-Type': 'application/json'
  		},
  		success: function(response) {
  			console.log('playlist created!');
        console.log(response.id);
  		},
	  });
  }

  function addTracksToPlaylist() {
    $.ajax('https://api.spotify.com/v1/users/allbecauseyoutoldmeso/playlists/3ARGJVJK45KHz5ChT6vTNj/tracks?position=0&uris=spotify%3Atrack%3A4iV5W9uYEdYUVa79Axb7Rh,spotify%3Atrack%3A1301WleyT98MSxVHPZCA6M', {
  		method: 'POST',
  		dataType: 'text',
  		headers: {
  			'Authorization': 'Bearer BQCD2SFHIxtP-PfOqchluRPtqOn_WOs8oxS6xwrzlhp39hIRlGU1y8CLmrJ4fQ6_VNS3h_j8jF_y3AzJsndQIeoX0K6yvkEdpQ_xPdmJrtHk9DK588JeAPH5_EL7PNimD3anPLqd1V10aZ01XPQbE7hvUW2mrs-s8MPsOOOIsX_TyjxEYoJlwBx4YYYWtwBe8BMwwfo1pyQgr_dyNsgUOsB9t45vZGyhiobAVefFlTtr3Ovufw',
  			'Content-Type': 'application/json'
  		},
  		success: function() {
  			console.log('tracks added!');
  		},
	  });
  }

  function getUsernId() {
  	$.ajax('https://api.spotify.com/v1/me', {
  		dataType: 'json',
  		headers: {
  			'Authorization': 'Bearer BQAlKyJRp4Rr87tRwbWZbfdGX_A17qnQOfsYTOiTbAtxihl9WLe3kuTA3dn5E7Q8ZflJ1JMpFpxUU7nLSMbfsqqCtQp3TqMmDLvxPypx-obDXGmhqHBr_L-3UIPru4D9Pl0eavbZUrM9T2GCtQg0K4_VDfIXeklMuMQbgQjjmeriWIaDKMXS9vwLwpiFF2pwHBcETFOOoUGunHPF5rhcTpZBQyHQFl70ZJ3HiVw4Tz6y1vSPPEOA_jrBWOJ-Tn_fBauJqh2miw'
  		},
  		success: function(response) {
  			console.log(response.id);
  		},
  	});
  }

}






});
