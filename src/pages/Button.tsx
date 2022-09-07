
function Button() {
  return (
    <>
      <button>button</button>
      <button disabled>test</button>
      <button className="success">hello</button>
      <button className="error">world</button>
      <button className="error" disabled>new</button>
      <button className="success" disabled>old</button>
    </>
  );
}

export default Button;

