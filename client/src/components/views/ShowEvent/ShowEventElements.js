import styled from "styled-components";

export const PostingContainer = styled.div`
  margin: 4% 5%;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PostingInfo = styled.div`
  width: 500px;
  //height: 600px;
  display: flex;
  flex-direction: column;
  padding: 50px;
  //background-color: yellow;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
`;

export const ImgContainer = styled.img`
  width: 300px;
  height: 400px;
  object-fit: fill;
  margin: 10px;
`;

//지역 버튼
export const LocationContainer = styled.div`
  width: 100%;
  height: 300px;
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Location_btns = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 10px 10px 10px 10px;
  background-color: transparent;
  border: none;
  width: 200px;
  height: 50px;
  &:hover {
    font-weight: 600;
  }
`;
