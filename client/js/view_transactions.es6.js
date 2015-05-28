Template.view_transactions.helpers({
  transactions: () => Transactions.find({}, {sort: {date: -1}}),
});
