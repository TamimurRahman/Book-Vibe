export interface IBook {
  bookId: number; // 1
  bookName: string; // "The Great Gatsby"
  author: string; // "F. Scott Fitzgerald"
  image: string; // image URL
  review: string; // long text
  totalPages: number; // 192
  rating: number; // 4.5
  category: string; // "Classic"
  tags: string[]; // ["Fiction", "Romance"]
  publisher: string; // "Scribner"
  yearOfPublishing: number; // 1925
}
