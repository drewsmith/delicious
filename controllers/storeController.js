const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.addStore = (req, res) => {
  res.render('editStore', {
    title: 'Add Store'
  });
}

exports.homePage = (req, res) => {
  res.render('index');
}

exports.createStore = async (req, res) => {
  const store = await (new Store(req.body)).save();
  req.flash('success', `Succesfully Created ${store.name}. Care to leave a review?`);
  res.redirect(`/store/${store.slug}`);
}
