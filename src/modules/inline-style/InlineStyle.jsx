export function InlineStyle() {
  const bgc = "green";

  const style = {
    color: "blue",
    fontSize: 40, // 40px
    backgroundColor: bgc,
  };

  return (
    <>
      <h1
        style={{
          color: "blue",
          fontSize: 40, // 40px
          backgroundColor: bgc,
        }}
      >
        Inline Style
      </h1>
    </>
  );
}
