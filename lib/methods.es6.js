Meteor.methods({
  addTransaction: (record) => Transactions.insert(record),
  deleteTransaction: (id) => Transactions.remove(id),
});
