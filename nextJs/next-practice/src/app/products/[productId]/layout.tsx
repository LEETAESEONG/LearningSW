export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Features products</h2>
      <p>Product Details Layout</p>
      {/* Carousel here */}
    </>
  );
}
