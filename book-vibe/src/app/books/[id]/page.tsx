import { IBook } from "@/types/booksType";
import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";
import ReadButton from "@/components/bookDetails/ReadButton";
interface IBookDetailsPageProps {
  params: Promise<{ id: string }>;
}

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json"); //localhost na dile error dehabe data load korte pare nah in next.js server component e rander hosse
  const data = await response.json();
  return data;
};

const page = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;
  console.log("id ", id);
  const booksData = await getBooks();
  const book = booksData.find((book: IBook) => book.bookId === Number(id));

  if (!book) {
    notFound(); //when user find differen id number this is an error handeling when book is not exists
  }
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Main Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side - Book Image */}
        <div className="bg-gray-100 rounded-2xl flex justify-center items-center p-8">
          <Image
            src={book.image}
            alt={book.bookName}
            width={500}
            height={500}
            className="max-h-[600px] w-auto object-contain"
          />
        </div>

        {/* Right Side - Book Information */}
        <div>
          {/* Book Name */}
          <h1 className="text-4xl font-bold mb-4">{book.bookName}</h1>

          {/* Author */}
          <p className="text-lg text-gray-600 mb-6">
            By : <span className="font-medium">{book.author}</span>
          </p>

          {/* Category */}
          <div className="border-t border-b border-gray-200 py-4 mb-6">
            <p className="text-gray-600">{book.category}</p>
          </div>

          {/* Review */}
          <div className="mb-6">
            <p className="text-gray-600 leading-7">
              <span className="font-bold text-black">Review :</span>{" "}
              {book.review}
            </p>
          </div>

          {/* Tags */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <div className="flex items-center gap-4">
              <p className="font-bold">Tag</p>

              <div className="flex gap-3 flex-wrap">
                {book.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-green-50 text-green-600 px-4 py-2 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Book Information */}
          <div className="space-y-5 mb-8">
            <div className="flex">
              <p className="w-52 text-gray-500">Number of Pages:</p>

              <p className="font-semibold">{book.totalPages}</p>
            </div>

            <div className="flex">
              <p className="w-52 text-gray-500">Publisher:</p>

              <p className="font-semibold">{book.publisher}</p>
            </div>

            <div className="flex">
              <p className="w-52 text-gray-500">Year of Publishing:</p>

              <p className="font-semibold">{book.yearOfPublishing}</p>
            </div>

            <div className="flex">
              <p className="w-52 text-gray-500">Rating:</p>

              <p className="font-semibold">{book.rating}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <ReadButton book={book}></ReadButton>

            <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
