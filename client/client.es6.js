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
  mostRecentTransactions: () => Transactions.find({}, {sort: {date: -1}, limit: 5}),
});

Template.body.rendered = () => $(".datepicker").datepicker();

Template.transaction.events({
  "click .delete": function () {
    Meteor.call("deleteTransaction", this._id);
  },
});
