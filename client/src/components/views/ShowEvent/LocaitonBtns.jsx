import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import EventPage from "../EventPage/EventPage";
import axios from "axios";
import { searchPost } from "../../../_actions/post_action";
import { useDispatch } from "react-redux";

import { LocationContainer, Location_btns } from "./ShowEventElements";

const LocationBtns = () => {
  //navigate 로 넘긴 데이터를 useLocation 으로 받는다.
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const infos = location.state.infos;

  const onLocationCliked = (e) => {
    //e.preventDefault();
    let guname = e.target.guname;
    dispatch(searchPost(guname)).then((res) => {
      if (res.payload.success) {
        console.log(res.payload.posts[0].guname);
        navigate(`${guname}`, { state: { infos: res.payload } });
      }
    });
  };

  return (
    <div>
      <LocationContainer>
        <Location_btns>강남구</Location_btns>
        <Location_btns>강동구</Location_btns>
        <Location_btns>강북구</Location_btns>
        <Location_btns>강서구</Location_btns>
        <Location_btns>관악구</Location_btns>
        <Location_btns>광진구</Location_btns>
        <Location_btns>구로구</Location_btns>
        <Location_btns>금천구</Location_btns>
        <Location_btns>노원구</Location_btns>
        <Location_btns>도봉구</Location_btns>
        <Location_btns>동대문구</Location_btns>
        <Location_btns>동작구</Location_btns>
        <Location_btns>마포구</Location_btns>
        <Location_btns>서대문구</Location_btns>
        <Location_btns>서초구</Location_btns>
        <Location_btns>성동구</Location_btns>
        <Location_btns>성북구</Location_btns>
        <Location_btns>송파구</Location_btns>
        <Location_btns>양천구</Location_btns>
        <Location_btns>영등포구</Location_btns>
        <Location_btns>용산구</Location_btns>
        <Location_btns>은평구</Location_btns>
        <Location_btns>종로구</Location_btns>
        <Location_btns onClick={onLocationCliked} name="중구">
          중구
        </Location_btns>
        <Location_btns>중랑구</Location_btns>
      </LocationContainer>
    </div>
  );
};

export default LocationBtns;
