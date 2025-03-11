export function Button(props) {
  console.log(props);

  return (
    <button
      style={{
        backgroundColor: "white",
        padding: "8px 12px",
        borderRadius: 4,
        border: "1px solid black",
        cursor: "pointer",

        ...props.style,

        /**
         * 
            backgroundColor: "red",
            color: "white",
            fontSize: 20,
         */
      }}
      onClick={props.onClick}
      disabled={props.disabled}
      className={props.className}
    >
      {props.children}
    </button>
  );
}
