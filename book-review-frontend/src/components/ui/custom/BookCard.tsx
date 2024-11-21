import Link from "next/link";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
import StarRating from "./StarRating";

interface BookCardProps {
  id: string;
  title: string;
  rating: number;
  coverImage: string;
  totalRating?: number;
}

export default function BookCard({ id, title, rating, coverImage, totalRating }: BookCardProps) {
  return (
    <Link href={`/book/${id}`}>
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
            <span className="text-black font-semibold">{rating}.0</span>
            <span className="text-gray-600" >({totalRating})</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}