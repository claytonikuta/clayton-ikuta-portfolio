import { Category } from './category';

export class Blog {
  'id': number;
  'name': string;
  'slug': string;
  'excerpt': string;
  'body': string;
  'url': string | null;
  'published_date': string | null;
  'image1': string | null;
  'image2': string | null;
  'image3': string | null;
  'image4': string | null;
  'image5': string | null;
  'image6': string | null;
  'image7': string | null;
  'image8': string | null;
  'video': string | null;
  'thumb': string | null;
  'category_id': number | null;
  'created_at': string;
  'updated_at': string;
  'category': Category | null;
}
