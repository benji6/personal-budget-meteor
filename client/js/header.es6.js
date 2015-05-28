Template.header.helpers({
  navItems: () => [
    {name: "Enter Transactions", path: "enter_transactions", selected: Session.get("enter_transactions_selected")},
    {name: "View Transactions", path: "view_transactions", selected: Session.get("view_transactions_selected")},
    {name: "Set Budget", path: "set_budget", selected: Session.get("set_budget_selected")},
    {name: "View Performance", path: "view_performance", selected: Session.get("view_performance_selected")},
  ]
});
