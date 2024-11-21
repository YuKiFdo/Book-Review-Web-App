"use client";
import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/ui/custom/Navigation";
import { useState, useEffect } from "react";

interface ReviewProps {
  author: string;
  location?: string;
  rating: number;
  title: string;
  content: string;
  timeAgo: string;
}

function StarRating({ rating, size = 5 }: { rating: number; size?: number }) {
  return (
    <div className="flex flex-1 gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-${size} h-${size} ${
            i < rating ? "text-yellow-400" : "text-gray-200"
          }`}
          fill="currentColor"
        />
      ))}
    </div>
  );
}

function Review({
  author,
  location,
  rating,
  title,
  content,
  timeAgo,
}: ReviewProps) {
  return (
    <div className="py-6 bg-white px-8 mb-5 rounded-lg divide-y divide-gray-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-blue-200 rounded-full overflow-hidden">
            <div className="w-full h-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-semibold text-lg">
                {author.charAt(0)}
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-start flex-col  mb-1">
              <h3 className="font-semibold text-gray-900">{author}</h3>
              {location && (
                <div className="flex items-center gap-1">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/1160/1160357.png"
                    alt={`Location icon`}
                    width={16}
                    height={16}
                  />
                  <span className="text-sm text-gray-500">{location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="flex items-center gap-2 mt-4 mb-6">
          <StarRating rating={rating} />
          <span className="text-gray-600 ">{timeAgo}</span>
        </div>
        <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

export default function BookDetailPage() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

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

            <div className="md:col-span-9">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Diary of a Wimpy Kid
                </h1>
                <h2 className="text-xl text-gray-600 mb-4">Rodrick Rules</h2>

                <div className="flex items-center gap-4 mb-6">
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
                <button className="px-6 py-4 bg-white text-blue-500 rounded-lg border border-blue-500 font-semibold hover:bg-blue-500 hover:text-white">
                  Write a review
                </button>
              </div>

              <div className="">
                <Review
                  author="Shehal Herath"
                  location="Sri Lanka"
                  rating={4}
                  title="Fun and Relatable!"
                  content="This is a funny and easy read. Greg's struggles with his older brother Rodrick are something many can relate to. The book is full of laughs, and Greg's perspective on his family and school life is both entertaining and real. It's a great pick for anyone looking for a light, enjoyable story about growing up and family"
                  timeAgo="23h hours ago"
                />
                <Review
                  author="Jane Doe"
                  location="United States"
                  rating={5}
                  title="Great Book!"
                  content="I love this book! It's hilarious and so relatable. The characters are well-developed, and the story is engaging. I would recommend this book to anyone who enjoys a good laugh and a fun story."
                  timeAgo="3 days ago"
                />
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
