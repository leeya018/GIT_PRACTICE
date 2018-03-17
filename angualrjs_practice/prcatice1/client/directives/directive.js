app.directive('user', userDirective);

function userDirective() {
  return {
    template: '<div>{{user.name + " " +  user.lastName}}</div>'
  };
}
