import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { locationSearch, searchPost } from "../../../_actions/post_action";

const Sidebar_Container = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  z-index: 2;
  width: 100%;
  height: 100%;
  color: white;
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
`;

const Sidebar_open = keyframes`
  0% { transform: translateX(-250px); }
  100% { transform: translateX(0px); }
`;

const Sidebar_Main = styled.div`
  font-weight: bold;
  animation: ${Sidebar_open} 0.2s ease-in-out;
  width: 265px;
  height: 100%;
  background: rgb(0, 0, 0);
`;

const Sidebar_blank = styled.div`
  width: 100%;
  height: 100%;
`;

const Sidebar_Button_Container = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 50px;
  align-items: center;
  margin-right: 20px;
`;

const Genre_Title = styled.div`
  font-weight: bold;
  margin-left: 30px;
  font-size: 20px;
`;

const Genre_list = styled.ul`
  padding-left: 0px;
`;

const Genre_div = styled.div`
  padding-left: 30px;
  &:hover {
    background-color: rgb(50, 50, 50);
  }
`;

const Genre_item = styled.li`
  margin: 5px 20px;
  list-style: circle;
  cursor: pointer;
`;

const Genre_link = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Sidebar = ({ onSidebarToggleButtonClicked }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [gumane, setGuname] = useState("");
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");

  // const onLocationClicked = (e) => {
  //   e.preventDefault();
  //   let name = e.target.name;
  //   dispatch(searchPost(name)).then((res) => {
  //     if (res.payload.success) {
  //       console.log(res);
  //       navigate(`showevent/${name}`, { state: { infos: res.payload } });
  //     } else {
  //       return new Response({ error: "error!" });
  //     }
  //   });
  // };

  // const onSearchClicked = (e) => {
  //   e.preventDefault();
  //   dispatch(searchPost(search)).then((res) => {
  //     if (res.payload.success) {
  //       console.log(res);
  //       navigate(`showevent/${search}`, { state: { infos: res.payload } });
  //     } else {
  //       return new Response({ error: "error!" });
  //     }
  //   });
  // };

  // const onGenreClicked = (e) => {
  //   e.preventDefault();
  //   let name = e.target.name;
  //   dispatch(searchPost(name)).then((res) => {
  //     if (res.payload.success) {
  //       console.log(res);
  //       navigate(`showevent/${name}`, { state: { infos: res.payload } });
  //     }
  //   });
  // };

  return (
    <Sidebar_Container>
      <Sidebar_Main>
        <Sidebar_Button_Container>
          <i
            className="fas fa-times"
            style={{ cursor: "pointer" }}
            onClick={onSidebarToggleButtonClicked}
          ></i>
        </Sidebar_Button_Container>
        <Genre_Title>지역별</Genre_Title>
        <Genre_list>
          <Genre_div>
            <Genre_link to="/genre/electronic">
              <Genre_item
                // onClick={onLocationClicked}
                name="강남구"
                value={name}
              >
                강남구
              </Genre_item>
            </Genre_link>
          </Genre_div>
          <Genre_div>
            <Genre_link to="/showevent/disco">
              <Genre_item onClick={onSidebarToggleButtonClicked}>
                강동구
              </Genre_item>
            </Genre_link>
          </Genre_div>
          <Genre_div>
            <Genre_link to="/genre/jazz">
              <Genre_item onClick={onSidebarToggleButtonClicked}>
                강북구
              </Genre_item>
            </Genre_link>
          </Genre_div>
          <Genre_div>
            <Genre_link to="/genre/electronic">
              <Genre_item onClick={onSidebarToggleButtonClicked}>
                강서구
              </Genre_item>
            </Genre_link>
          </Genre_div>
          <Genre_div>
            <Genre_link to="/genre/pop">
              <Genre_item onClick={onSidebarToggleButtonClicked}>
                관악구
              </Genre_item>
            </Genre_link>
          </Genre_div>
          <Genre_div>
            <Genre_link to="/genre/rock">
              <Genre_item onClick={onSidebarToggleButtonClicked}>
                광천구
              </Genre_item>
            </Genre_link>
          </Genre_div>
          <Genre_div>
            <Genre_link to="/genre/hip-hop">
              <Genre_item onClick={onSidebarToggleButtonClicked}>
                구로구
              </Genre_item>
            </Genre_link>
          </Genre_div>
        </Genre_list>
      </Sidebar_Main>
      <Sidebar_blank onClick={onSidebarToggleButtonClicked} />
    </Sidebar_Container>
  );
};

export default Sidebar;
