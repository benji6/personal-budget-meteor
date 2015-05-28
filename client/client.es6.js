Template.enter_transactions.events({
  "submit .new-transaction": (e) => {
    const {amount, date, type} = e.target;
    Meteor.call("addTransaction", {
      date: date.value,
      type: type.value,
      amount: amount.value,
    });
    form.reset();
    e.preventDefault();
  },
});

Template.enter_transactions.helpers({
  mostRecentTransactions: () => Transactions.find({}, {sort: {date: -1}, limit: 5}),
});

Template.header.helpers({
  navItems: () => [
    {name: "Enter Transactions", path: "enter_transactions", selected: Session.get("enter_transactions_selected")},
    {name: "Set Budget", path: "set_budget", selected: Session.get("set_budget_selected")},
    {name: "View Performance", path: "view_performance", selected: Session.get("view_performance_selected")},
    {name: "View Summary", path: "view_summary", selected: Session.get("view_summary_selected")},
  ]
});

Template.enter_transactions.rendered = () => $(".datepicker").datepicker({dateFormat: "dd/mm/yy"});

Template.transaction.events({
  "click .delete": function () {
    Meteor.call("deleteTransaction", this._id);
  },
});
