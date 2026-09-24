import React from "react";
import BookCard from "../shared/BookCard";
import { IBook } from "@/types/booksType";

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json"); //localhost na dile error dehabe data load korte pare nah in next.js server component e rander hosse
  const data = await response.json();
  return data;
};
const Books = async () => {
  const booksData = await getBooks();
  console.log(booksData, "books data");
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Our Collection
          </p>

          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Explore Our Books
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            Discover amazing books from different authors and categories.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {booksData.map((book:IBook,index:number) => (
           <BookCard  key={index} book={book}></BookCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
