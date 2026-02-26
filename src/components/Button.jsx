const StylesButtonPrimary = {
  backgroundColor: "#f069f3",
  border: "none",
  borderRadius: "5px",
  widthMinimum: "10px",
  height: "30px",
  margin: "10px",
  color: "white",
}

const StylesButtonSecondary = {
  backgroundColor: "#e9e7e9",
  border: "none",
  borderRadius: "5px",
  widthMinimum: "10px",
  height: "30px",
  margin: "10px",
  color: "rgb(69, 69, 69)",
}


function Button({
  type = "secondary", 
  text = "NO TEXT DEFINED", 
  action = () => alert("NO ACTION DEFINED")}
) {
  
  return (
    <button
      /*className={
        props.type ===
        "primary" ? "button-primary" : "button-secondary"
      }*/
        style={
          type === "primary" ?
           StylesButtonPrimary :
           {...StylesButtonSecondary,
            backgroundColor: "#d8d6d8",
            cursor: "pointer",
           }
        }

      onClick={action}
    >
      {text}
    </button>
  );
}


export default Button;
