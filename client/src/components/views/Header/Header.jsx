import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import { searchPost } from "../../../_actions/post_action";
import { logout, auth } from "../../../_actions/user_action";
import {
  HeaderContainer,
  HeaderLogo,
  SearchBarArea,
  SearchBar,
  Button,
  MenuContainer,
  GenreBar,
  GenreBtn,
  HeaderBtn,
  SidebarButtonToggle,
  SidebarGenreBox,
} from "./HeaderElements";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [Login, setLogin] = useState(true);
  const [gumane, setGuname] = useState("");
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const onSidebarToggleButtonClicked = () => {
    setIsSidebarOpened(!isSidebarOpened);
  };

  const onLogoClicked = () => {
    navigate("/");
  };

  const onLoginbtnClicked = () => {
    navigate("/login");
  };

  const onRegiterClicked = () => {
    navigate("/register");
  };

  const onMypageClicked = () => {
    navigate("/mypage");
  };
  const logOut = () => {
    dispatch(logout()).then((res) => {
      if (res.payload.isAuth === false) {
        alert("이미 로그아웃 상태입니다.!");
      } else {
        alert("로그아웃 성공");
        navigate("/");
      }
    });
  };

  const CheckLogin = () => {
    dispatch(auth()).then((res) => {
      if (res.payload.isAuth === false) {
        setLogin(false);
      } else {
        setLogin(true);
      }
    });
  };

  const onGenreClicked = (e) => {
    e.preventDefault();
    let name = e.target.name;
    dispatch(searchPost(name)).then((res) => {
      if (res.payload.success) {
        console.log(res);
        navigate(`showevent/${name}`, { state: { infos: res.payload } });
      }
    });
  };

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onSearchClicked = (e) => {
    e.preventDefault();
    dispatch(searchPost(search)).then((res) => {
      if (res.payload.success) {
        console.log(res);
        navigate(`showevent/${search}`, { state: { infos: res.payload } });
      } else {
        return new Response({ error: "error!" });
      }
    });
  };

  return (
    <>
      {CheckLogin()}
      {isSidebarOpened && (
        <Sidebar
          isSidebarOpened={isSidebarOpened}
          onSidebarToggleButtonClicked={onSidebarToggleButtonClicked}
        />
      )}
      <HeaderContainer>
        <HeaderLogo type="button" onClick={onLogoClicked}>
          public culture
        </HeaderLogo>

        <SearchBarArea onSubmit={onSearchClicked}>
          <label htmlFor="search"></label>
          <SearchBar
            onChange={onChangeSearch}
            name="search"
            value={search}
            type="text"
            placeholder="검색어를 입력해주세요."
          ></SearchBar>
          <Button type="submit">
            <i className="fas fa-search"></i>
          </Button>
        </SearchBarArea>
        <MenuContainer>
          {Login ? (
            <>
              <HeaderBtn onClick={onMypageClicked}>My page</HeaderBtn>
              <HeaderBtn onClick={logOut}>Logout</HeaderBtn>
            </>
          ) : (
            <>
              <HeaderBtn onClick={onLoginbtnClicked}>Login</HeaderBtn>
              <HeaderBtn onClick={onRegiterClicked}>Register</HeaderBtn>
            </>
          )}
        </MenuContainer>
      </HeaderContainer>

      <SidebarGenreBox>
        <SidebarButtonToggle>
          <i
            style={{
              color: "black",
              cursor: "pointer",
              paddingLeft: "20px",
              paddingTop: "30px",
            }}
            class="fa-solid fa-bars fa-2x"
            onClick={onSidebarToggleButtonClicked}
          ></i>
        </SidebarButtonToggle>
        <GenreBar>
          <GenreBtn itemType="button" onClick={onGenreClicked} name="뮤지컬">
            뮤지컬/오페라
          </GenreBtn>
          <GenreBtn itemType="button" onClick={onGenreClicked} name="전시">
            전시/미술
          </GenreBtn>
          <GenreBtn itemType="button" onClick={onGenreClicked} name="연극">
            연극
          </GenreBtn>
          <GenreBtn itemType="button" onClick={onGenreClicked} name="콘서트">
            콘서트
          </GenreBtn>
          <GenreBtn itemType="button" onClick={onGenreClicked} name="클래식">
            클래식
          </GenreBtn>
          <GenreBtn itemType="button" onClick={onGenreClicked} name="무용">
            무용
          </GenreBtn>
        </GenreBar>
      </SidebarGenreBox>
    </>
  );
};

export default Header;
