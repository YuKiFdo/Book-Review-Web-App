"use client";
import Image from "next/image";
import Navigation from "@/components/ui/custom/Navigation";
import { useState, useEffect } from "react";
import ReviewCard from "@/components/ui/custom/ReviewCard";
import StarRating from "@/components/ui/custom/StarRating";

const reviews = [
  {
    id: "1",
    author: "Shehal Herath",
    location: "Sri Lanka",
    rating: 4,
    title: "Fun and Relatable!",
    content:
      "This is a funny and easy read. Greg's struggles with his older brother Rodrick are something many can relate to.",
    timeAgo: "23h hours ago",
    dateAdded: "2024-11-18",
  },
  {
    id: "2",
    author: "Jane Doe",
    location: "United States",
    rating: 5,
    title: "Great Book!",
    content:
      "I love this book! It's hilarious and so relatable. The characters are well-developed, and the story is engaging.",
    timeAgo: "3 days ago",
    dateAdded: "2024-11-15",
  },
  {
    id: "3",
    author: "John Smith",
    location: "Canada",
    rating: 3,
    title: "It was ok",
    content:
      "The book was okay. It had some funny moments, but overall, I didn't enjoy it as much as I thought I would.",
    timeAgo: "1 week ago",
    dateAdded: "2024-11-10",
  },
];

export default function BookDetailPage() {
  const [sortMethod, setSortMethod] = useState("rating");

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortMethod === "rating") {
      return b.rating - a.rating; 
    } else if (sortMethod === "dateAdded") {
      return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
    }
    return 0; 
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {!loading && (
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <Image
                src="https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Diary_of_a_Wimpy_Kid_book_cover.jpg/200px-Diary_of_a_Wimpy_Kid_book_cover.jpg"
                alt={`Diary of a Wimpy Kid: Rodrick Rules cover`}
                className="w-full h-full object-cover rounded-md"
                width={150}
                height={200}
              />
            </div>

            <div className="md:col-span-9 mt-11">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Diary of a Wimpy Kid
                </h1>
                <h2 className="text-xl text-gray-600 mb-4">Rodrick Rules</h2>

                <div className="flex gap-3 mb-6">
                  <StarRating rating={5} size={5} />
                  <span className="text-gray-600">
                    5.00 <span className="text-gray-400">(1433)</span>
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Diary of a Wimpy Kid: Rodrick Rules by Jeff Kinney is the
                  second book in the Diary of a Wimpy Kid series. It follows
                  middle schooler Greg Heffley as he navigates his awkward life,
                  especially dealing with his older brother, Rodrick. Rodrick
                  constantly torments Greg, but their relationship takes a turn
                  as Greg faces challenges at school and at home. The book
                  humorously explores sibling rivalry, growing up, and the ups
                  and downs of family life through witty diary entries and
                  cartoons.
                </p>
              </div>
            </div>
            <div className="md:col-span-12">
              <div className="flex justify-end mb-8">
                <select
                  className="px-4 py-2 border rounded-md"
                  value={sortMethod}
                  onChange={(e) => setSortMethod(e.target.value)}
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="dateAdded">Sort by Date Added</option>
                </select>
                <button className="px-6 py-4 bg-white text-blue-500 rounded-lg border border-blue-500 font-semibold hover:bg-blue-500 hover:text-white">
                  Write a review
                </button>
              </div>

              <div className="">
                {sortedReviews.map((review) => (
                  <ReviewCard
                    key={review.id}
                    author={review.author}
                    location={review.location}
                    rating={review.rating}
                    title={review.title}
                    content={review.content}
                    timeAgo={review.timeAgo}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
