import mixpanel from 'mixpanel-browser';
// or with require() syntax:
// const mixpanel = require('mixpanel-browser');

// Enabling the debug mode flag is useful during implementation,
// but it's recommended you remove it for production
mixpanel.init('f4dbbe710a5fc4b98189e3366b94f8e3', {debug: true}, ignore_dnt:true); 
mixpanel.track('Sign Up', {
  'source': "https://github.com/",
  'Opted out of email': true,
});
