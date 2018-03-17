app.service('userService', ['$http', userService]);

function userService($http) {
  this.getUserById = function(id) {
    for (var user of users) {
      if (user.id === id) {
        return user;
      }
    }
    return null;
  };
}

var users = [
  {
    id: 1,
    name: 'lee',
    lastName: 'yahav'
  },
  {
    id: 1,
    name: 'maya',
    lastName: 'nana'
  },
  {
    id: 1,
    name: 'mor',
    lastName: 'tita'
  }
];
