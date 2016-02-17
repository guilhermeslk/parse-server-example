
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define('author', function(req, res) {
  res.success('Guilherme Solinscki');
});
