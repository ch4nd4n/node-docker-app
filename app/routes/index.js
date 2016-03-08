module.exports = function (express, opts) {
  var controllers = require('../controllers')(opts);
  var router = express.Router();
  router.get('/', controllers.index);
  return router;
};
