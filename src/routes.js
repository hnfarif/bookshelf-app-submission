const {
  addBookHandler,
  getAllBooks,
  getBooksByIdHandler,
  editBooksById,
  deletedBooksById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBooksByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBooksById,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deletedBooksById,
  },
];

module.exports = routes;
