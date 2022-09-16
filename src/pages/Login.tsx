import { useState, useCallback, ReactElement } from "react";
import Form from "../components/Form";

function Login(): ReactElement {
  const [isAutoLogin, setAutoLogin] = useState(false);
  const toggleAutoLogin = useCallback(
    () => setAutoLogin((current) => !current),
    []
  );

  return (
    <Form className="flex w-fit h-fit self-center m-auto">
      <div className="flex flex-row items-center">
        <div className="flex flex-1 flex-col pr-4">
          <input type="text" className="w-full" size={10} placeholder="ID" />
          <input
            type="password"
            className="w-full"
            size={10}
            placeholder="PW"
          />
        </div>
        <button className="success aspect-square">Login</button>
      </div>
      <div className="my-2 flex w-full justify-around">
        <a className="p-1">회원가입</a>
        <a className="p-1">ID/PW 분실</a>
        <div
          className="p-1 h-fit w-fit align-middle cursor-pointer"
          onClick={toggleAutoLogin}
        >
          <input type="checkbox" id="autologin" checked={isAutoLogin} />
          <a className="select-none">자동로그인</a>
        </div>
      </div>
    </Form>
  );
}

export default Login;
