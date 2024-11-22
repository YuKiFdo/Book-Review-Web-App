import Link from "next/link";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
import StarRating from "./StarRating";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  rating: number;
  coverImage: string;
  description: string;
  totalReviews?: string;
}

export default function BookCard({ id, title, author, rating, coverImage, description, totalReviews }: BookCardProps) {
  rating = Number(rating);
  const handleCardClick = () => {
    const bookData = {
      id,
      title,
      author,
      rating,
      coverImage,
      description,
      totalReviews,
    };
    sessionStorage.setItem("bookData", JSON.stringify(bookData)); 
  };
  return (
    <Link href={`/book/${id}`} onClick={handleCardClick}>
      <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
        <div className="p-4">
          <div className="aspect-[2/3] relative mb-4">
            <Image
                src={coverImage}
                alt={`${title} cover`}
                className="w-full h-full object-cover rounded-md"
                width={150}
                height={200}
            />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
            {title}
          </h3>
          <div className="flex text-yellow-400 gap-3">
            <StarRating rating={rating} size={5} />
            <span className="text-black font-semibold">{rating}</span>
            <span className="text-gray-600" >({totalReviews})</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}