Router.route('/', function () {
  this.render('enter_transactions');
});

const routes = [
  "enter_transactions",
  "set_budget",
  "view_performance",
  "view_transactions",
];

routes.forEach((route) => Router.route(`/${route}`, function () {
  this.render(route);
}));
