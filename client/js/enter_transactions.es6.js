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

Template.enter_transactions.rendered = () => $(".datepicker").datepicker({dateFormat: "dd/mm/yy"});
