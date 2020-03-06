const publicRoutes = {
  // 'POST /user': 'UserController.register',
  // 'POST /register': 'UserController.register', // alias for POST /user
  // 'POST /login': 'UserController.login',
  // 'POST /validate': 'UserController.validate',
  // 'GET /post': 'PostController.getPost',
  // 'POST /post/create': 'PostController.createPost',
  // 'PUT /post/:ID': 'PostController.updatePost'
  'GET /spendHistory': 'PostController.spendHistory',
  'POST /updateSpendHistory': 'PostController.updateSpendHistory',
  'GET /clientContacts': 'PostController.clientContacts'
};

module.exports = publicRoutes;
