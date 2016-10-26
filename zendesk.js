Accounts.oauth.registerService('zendesk');

if (Meteor.isClient) {
  Meteor.loginWithZendesk = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);

    Zendesk.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    // publish all fields including access token, which can legitimately
    // be used from the client (if transmitted over ssl or on
    // localhost).
    // MJ Note: I have no idea why we want this, but I'm following meteor's lead
    forLoggedInUser: ['services.zendesk'],
    forOtherUsers: ['services.zendesk.id']
  });
}