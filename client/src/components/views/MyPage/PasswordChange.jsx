import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { auth } from "../../../_actions/user_action";
import { updateUser, checkName } from "../../../_actions/user_action";

import {
  EditMypage_container,
  Password_edit,
  PasswordContainer,
  PasswordCheck,
  PasswordCheckBtn,
  Line_edit,
} from "./MypageElements";

const PasswordChange = () => {
  const passwordFlag = false;
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordConfirm, setPasswordConfirm] = useState("");
  const [Genre, setGenre] = useState("");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    dispatch(auth()).then((res) => {
      setUserData(res.payload);
    });
  }, [setUserData, dispatch]);

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };
  const onCheckPassword = (e) => {
    if (Password === "") {
      alert("변경할 비밀번호를 입력하세요.");
    } else {
      Password === PasswordConfirm
        ? (passwordFlag = true && alert("비밀번호가 일치합니다."))
        : alert("비밀번호가 일치하지 않습니다.");
    }
  };

  const onUpdateConfirm = () => {
    let body = {
      name: Name,
      password: Password,
      genre: Genre,
    };
    dispatch(updateUser(body)).then((res) => {
      if (res.payload.success) {
        console.log(res.payload);
      } else {
        console.log(res.payload);
      }
    });

    setName("");
    setPassword("");
    setPasswordConfirm("");
    setGenre("");
    window.location.reload();
  };

  return (
    <>
      <EditMypage_container>
        <Password_edit>비밀번호 변경</Password_edit>
        <PasswordContainer>
          비밀번호 변경
          <Line_edit></Line_edit>
          <PasswordCheck onChange={onChangePassword}></PasswordCheck>
        </PasswordContainer>
        <PasswordContainer>
          비밀번호 변경 확인
          <Line_edit></Line_edit>
          <PasswordCheck onChange={onChangePasswordConfirm}></PasswordCheck>
          <PasswordCheckBtn onClick={onCheckPassword}>confirm</PasswordCheckBtn>
        </PasswordContainer>
        <button
          style={{ height: "50px", width: "100px" }}
          onClick={onUpdateConfirm}
        >
          유저업데이트 해보셈
        </button>
      </EditMypage_container>
    </>
  );
};

export default PasswordChange;
