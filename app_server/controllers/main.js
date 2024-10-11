module.exports.getmain = (req, res) => {
    res.render('index', { title: 'GAMIN' });
};
module.exports.getSignin = (req, res) => {
    res.render('signin', { title: 'Signin' });
};
module.exports.getSignup = (req, res) => {
    res.render('signup', { title: 'Signup' });
};