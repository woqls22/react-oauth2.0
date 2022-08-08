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
export default function MedicalLink() {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [issuer, setIssuer] = useState("");
  const issueToken = () => {
    SpringAxios.post(
      "/oauth2/token",
      JSON.stringify({
        authorization_code: getAuthCode(),
        redirectUri: "http://localhost:3000/medical_link/login",
      })
    ).then((res) => {
      setAccessToken(res.data.accessToken.substring(0, 30));
      setRefreshToken(res.data.refreshToken);
      setIssuer(res.data.issuer);
      console.log(res.data);
    });
  };

  const getAuthCode = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("code");
  };
  const getState = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("state");
  };
  return (
    <>
      <div className="two-cell-row">
        <div>authoriation Code</div>
        <div>{getAuthCode()}</div>
      </div>
      <div className="two-cell-row">
        <div>state</div>
        <div>{getState()}</div>
      </div>
      <div className="login_btn">
        <div style={{ marginTop: 60 }}></div>
        <BlackButton fullWidth={true} onClick={issueToken}>
          토큰 발급하기
        </BlackButton>
      </div>
      {accessToken.length > 0 ? (
        <>
          <div className="two-cell-row">
            <div>AccessToken</div>
            <div title={accessToken}>{accessToken}...</div>
          </div>
          <div className="two-cell-row">
            <div>RefreshToken</div>
            <div>{refreshToken}</div>
          </div>
          <div className="two-cell-row">
            <div>Issuer</div>
            <div>{issuer}</div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
