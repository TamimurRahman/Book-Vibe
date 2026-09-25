import { IBook } from "@/types/booksType";
import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";
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
    <div className="container mx-auto">
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <Image
            src={book.image}
            alt={book.bookName}
            width={740}
            height={740}
          ></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
