export const getCanonicalUrl = () => {
  return process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000'
    : '';
};

export const getImageUrl = (imageUrl: string) => {
  return `${process.env.SUPABASE_URL}/storage/v1/object/public/storage/${imageUrl}`;
};