
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Frederico Furst Bittencourt' });
};

exports.pesquisa = function(req,res){
  res.render('pesquisa', { title: 'Pesquisa' });
};

exports.alunos = function(req,res){
  res.render('alunos', { title: 'Alunos' });
}

exports.games = function(req,res){
  res.render('games', { title: 'Games' });
}
