import Navigation from "@/components/ui/custom/Navigation";
import BookCard from "@/components/ui/custom/BookCard";
import { Input } from "@/components/ui/Input";
import {Search} from "lucide-react";

const BOOKS = [
  {
    id: "1",
    title: "Diary of a Wimpy Kid",
    rating: 4,
    coverImage: "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Diary_of_a_Wimpy_Kid_book_cover.jpg/200px-Diary_of_a_Wimpy_Kid_book_cover.jpg",
    },
];

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation/>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="relative max-w-2xl mx-auto mb-12">
          <Input
            type="text"
            placeholder="Search books..."
            className="pl-4 pr-12"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BOOKS.map((book) => (
                <BookCard key={book.id} {...book} />
            ))}
        </div>
      </main>
    </div>
  );
}