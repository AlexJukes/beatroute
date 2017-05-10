$(document).ready(function() {

  findTrack();

  $('#selected-country').change(function() {
    var country = $('#selected-country').val();
    makeApiCallToDiscogs(country);
  });

  function makeApiCallToDiscogs(country) {
    DAC = new DiscogsApiCall(country);
    DAC.sendRequest();
    DAC.getTrackArray(DAC.jsonParseResponse());
    console.log(DAC.formatTrackArray());
  }

  function findTrack() {
    $.ajax({
      url: 'https://api.spotify.com/v1/search?q=Nirvana&type=track',
  		dataType: 'json',
  		headers: {
  			'Authorization': 'Bearer BQB4xmFZR2m6yDjtmLriNxvstyBszk6WtYdq7BVH7x1o3Gve_Y1CIjBId4Xp3dsZWmoFpblk9NlUXIH7O2v0AZ3u7XafbiHoFRb_oqZzUK9H8_DaLNoud0',
        'Accept': 'application/json'
      },
      success : function (data) {
        console.log(data);
      },
	  });
  }

});
