import { Star } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import Image from "next/image";

interface BookCardProps {
  id: string;
  title: string;
  rating: number;
  coverImage: string;
}

export default function BookCard({ id, title, rating, coverImage }: BookCardProps) {
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
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4"
                fill={i < rating ? "currentColor" : "none"}
                strokeWidth={1.5}
              />
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}