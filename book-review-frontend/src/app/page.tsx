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
