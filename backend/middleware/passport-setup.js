const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const config = require("config");
const secretOrKey = config.get("secretOrKey");
const passport = require("passport");
const User = require("../models/User");
const Agence = require("../models/Agence");
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey,
};

passport.initialize();
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    const { id } = jwt_payload;
    try {
      const user = await User.findById(id).select('-password');
      const agence = await Agence.findById(id).select('-password');
      user ? done(null, user) : agence ? done(null, agence) : done(null,false);
    } catch (error) {
      console.log(error);
      res.status(500).json({ errors: error });
    }
  })
);
module.exports = isAuth = () => passport.authenticate('jwt',{session : false}); 
