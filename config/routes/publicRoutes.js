const publicRoutes = {
  'GET /spendHistory': 'PostController.spendHistory',
  'POST /updateSpendHistory': 'PostController.updateSpendHistory',
  'GET /clientContacts': 'PostController.clientContacts'
};

module.exports = publicRoutes;
