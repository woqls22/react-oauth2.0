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
      <div className="title">authoriation Code {}</div>
    </>
  );
}
