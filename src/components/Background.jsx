function Background({ top = "10rem", left = "30%", right = "", bottom }) {
  const style = {
    width: "800px",
    height: "400px",
    left: left,
    right: right,
    bottom: bottom,
    top: top,
    position: "absolute",
    opacity: "1",
    zIndex: "2",
  };
  return (
    <>
      <div className="bghero" style={style}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 50,10 
           A 40,40 0 0 0 50,90 
           L 190,90 
           L 190,10 
           Z"
            fill="#5368DF"
          />
        </svg>
      </div>
    </>
  );
}

export default Background;
