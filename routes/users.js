module.exports = function(app,passport){

 
var User = require("../models/User.js")
var mongoose = require("mongoose")


 //Next:
 //Limit the amt of info sent as user info! we dont want username or password stuffs



    // // process the signup form (all passport stuff)
   app.post('/signup', passport.authenticate('local-signup',{failureFlash:true}),function(req,res){
    res.send(req.flash("signupMessage"))
   })

    // process the login form
 // process the login form
    app.post('/login', passport.authenticate('local-login'),function(req,res){
     res.json("Success")   
    });


    // PROFILE SECTION =====================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn,function(req, res) {
        res.sendFile("profile.html",{root:"views"})
    });

    //Getting user data
    app.get('/userinfo_serv',isLoggedIn,function(req,res){
      //We copy the user databut take out password
      var ans = req.user
      ans.local.password = ""

      res.json(ans)   
    });


    //Adding moreInfo! :))

    app.post("/addMoreInfo",function(req,res){
        User.findByIdAndUpdate(req.user._id, { moreInfo: req.body }, function(err, user) {
                            if (err) throw err;
      // we have the updated user returned to us
        console.log(req.body);
        });

        })










  
    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
}

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/signup');
}