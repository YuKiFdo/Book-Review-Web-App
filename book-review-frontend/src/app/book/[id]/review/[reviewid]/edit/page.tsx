"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function EditReviewPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reviewId = searchParams.get("id");
  const [review, setReview] = useState({
    author: "",
    book: { id: "" },
    title: "",
    content: "",
    rating: 0,
    dateAdded: "",
    id: reviewId,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    if (reviewId) {
      const token = localStorage.getItem("token");
      const username = localStorage.getItem("username");
  
      fetch(`http://localhost:8080/reviews/edit/${reviewId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, 
          "Content-Type": "application/json", 
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch review data");
          }
          return response.json();
        })
        .then((data) => {
          setReview({
            id: reviewId,
            book: { id: data.bookId },
            author: username || "",
            title: data.title,
            content: data.content,
            rating: data.rating,
            dateAdded: data.dateAdded,
          });
          setLoading(false);
        })
        .catch((err) => {
          setError("Failed to load review");
          setLoading(false);
        });
    }
  }, [reviewId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("token");
  
    try {
      const response = await fetch(`http://localhost:8080/reviews/${reviewId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`, 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: reviewId,
          book: { id: review.book.id },
          author: review.author,
          title: review.title,
          content: review.content,
          rating: review.rating,
          dateAdded: new Date().toISOString(),
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update review");
      }
      alert("Review updated successfully");
      router.push(`/book/${reviewId}`);
    } catch (err) {
      console.error(err);
      setError("Failed to update review");
    } finally {
      setLoading(false); 
    }
  };
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Edit Review</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={review.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Content</label>
          <textarea
            name="content"
            value={review.content}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            rows={5}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Rating</label>
          <select
            name="rating"
            value={review.rating}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          >
            <option value={0}>Select Rating</option>
            {[1, 2, 3, 4, 5].map((rating) => (
              <option key={rating} value={rating}>
                {rating} Star{rating > 1 && "s"}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => router.back()}
            className="mr-4 px-6 py-2 bg-gray-300 text-gray-800 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
