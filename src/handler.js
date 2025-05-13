const { nanoid } = require('nanoid');
const books = require('./books');
const { createResponse } = require('./helper');

const addBookHandler = (request, h) => {
  try {
    const {
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
    } = request.payload;

    if (!name || name.trim() === '') {
      throw {
        statusCode: 400,
        payload: {
          status: 'fail',
          message: 'Gagal menambahkan buku. Mohon isi nama buku',
        },
      };
    }

    if (readPage > pageCount) {
      throw {
        statusCode: 400,
        payload: {
          status: 'fail',
          message:
            'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        },
      };
    }

    const id = nanoid(16);
    const finished = readPage === pageCount;
    const timestamp = new Date().toISOString();

    const newBook = {
      id,
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      finished,
      reading,
      insertedAt: timestamp,
      updatedAt: timestamp,
    };

    books.push(newBook);

    const isSuccess = books.some((book) => book.id === id);

    if (isSuccess) {
      return createResponse(h, 201, {
        status: 'success',
        message: 'Buku berhasil ditambahkan',
        data: { bookId: id },
      });
    }

    return createResponse(h, 500, {
      status: 'error',
      message: 'Buku gagal ditambahkan',
    });
  } catch (err) {
    return createResponse(
      h,
      err.statusCode || 500,
      err.payload || {
        status: 'error',
        message: 'Terjadi kesalahan server',
      }
    );
  }
};

const getAllBooks = (request, h) => {
  try {
    const { name, reading, finished } = request.query;
    let filteredBooks = [...books];

    if (name) {
      filteredBooks = filteredBooks.filter((book) =>
        book.name.toLowerCase().includes(name.toLowerCase())
      );
    } else if (reading !== undefined) {
      const isReading = reading === '1';
      filteredBooks = filteredBooks.filter(
        (book) => book.reading === isReading
      );
    } else if (finished !== undefined) {
      const isFinished = finished === '1';
      filteredBooks = filteredBooks.filter(
        (book) => book.finished === isFinished
      );
    }

    const bookSummaries = filteredBooks.map((book) => ({
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    }));

    return createResponse(h, 200, {
      status: 'success',
      data: { books: bookSummaries },
    });
  } catch (err) {
    return createResponse(h, 500, {
      status: 'error',
      message: 'Terjadi kesalahan saat mengambil data buku',
    });
  }
};

const getBooksByIdHandler = (request, h) => {
  try {
    const { id } = request.params;
    const book = books.find((b) => b.id === id);

    if (!book) {
      throw {
        statusCode: 404,
        payload: {
          status: 'fail',
          message: 'Buku tidak ditemukan',
        },
      };
    }

    return createResponse(h, 200, {
      status: 'success',
      data: { book },
    });
  } catch (err) {
    return createResponse(
      h,
      err.statusCode || 500,
      err.payload || {
        status: 'error',
        message: 'Terjadi kesalahan server',
      }
    );
  }
};

const editBooksById = (request, h) => {
  try {
    const { id } = request.params;
    const {
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
    } = request.payload;

    if (!name || name.trim() === '') {
      throw {
        statusCode: 400,
        payload: {
          status: 'fail',
          message: 'Gagal memperbarui buku. Mohon isi nama buku',
        },
      };
    }

    if (readPage > pageCount) {
      throw {
        statusCode: 400,
        payload: {
          status: 'fail',
          message:
            'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
        },
      };
    }

    const index = books.findIndex((book) => book.id === id);

    if (index === -1) {
      throw {
        statusCode: 404,
        payload: {
          status: 'fail',
          message: 'Gagal memperbarui buku. Id tidak ditemukan',
        },
      };
    }

    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt: new Date().toISOString(),
    };

    return createResponse(h, 200, {
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
  } catch (err) {
    return createResponse(
      h,
      err.statusCode || 500,
      err.payload || {
        status: 'error',
        message: 'Terjadi kesalahan server',
      }
    );
  }
};

const deletedBooksById = (request, h) => {
  try {
    const { id } = request.params;
    const index = books.findIndex((book) => book.id === id);

    if (index === -1) {
      throw {
        statusCode: 404,
        payload: {
          status: 'fail',
          message: 'Buku gagal dihapus. Id tidak ditemukan',
        },
      };
    }

    books.splice(index, 1);

    return createResponse(h, 200, {
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
  } catch (err) {
    return createResponse(
      h,
      err.statusCode || 500,
      err.payload || {
        status: 'error',
        message: 'Terjadi kesalahan server',
      }
    );
  }
};

module.exports = {
  addBookHandler,
  getAllBooks,
  getBooksByIdHandler,
  editBooksById,
  deletedBooksById,
};
