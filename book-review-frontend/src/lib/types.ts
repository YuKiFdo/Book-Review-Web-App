export interface Book {
    id: string;
    title: string;
    subtitle?: string;
    author: string;
    coverImage: string;
    description: string;
    rating: number;
    reviewCount: number;
    reviews: Review[];
  }
  
  export interface Review {
    id: string;
    author: {
      name: string;
      location?: string;
      avatar?: string;
    };
    rating: number;
    title: string;
    content: string;
    createdAt: string;
  }