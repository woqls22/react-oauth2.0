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
export default function Home() {
  const [signUpState, setSignupState] = useState("");
  const signUp = () => {
    SpringAxios.post("/oauth2/initialize").then((res) => {
      if (res.status == 200) {
        setSignupState(
          `http://localhost:8080/api/v1/oauth2/authorize?client_id=${res.data.clientId}&scope=${res.data.scope}&redirect_uri=${res.data.redirectUri}&state=${res.data.state}`
        );
        console.log(res.data);
      } else {
        setSignupState("등록 실패");
      }
    });
  };
  return (
    <>
      <div className="title">
        안녕하세요. OAuth2.0에 대한 이해를 목적으로 만든 OAuth Provider입니다
      </div>

      <div className="signup_title"> Mock Account</div>
      <div className="two-cell-row">
        <div>email</div>
        <div>jaebeen_lee@hyundai.com</div>
      </div>
      <div className="two-cell-row">
        <div>password</div>
        <div>Pa55w0rd</div>
      </div>
      <div className="two-cell-row">
        <div>이름</div>
        <div>이재빈</div>
      </div>
      <div className="two-cell-row">
        <div>성별</div>
        <div>남자</div>
      </div>
      <div className="two-cell-row">
        <div>휴대폰번호</div>
        <div>010-1234-5678</div>
      </div>
      <div className="signup_title"> Mock Client</div>
      <div className="two-cell-row">
        <div>앱 이름</div>
        <div>medical_link</div>
      </div>
      <div className="two-cell-row">
        <div>redirect Uri</div>
        <div>http://localhost:3000/medical_link/login/callback</div>
      </div>
      <div className="two-cell-row">
        <div>grant type</div>
        <div>authorization_code flow</div>
      </div>
      <div className="two-cell-row">
        <div>scope</div>
        <div>email+profile+open_id+name</div>
      </div>
      <div className="signup_btn">
        <BlackButton fullWidth={true} onClick={signUp}>
          초기 설정 진행
        </BlackButton>
      </div>
      {signUpState.length > 10 ? (
        <>
          <div>
            <a href={signUpState}>로그인페이지 이동</a>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
