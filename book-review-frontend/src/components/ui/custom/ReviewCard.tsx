import Image from "next/image";
import StarRating from "./StarRating";
interface ReviewProps {
  author: string;
  location?: string;
  rating: number;
  title: string;
  content: string;
  timeAgo: string;
}

export default function ReviewCard({
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
          <StarRating rating={rating} classx="flex-1" />
          <span className="text-gray-600 ">{timeAgo}</span>
        </div>
        <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
