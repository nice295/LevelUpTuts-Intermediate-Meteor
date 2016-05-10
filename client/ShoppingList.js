Template.ShoppingList.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('recipes');
  });
});

Template.ShoppingList.helpers({
  shoppingList: () => Recipes.find({inMenu: true})
});