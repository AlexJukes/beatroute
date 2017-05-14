'use strict';

function SpotifyApiCall(array) {
  this.url = "https://api.spotify.com/v1/search?query=";
  this.searchLimit = '&type=track&offset=0&limit=1';
  this.array = array;
  this.idArray = [];
};

SpotifyApiCall.prototype.lookUpAndStoreTrackIds = function(array) {
  for(var i = 0; i < array.length; i++) {
    if(this.idArray.length < 50) {
      this.sendRequest(array[i]);
      var jsonObj = this.jsonParseResponse();
      if(jsonObj.tracks.items[0] != undefined) {
        this.idArray.push(jsonObj.tracks.items[0].id);
      }
    }
  }
};

SpotifyApiCall.prototype.sendRequest = function (trackString) {
  this.request = new XMLHttpRequest();
  this.request.open('GET', this.url + trackString + this.searchLimit, false);
  this.request.send();
};

SpotifyApiCall.prototype.jsonParseResponse = function() {
  this.parsedObject = JSON.parse(this.request.responseText);
  return this.parsedObject;
};

SpotifyApiCall.prototype.getTrackId = function(trackObject) {
  return trackObject.tracks.items[0].id;
};

SpotifyApiCall.prototype.generatePlaylistString = function(idArray) {

  var formattedStringsArray = [];
  var playlistUrlFormat = "spotify%3Atrack%3A";

  for(var i = 0; i < idArray.length; i++) {
    formattedStringsArray.push(playlistUrlFormat + idArray[i]);
  };

  var formattedStrings = formattedStringsArray.join();
  return formattedStrings;

};
