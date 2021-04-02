const router = require("express").Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const venuesRouter = require("./venues.js")
const searchRouter = require("./search.js")
const reservationsRouter = require("./reservations.js")
const reviewsRouter = require("./reviews.js")


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use("/venues", venuesRouter);

router.use("/search", searchRouter);

router.use("/reservations", reservationsRouter)

router.use("/reviews", reviewsRouter)


module.exports = router;
