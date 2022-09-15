import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { auth } from "../../../_actions/user_action";
import { updateUser, checkName } from "../../../_actions/user_action";

import {
  EditMypage_container,
  Myprofile_edit,
  Page_area_edit,
  Nickname_container_edit,
  NicknameC_btn,
  Nickname_edit,
  Line_edit,
  Genre_container_edit,
  Checkbox,
  CheckboxContainer,
  GENRE_BOX,

} from './MypageElements';


  useEffect(() => {
    dispatch(auth()).then((res) => {
      setUserData(res.payload);
    });
  }, [setUserData, dispatch]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onCheckName = async () => {
    dispatch(checkName({ name: Name })).then((res) => {
      if (res.payload.success) {
        alert("사용가능한 닉네임입니다.");
      } else {
        alert("이미 존재하는 닉네임입니다.");
      }
    });
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
    setGenre("");
    window.location.reload();
  };

  const onCheckElement = (checked, item) => {
    if (checked) {
      setGenre(item);
    } else if (!checked) {
      setGenre(Genre.filter((el) => el !== item));
    }
  };

  return (
    <>
      <EditMypage_container>
        <Myprofile_edit>내 정보 수정</Myprofile_edit>

        <Page_area_edit>
          <Nickname_container_edit>
            닉네임 변경
            <Line_edit></Line_edit>
            <Nickname_edit onChange={onChangeName}></Nickname_edit>
            <NicknameC_btn onClick={onCheckName}>confirm</NicknameC_btn>
          </Nickname_container_edit>

          <Genre_container_edit>
            선호 장르
            <Line_edit></Line_edit>
            <Checkbox>
              <CheckboxContainer>
                <GENRE_BOX
                  type="checkbox"
                  id="cb1"
                  value="뮤지컬/오페라"
                  name="뮤지컬/오페라"
                  onChange={(e) => {
                    onCheckElement(e.target.checked, e.target.value);
                  }}
                />
                뮤지컬/오페라
              </CheckboxContainer>
              <CheckboxContainer>
                <GENRE_BOX
                  type="checkbox"
                  id="cb2"
                  value="전시/미술"
                  name="전시/미술"
                  onChange={(e) => {
                    onCheckElement(e.target.checked, e.target.value);
                  }}
                />
                전시/미술
              </CheckboxContainer>
              <CheckboxContainer>
                <GENRE_BOX
                  type="checkbox"
                  id="cb3"
                  value="연극"
                  name="연극"
                  onChange={(e) => {
                    onCheckElement(e.target.checked, e.target.value);
                  }}
                />
                연극
              </CheckboxContainer>
              <CheckboxContainer>
                <GENRE_BOX
                  type="checkbox"
                  id="cb4"
                  value="콘서트"
                  name="콘서트"
                  onChange={(e) => {
                    onCheckElement(e.target.checked, e.target.value);
                  }}
                />
                콘서트
              </CheckboxContainer>
              <CheckboxContainer>
                <GENRE_BOX
                  type="checkbox"
                  id="cb5"
                  value="클래식"
                  name="클래식"
                  onChange={(e) => {
                    onCheckElement(e.target.checked, e.target.value);
                  }}
                />
                클래식
              </CheckboxContainer>
              <CheckboxContainer>
                <GENRE_BOX
                  type="checkbox"
                  id="cb6"
                  value="무용"
                  name="무용"
                  onChange={(e) => {
                    onCheckElement(e.target.checked, e.target.value);
                  }}
                />
                무용
              </CheckboxContainer>
            </Checkbox>
          </Genre_container_edit>
          <button
            style={{ height: "50px", width: "100px" }}
            onClick={onUpdateConfirm}
          >
            유저업데이트 해보셈
          </button>
        </Page_area_edit>
      </EditMypage_container>
    </>
  );
};

export default MypageEdit;
