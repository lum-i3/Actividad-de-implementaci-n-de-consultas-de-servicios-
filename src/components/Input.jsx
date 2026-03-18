function Input({
  type = "text",
  placeholder = "",
  value = "",
  onChange
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="input"
    />
  );
}

export default Input;