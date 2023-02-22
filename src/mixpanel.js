import mixpanel from 'mixpanel-browser';
// or with require() syntax:
// const mixpanel = require('mixpanel-browser');

// Enabling the debug mode flag is useful during implementation,
// but it's recommended you remove it for production
mixpanel.init('f4dbbe710a5fc4b98189e3366b94f8e3', {debug: true}); 
mixpanel.track('Sign up');

mixpanel.track('Sign Up', {
  'source': "Pat's affiliate site",
  'Opted out of email': true,
});
