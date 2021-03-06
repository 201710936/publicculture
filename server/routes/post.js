const express = require('express');
const {
  getRandomPost,
  getPostBySearch,
  getPostDetails,
  likePost,
} = require('../controllers/post');
const { auth } = require('../middlewares/auth');

const router = express.Router();

//모든 post
router.get('/posts', getRandomPost);
//검색하기
router.post('/searchPost', getPostBySearch);
//디테일페이지
router.get('/posts/:id', getPostDetails);
//좋아요 누르기
router.patch('/:id/likePost', likePost);

module.exports = router;
