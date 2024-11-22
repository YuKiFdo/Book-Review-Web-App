'use client'
import Navigation from "@/components/ui/custom/Navigation";
import BookCard from "@/components//ui/custom/BookCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
  averageRating: number;
  totalReviews: string;
}

export default function HomePage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/book")
      .then((response) => response.json())
      .then((data) => {
        const sortedBooks = data.sort((a: Book, b: Book) => b.averageRating - a.averageRating);
        setBooks(sortedBooks.slice(0, 3)); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-scree">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Where Stories Meet Honest Reviews
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Real Reviews by Real People
          </p>
          <Link href="/browse">
            <Button variant="primary" size="lg">
              Browse Books
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center flex-col gap-3 justify-center">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-white">Books Loading...</span>
            </div>
          ) : books.length > 0 ? (
            books.map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                coverImage={book.cover}
                description={book.description}
                rating={book.averageRating}
                totalReviews={book.totalReviews}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No books found.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
