module.exports = function(opts) {
  return {
    index: function(req, res) {
      res.json({success: true});
    }
  };
};
