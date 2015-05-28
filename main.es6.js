Transactions = new Mongo.Collection("transactions");

if (Meteor.isClient) {
  Template.body.events({
    "submit .new-transaction": (e) => {
      const form = e.target;
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
    transactions: () => Transactions.find({}, {sort: {date: -1}}),
  });

  Template.body.rendered = () => $(".datepicker").datepicker();

  Template.transaction.events({
    "click .delete": () => Meteor.call("deleteTransaction", this._id),
  });
}

Meteor.methods({
  addTransaction: (record) => Transactions.insert(record),
  deleteTransaction: (id) => Transactions.remove(id),
});