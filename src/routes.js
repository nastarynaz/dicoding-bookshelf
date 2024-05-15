const { addBooksHandler, getAllBooksHandler, getSpecifiedBooksHandler, editSpecifiedBooksHandler, deleteSpecifiedBooksHandler } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBooksHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getSpecifiedBooksHandler,
    },
    {
        method: 'PUT',
        path:'/books/{bookId}',
        handler: editSpecifiedBooksHandler,
    },
    {
        method: 'DELETE',
        path:'/books/{bookId}',
        handler: deleteSpecifiedBooksHandler,
    }

];

module.exports = routes;