module.exports.getVlogs = (req, res) => {
    res.render('vlogs', { title: 'Vlogs' });
};

module.exports.getabout = (req, res) => {
    res.render('about', { title: 'About' });
};

