const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
passport.use(new GoogleStrategy({
  clientID:'786880821357-mdorkih8uv3cqofoesibojj4u9oha73u.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: "http://localhost:5000/auth/google/callback",
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});