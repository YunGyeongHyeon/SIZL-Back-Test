import { Strategy, ExtractJwt } from "passport-jwt";
import passport from "passport";
import { prisma } from "../generated/prisma-client";
import dotenv from "dotenv";
import path from "path";
import "./env";

dotenv.config({ path: path.resolve(__dirname, ".env") });

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("bearer"), // ExtractJwt.fromAuthHeaderAsBearerToken() ///ExtractJwt.fromAuthHeaderWithScheme
  secretOrKey: process.env.JWT_SECRET
};
const verifyUser = async (payload, done) => {
  const user = await prisma.user({ id: payload.id });
  try {
    if (user != null) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
};
export const authenticateJwt = (req, res, next) => {
  passport.authenticate("jwt", { sessions: false }, (err, user) => {
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);
};

passport.use(new Strategy(jwtOptions, verifyUser));
passport.initialize();
