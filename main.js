Transactions = new Mongo.Collection("transactions");

if (Meteor.isClient) {
  Template.body.events({
    "submit .new-transaction": function (e) {
      var form = e.target;
      Meteor.call("addTransaction", {
        date: form.date.value,
        type: form.type.value,
        amount: form.amount.value,
      });
      form.reset();
      e.preventDefault();
    },
  });

  Template.body.helpers({
    transactions: function () {
      return Transactions.find({}, {sort: {date: -1}});
    },
  });

  Template.body.rendered = function () {
    $(".datepicker").datepicker();
  };

  Template.transaction.events({
    "click .delete": function () {
      Meteor.call("deleteTransaction", this._id);
    },
  });
}

Meteor.methods({
  addTransaction: function (record) {
    Transactions.insert(record);
  },
  deleteTransaction: function (id) {
    Transactions.remove(id);
  },
});
