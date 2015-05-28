Template.transaction.events({
  "click .delete": function () {
    Meteor.call("deleteTransaction", this._id);
  },
});
