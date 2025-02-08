export const customLoader = ({ src }: { src: string }) => {
  const tempPrefix = process.env.NODE_ENV === 'development' ? '' : '/wp-content/uploads/next'
  // Ensure src starts with a slash for public folder images
  return `${src.startsWith('/') ? tempPrefix : '/'}${src}`;
};

