import Navigation from "@/components/ui/custom/Navigation";
import BookCard from "@/components//ui/custom/BookCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const FEATURED_BOOKS = [
  {
    id: "1",
    title: "Diary of a Wimpy Kid",
    rating: 4,
    coverImage: "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Diary_of_a_Wimpy_Kid_book_cover.jpg/200px-Diary_of_a_Wimpy_Kid_book_cover.jpg",
  },
  // Add more books...
];

export default function HomePage() {
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
          {FEATURED_BOOKS.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </main>
    </div>
  );
}
