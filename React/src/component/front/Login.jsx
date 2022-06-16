import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { first, second } from "../../app/page";
import { loginRequestAction, login_reducers, LOG_IN_REQUEST } from "../../app/users";
const Login = () => {
  const dispatch = useDispatch();
//   const user = {
//     id:"jj"
//   , password:"ll"
// } //보내고 싶은 데이터
const [user, setUser] = useState({
  userId:"",
  password:""
})
const onChangeHandler = (e) => {
  const {name,value} =e.target
  
  // const value = e.target.value;
  // const name = e.target.name;
   console.log(name,value);
   console.log({...user})
  setUser({...user,[name]:value})
}

const loginDispatch = () =>{
      dispatch(login_reducers(user))   
  }
  return (
    <div className="container w-25">
      <form className="align-middle" method="get" action="/main">
        <div className="row form-floating mb-3">
          <input className="form-control" type="text" name="userId" placeholder="id" onChange={(e) => onChangeHandler(e)}/>
          <label htmlFor="id">ID </label>
        </div>
        <div className="row form-floating mb-3">
          <input className="form-control" type="password" name="password" placeholder="pwd" onChange={(e) => onChangeHandler(e)} />
          <label htmlFor="password">Password </label>
        </div>
        <div className="row">
          <button className="btn btn-outline-primary" type="button" onClick={() => loginDispatch()}>
            로그인
          </button>
          {/* <button className="btn btn-outline-primary" type="button" onClick={() => dispatch({type:LOG_IN_REQUEST})}>
            로그인
          </button> */}
          <div className="form-text">
            아이디가 없으신가요?
            <button className="btn btn-sm btn-link" type="button" onClick={() => dispatch(second())}>
              회원가입
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
