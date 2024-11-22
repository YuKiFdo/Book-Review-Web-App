'use client';
import React, { useState } from 'react';
import { Star } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function AddReviewForm() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const router = useRouter();

  const bookData = JSON.parse(sessionStorage.getItem("bookData") || "{}");
  const username = localStorage.getItem('username');

  const bookId = bookData.id;;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!rating || !title || !description) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          book: { id: bookId },
          author: username,
          title: title,
          content: description,
          rating: rating,
          dateAdded: new Date().toISOString(),
      
        }),
      });

      if (response.ok) {
        setSuccess('Review added successfully!');
        setRating(0);
        setTitle('');
        setDescription('');
        setTimeout(() => {
          setSuccess('');
        }, 2000);
        router.back();
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to add review.');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred. Please try again.');
    }
  };

  const renderStars = (): JSX.Element[] => {
      const stars: JSX.Element[] = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <Star
            key={i}
            className={`w-6 h-6 cursor-pointer ${
                i <= (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-200'
            }`}
            fill="currentColor"
            onMouseEnter={() => setHoverRating(i)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => setRating(i)}
            />
        );
    }
    return stars;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Add a Review</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating
            </label>
            <div className="flex">{renderStars()}</div>
          </div>
          
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Review Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter review title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Review Description
            </label>
            <textarea
              id="description"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your review"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}
