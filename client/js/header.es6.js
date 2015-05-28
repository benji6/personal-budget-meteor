Template.header.helpers({
  navItems: () => [
    {name: "Enter Transactions", path: "enter_transactions", selected: Session.get("enter_transactions_selected")},
    {name: "Set Budget", path: "set_budget", selected: Session.get("set_budget_selected")},
    {name: "View Performance", path: "view_performance", selected: Session.get("view_performance_selected")},
    {name: "View Summary", path: "view_summary", selected: Session.get("view_summary_selected")},
  ]
});
