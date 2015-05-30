Template.view_transactions.helpers({
  transactions: () => {
    return Transactions.find({}, {sort: {date: -1}})
      .map((row) => _.extend(_.clone(row), {amount: row.amount.toFixed(2)}));
  },
});
