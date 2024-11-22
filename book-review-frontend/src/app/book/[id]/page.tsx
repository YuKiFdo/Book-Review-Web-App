"use client";
import React from "react";
import Image from "next/image";
import Navigation from "@/components/ui/custom/Navigation";
import { useState, useEffect } from "react";
import ReviewCard from "@/components/ui/custom/ReviewCard";
import StarRating from "@/components/ui/custom/StarRating";
import { useRouter } from "next/navigation";


type Review = {
  id: string;
  author: string;
  location: string;
  rating: number;
  title: string;
  content: string;
  timeAgo: string;
  dateAdded: string;
};

export default function BookDetailPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [sortMethod, setSortMethod] = useState("rating");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const bookData = JSON.parse(sessionStorage.getItem("bookData") || "{}"); 
  const loggedInUser = localStorage.getItem("username");
  
  useEffect(() => {

    if (bookData.id) {
      setLoading(true); 
      fetch(`http://localhost:8080/reviews/${bookData.id}`)
        .then((response) => {

  
          if (!response.ok) {
            throw new Error("Network response was not ok"); 
          }
          return response.json(); 
        })
        .then((data) => {
          setReviews(data); 
          setLoading(false); 
        })
        .catch((error) => {
          console.error("Error fetching reviews:", error); 
          setLoading(false);
        });
    } else {
      console.log("No valid bookData.id found, skipping fetch request."); 
    }
  }, [bookData.id]);
  

  if (!bookData.id) {
    return <div>Book not found</div>
  }

  const handlereview = () => {
    router.push(`/book/${bookData.id}/review`);
  };

  const handleEdit = (reviewId: number) => {
    router.push(`/book/${bookData.id}/review/${reviewId}/edit?id=${reviewId}`);
  };

  const handleDelete = (reviewId: number) => {
    fetch(`http://localhost:8080/reviews/${reviewId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete review");
        }
        return response.text
      })
      .then(() => {
        const updatedReviews = reviews.filter((review) => Number(review.id) !== reviewId);
        setReviews(updatedReviews);
        console.log("Review deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting review:", error);
      });
  };
  

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortMethod === "rating") {
      return b.rating - a.rating;
    } else if (sortMethod === "dateAdded") {
      return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
    }
    return 0;
  });

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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-white px-6 py-6 mb-10 rounded-lg">
            <div className="md:col-span-3">
              <Image
                src= {bookData.coverImage}
                alt={`Book`}
                className="w-full h-full object-cover rounded-md"
                width={150}
                height={200}
              />
            </div>

            <div className="md:col-span-9 mt-11">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {bookData.title}
                </h1>
                <h2 className="text-xl text-gray-600 mb-4">Rodrick Rules</h2>

                <div className="flex gap-3 mb-6">
                  <StarRating rating={5} size={5} />
                  <span className="text-gray-600">
                    {bookData.rating} <span className="text-gray-400">({bookData.totalReviews})</span>
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed">
                 {bookData.description}
                </p>
              </div>
            </div>
          </div>
            <div className="md:col-span-12">
              <div className="flex justify-end mb-8">
                <select
                  className="px-3 py-2 border rounded-md mr-4"
                  value={sortMethod} 
                  onChange={(e) => setSortMethod(e.target.value)}
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="dateAdded">Sort by Date Added</option>
                </select>

                <button className="px-6 py-4 bg-white text-blue-500 rounded-lg border border-blue-500 font-semibold hover:bg-blue-500 hover:text-white" onClick={handlereview}>
                  Write a review
                </button>
              </div>

              <div className="">
              {sortedReviews.map((review) => (
                <div key={review.id} className="relative">
                  {loggedInUser === review.author && (
                    <div className="absolute top-5 right-3 flex gap-2">
                      <button className="bg-blue-500 text-white font-semibold rounded-xl hover:text-blue-700 px-5 py-2" onClick={() => handleEdit(Number(review.id))}>
                        Edit
                      </button>
                      <button className="bg-red-700 text-white font-semibold rounded-xl hover:bg-red-600  px-5 py-2" onClick={() => handleDelete(Number(review.id))}>
                        Remove
                      </button>
                    </div>
                  )}
                  <ReviewCard
                    author={review.author}
                    location={review.location}
                    rating={review.rating}
                    title={review.title}
                    content={review.content}
                    timeAgo={review.dateAdded}
                  />
                </div>
              ))}
            </div>
            </div>
        </main>
      )}
    </div>
  );
}
