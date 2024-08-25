function Paragraph({ children = "write paragraph", className }) {
  return (
    <>
      <p
        className={`max-w-md mx-auto text-center text-grayishBlue ${className}`}
      >
        {children}
      </p>
    </>
  );
}

export default Paragraph;
