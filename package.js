Package.describe({
  summary: "Login service for Zendesk accounts",
  version: "1.1.0",
  name: "revbucket:accounts-zendesk",
  version: "1.1.0",
  documentation: "README.md",
  git: "https://github.com/revbucket/accounts-zendesk.git"

});

Package.onUse(function(api) {
  api.use('underscore', ['server']);
  api.use('accounts-base@1.2.13', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base@1.2.13', ['client', 'server']);
  api.use('accounts-oauth@1.1.13', ['client', 'server']);
  api.use('zendesk@1.1.0', ['client', 'server']);

  api.use('http@1.2.9_1', ['client', 'server']);


  api.addFiles("zendesk.js");
});