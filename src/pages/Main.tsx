import { ReactElement } from "react";
import { Link } from "react-router-dom";

function Main(): ReactElement {
  return (
    <div className="flex flex-col p-2">
      <Link to="/button">Button Example</Link>
      <Link to="/inputtext">InputText Example</Link>
      <Link to="/checkbox">CheckBox Example</Link>
      <Link to="/login">Login Form Example</Link>
    </div>
  );
}

export default Main;
