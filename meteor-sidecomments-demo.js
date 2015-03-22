//
// Client
// --------------------------------------------------
if (Meteor.isClient) {
  
}



//
// Server
// --------------------------------------------------
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}






//
// Both
// --------------------------------------------------
Router.route('/', function () {
  this.render('Home');
});

Router.route('/page', function () {
  this.render('Page');
});

       