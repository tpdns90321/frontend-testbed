import Form from '../components/Form';

function Login() {
  return (
	<Form>
	  <div className="flex flex-row items-center">
	    <div className="flex flex-1 flex-col pr-4">
		  <input type="text" className="w-full" size={10} placeholder="ID" />
		  <input type="password" className="w-full" size={10} placeholder="PW" />
	    </div>
		<button className="success aspect-square">Login</button>
	  </div>
	  <div className="my-2 flex w-full justify-around">
	    <a className="p-1">회원가입</a>
	    <a className="p-1">ID/PW 분실</a>
		<div className="p-1 h-fit w-fit align-middle">
		  <input type="checkbox" id="autologin" />
		  <label htmlFor="autologin">자동로그인</label>
		</div>
   	  </div>
	</Form>
  )
}

export default Login;
