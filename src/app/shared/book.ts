export interface Book {
  isbn: string;
  title: string;
  authors: string[];
  published?: Date;
  subtitle?: string;
  thumbnailUrl?: string;
  description?: string;
}
