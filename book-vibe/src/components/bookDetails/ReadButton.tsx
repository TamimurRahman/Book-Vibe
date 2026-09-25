
"use client"
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/booksType";
import React, { useContext } from "react";

const ReadButton = ({book}:{book:IBook}) => {

   const {readBooks,setReadBooks} = useContext(BooksContext);
  //  console.log(booksProvider,"  booksProvider");
  const handleReadBook = () =>{
    console.log("read book button trigger",book);
    setReadBooks([...readBooks,book]);
  }
  return (
    <button className="border border-gray-400 px-8 py-3 rounded-lg hover:bg-gray-100" onClick={() => handleReadBook()}>
      Read
    </button>
  );
};

export default ReadButton;
