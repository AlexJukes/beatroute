'use strict';

function User(){
}

User.prototype.getUserInfo = function() {
  $.ajax('https://api.spotify.com/v1/me', {
    dataType: 'json',
    headers: {
    'Authorization' : 'Bearer ' + this.oAuthToken() }
    success: function(response) {
      this.userInfo = response
    }
  });
};

User.prototype.getUserName = function() {
  return this.userInfo.id
}
