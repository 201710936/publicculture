import styled from 'styled-components';

//jsx 컴포넌트 만들 때, PascalCase 나 SCREAMING_SNAkE_CASE 가 규칙
export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: auto;
  margin-right: 50px;
  margin-top: 10px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: low;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: white;
`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content : flex-start;
  font-family: 'NG','Malgun Gothic',Dotum,'돋움',AppleGothicNeoSD,'Apple SD 산돌고딕 Neo','굴림',arial,sans-serif;
  color: black;
  font-size: 60px;
  margin: 15px 5px;
  margin-left: 50px;
  cursor: pointer;
  text-shadow: 1px 1px 1px #000;
`;

export const HeaderBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  width: 80px;
  height: 50px;
  font-size: 17px;
  font-weight : 700;
  font-family: 'NG','Malgun Gothic',Dotum,'돋움',AppleGothicNeoSD,'Apple SD 산돌고딕 Neo','굴림',arial,sans-serif;
  margin-left: 2px;
  cursor: pointer;
`;

export const GenreBar = styled.div`
  display: flex;
  height: 55px;
  //width: 100%;
  padding: 10px 100px;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  box-shadow: 5px 5px 5px lightgray;
`;

export const GenreBtn = styled.button`
  font-size: 18px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  &:hover {
    border-bottom: 4px solid black;
  }
`;

export const SearchBarArea = styled.form`
  display: flex;
  justify-content: center;
  //position: relative;
  margin-bottom: 10px;
`;

export const SearchBar = styled.input`
  height: 40px;
  width: 400px;
  border: none;
  background: transparent;
  outline: none;
  color: black;
  caret-color: white;
  border-bottom: 2px solid black;
  font-size: 15px;
  margin: 24px 0 0 20px;
`;

export const Button = styled.button`
  background: transparent;
  color: white;
  right: 30px;
  font-size: 18px;
  border: none;
  cursor: pointer;
`;