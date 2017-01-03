module.exports = index;

function index(app, portfolio) {
  app.get('/:test', function(req, res){
     res.render('chat');
  });

  app.get('/', function(req, res){
     res.render('index');
  });
}
