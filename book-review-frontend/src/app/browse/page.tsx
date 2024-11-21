'use client'
import Navigation from "@/components/ui/custom/Navigation";
import BookCard from "@/components/ui/custom/BookCard";
import { Input } from "@/components/ui/Input";
import { Search } from "lucide-react";
import { useState } from "react";

const BOOKS = [
  {
    id: "1",
    title: "Diary of a Wimpy Kid",
    rating: 4,
    coverImage: "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Diary_of_a_Wimpy_Kid_book_cover.jpg/200px-Diary_of_a_Wimpy_Kid_book_cover.jpg",
    totalRating: 1433,
  },
  {
    id: "2",
    title: "Harry Potter and the Sorcerer's Stone",
    rating: 5,
    coverImage: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Harry_Potter_and_the_Sorcerer%27s_Stone.jpg/220px-Harry_Potter_and_the_Sorcerer%27s_Stone.jpg",
    totalRating: 4523,
  },
  {
    id: "3",
    title: "The Hobbit",
    rating: 5,
    coverImage: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Hobbit_cover.JPG/220px-Hobbit_cover.JPG",
    totalRating: 3987,
  },
  {
    id: "4",
    title: "Percy Jackson: The Lightning Thief",
    rating: 4.5,
    coverImage: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Lightning_Thief_cover.jpg/200px-Lightning_Thief_cover.jpg",
    totalRating: 3249,
  },
  {
    id: "5",
    title: "To Kill a Mockingbird",
    rating: 5,
    coverImage: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/To_Kill_a_Mockingbird.JPG/220px-To_Kill_a_Mockingbird.JPG",
    totalRating: 4821,
  },
  {
    id: "6",
    title: "1984",
    rating: 4.8,
    coverImage: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/1984first.jpg/220px-1984first.jpg",
    totalRating: 5674,
  },
  {
    id: "7",
    title: "The Great Gatsby",
    rating: 4.7,
    coverImage: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/TheGreatGatsby_1925jacket.jpeg/220px-TheGreatGatsby_1925jacket.jpeg",
    totalRating: 3521,
  },
];

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = BOOKS.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
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
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => <BookCard key={book.id} {...book} />)
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
