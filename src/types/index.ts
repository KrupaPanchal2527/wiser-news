export interface TArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

// RESPONSES
export interface TEverythingResponse {
  status: string;
  totalResults: number;
  articles: TArticle[];
}
