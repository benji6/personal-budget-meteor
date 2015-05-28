Router.route('/', function () {
  Session.set(`enter_transactions_selected`, true);
  this.render('enter_transactions');
});

const routes = [
  "enter_transactions",
  "set_budget",
  "view_performance",
  "view_transactions",
];

routes.forEach((route) => Router.route(`/${route}`, function () {
  routes.forEach((r) => r === route ?
    Session.set(`${r}_selected`, true) :
    Session.set(`${r}_selected`, false));
  this.render(route);
}));
