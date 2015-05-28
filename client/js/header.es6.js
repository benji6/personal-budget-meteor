Template.header.helpers({
  navItems: () => [
    {
      name: "Enter Transactions",
      path: "enter_transactions",
      selected: Router.current().route.path() === "/enter_transactions" ||
        Router.current().route.path() ===  "/",
    },
    {
      name: "View Transactions",
      path: "view_transactions",
      selected: Router.current().route.path() === "/view_transactions",
    },
    {
      name: "Set Budget",
      path: "set_budget",
      selected: Router.current().route.path() === "/set_budget",
    },
    {
      name: "View Performance",
      path: "view_performance",
      selected: Router.current().route.path() === "/view_performance",
    },
  ]
});
