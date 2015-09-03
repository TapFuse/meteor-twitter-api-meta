Package.describe({
  name: 'tapfuse:twitter-api-meta',
  version: '0.0.1',
  summary: 'A simple Twitter API meta wrapper for Meteor',
  git: 'https://github.com/TapFuse/meteor-twitter-api.git',
  documentation: 'README.md'
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  //Dependencies
  api.use('tapfuse:twitter-api', S);
  //Files
  api.addFiles('twitter-api-meta.js');
});

Package.onTest(function(api) {
});
