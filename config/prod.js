//prod.js
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublic: process.env.STRIPE_PUBLIC,
  stripeSecret: process.env.STRIPE_SECRET,
  sendgridKey: process.env.SENDGRID_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN
};
