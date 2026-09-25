
"use client"
import { BooksContext } from '@/context/BooksContext';
import { useContext } from 'react';

const ListedBooks = () => {
  const {readBooks}= useContext(BooksContext);
  console.log(readBooks);
  return (
    <div>
      <h1>Lisetd books</h1>
    </div>
  );
};

export default ListedBooks;