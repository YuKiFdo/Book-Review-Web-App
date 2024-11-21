import { Star } from "lucide-react";

interface StarProps {
  rating: number;
  size?: number;
  classx?: string;
}

export default function StarRating({ rating, size = 5, classx = "" }: StarProps) {
  return (
    <div className={`flex ${classx} gap-1`}>
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

  