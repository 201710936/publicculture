import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostDetails } from '../../../_actions/post_action';
import Comment from '../Comment/Comment';
import Auth from '../../../hoc/auth'

//행사 정보
const Event_title = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 45px;
  font-weight: 700;
  margin-bottom : 10px;
  //background-color: yellow;
`;

const Event_info_container = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 30px;
  font-weight: 400;
  //background-color: green;
  width: 50vw;
`;

const Photo_container = styled.img`
  width: 300px;
  height: 400px;
  margin: 25px 20px 20px 0;
  object-fit: fill;
`;

const Event_info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Event_info_content = styled.div`
  margin: 15px 0;
  font-size: 22px;
  font-weight: 400;
  //background-color: yellow;
`;

//좋아요
const Like_container = styled.div`
  display:flex;
  flex-direction: column; 
  align-items: center;
  margin: 20px;
  font-size: 28px; 
`;

function PostPage() {
  let params = useParams();
  const dispatch = useDispatch();
  //const [post, setPost] = useState([]);
  const [title, setTitle] = useState();
  const [main_img, setImg] = useState();
  const [place, setPlace] = useState();
  const [date, setDate] = useState();
  const [use_trgt, setTarget] = useState();
  const [use_fee, setFee] =  useState();

  
  useEffect(() => {
    dispatch(getPostDetails(params.postId)).then((res) => {
      if (res.payload.post) {
        console.log(res.payload.post);
        setTitle(res.payload.post.title);
        setImg(res.payload.post.main_img);
        setPlace(res.payload.post.place);
        setDate(res.payload.post.date);
        setTarget(res.payload.post.use_trgt);
        setFee(res.payload.post.use_fee);

        //console.log(params.postId);
      } else {
        console.log('error!!!!!!!!!!!!!!');
      }
    });
  }, [dispatch, params.postId]);

  return (
    <div
      style={{
        display: 'flex',
        //justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Noto Sans KR',
        flexDirection: 'column',
        margin: '60px',
      }}
    >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Event_title>{title}</Event_title>
          <Event_info_container>
            <Photo_container src={main_img} alt='images'></Photo_container>
            <Event_info>
              <Event_info_content>장소: {place}</Event_info_content>
              <Event_info_content>일시: {date}</Event_info_content>
              <Event_info_content>관람연령: {use_trgt}</Event_info_content>
              <Event_info_content>요금: {use_fee}</Event_info_content>
            </Event_info>
          </Event_info_container>
        </div>
      <Like_container>
        💗
        <div>좋아요</div>
     </Like_container>
     <Comment props={params.postId}/>
    </div>
  );  
}

export default Auth(PostPage,null);
