import {
  Box,
  Input,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import { BlackButton } from "../Components/BlackButton";
import "../styles/login.css";
import { SpringAxios } from "../Utils/AxiosUtil";
export default function Login() {
  const [signUpState, setSignupState] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {
    const params = new URLSearchParams(window.location.search);
    let redirectUri = params.get("redirectUri");

    SpringAxios.post(
      "/oauth2/signin",
      JSON.stringify({
        email: email,
        password: password,
      })
    );
  };
  return (
    <>
      <div className="title">
        안녕하세요. OAuth2.0에 대한 이해를 목적으로 만든 OAuth Provider입니다
      </div>

      <div className="email_input">
        * 이메일 로그인
        <TextField
          fullWidth={true}
          variant="outlined"
          placeholder="이메일 주소"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="password_input">
        <TextField
          fullWidth={true}
          variant="outlined"
          placeholder="비밀번호"
          type={"password"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="login_btn">
        <BlackButton fullWidth={true} onClick={signIn}>
          로그인하기
        </BlackButton>
      </div>
    </>
  );
}
