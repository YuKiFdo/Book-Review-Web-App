"use client";
import React from "react";
import Navigation from "@/components/ui/custom/Navigation";
import BookCard from "@/components/ui/custom/BookCard";
import { Input } from "@/components/ui/Input";
import { Search } from "lucide-react";
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

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/book")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="relative max-w-2xl mx-auto mb-12">
          <Input
            type="text"
            placeholder="Search books..."
            className="pl-4 pr-12"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center flex-col gap-3 justify-center">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-white">Books Loading...</span>
            </div>
          ) : filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
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
