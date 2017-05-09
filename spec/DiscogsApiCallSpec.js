'use strict';

describe('DiscogsApiCall', function() {

  var discogsApiCall;

  beforeEach(function() {

  discogsApiCall = new DiscogsApiCall('Norway');

  });

  it('sends a request and receives a valid response', function() {
    discogsApiCall.sendRequest();
    expect(discogsApiCall.request.status).toEqual(200);
  });

  it('creates an array of ten tracks', function() {
    discogsApiCall.getTrackArray(DemoData());
    expect(discogsApiCall.trackArray).toContain('Michel Fuentes - Anything')
  });



});
