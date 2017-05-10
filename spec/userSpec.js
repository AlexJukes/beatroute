'use strict';

describe('User', function(){
  var user;
    beforeEach(function(){
      user = new User();
    });

  it('sends an API call to get username', function() {
    spyOn(user, 'oAuthToken').and.returnValue('');
    user.getUserName();
    expect(user.username).toBeDefined();
  });
});
