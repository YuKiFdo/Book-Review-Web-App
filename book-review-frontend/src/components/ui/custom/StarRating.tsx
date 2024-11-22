import { Star, StarHalf } from "lucide-react";

interface StarProps {
  rating: number;
  size?: number;
  classx?: string;
}

export default function StarRating({ rating, size = 5, classx = "" }: StarProps) {
  console.log(rating)
  const fullStars = Math.floor(rating); // Get the integer part (e.g., 4 for 4.1)
  const hasHalfStar = rating % 1 >= 0.5; // Check if the decimal part is 0.5 or more

  return (
    <div className={`flex ${classx} gap-1`}>
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          // Full star
          return (
            <Star
              key={i}
              className={`w-${size} h-${size} text-yellow-400`}
              fill="currentColor"
            />
          );
        }

        if (i === fullStars && hasHalfStar) {
          // Half star
          return (
            <StarHalf
              key={i}
              className={`w-${size} h-${size} text-yellow-400`}
              fill="currentColor"
            />
          );
        }

        // Empty star
        return (
          <Star
            key={i}
            className={`w-${size} h-${size} text-gray-200`}
            fill="currentColor"
          />
        );
      })}
    </div>
  );
}
