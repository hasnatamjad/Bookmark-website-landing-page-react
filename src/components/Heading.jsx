function Heading({ children = "write heading", className }) {
  return (
    <>
      <h1 className={`mb-6 text-4xl font-semibold text-center ${className}`}>
        {children}
      </h1>
    </>
  );
}

export default Heading;
