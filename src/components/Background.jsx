function Background({ top = "20rem", left, right = "1%", bottom }) {
  const style = {
    // width: "4000px",
    // height: "300px",
    left: left,
    right: right,
    bottom: bottom,
    top: top,
    position: "absolute",
    // borderTopLeftRadius: "9999px",
    // borderBottomLeftRadius: "9999px",
    // backgroundColor: "hsl(231, 69%, 60%)",
    opacity: "1",
    zIndex: "2",
  };
  return (
    <>
      <div className="bghero" style={style}>
        <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
          <path d="M 50 50 A 50 50 0 1 1 50 0 L 50 50 Z" fill="#4CAF50" />

          <rect x="50" y="25" width="100" height="50" fill="#2196F3" />
        </svg>
      </div>
    </>
  );
}

export default Background;
