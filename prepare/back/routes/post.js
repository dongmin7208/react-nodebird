const express = require("express");
const { Post, Image, User, Comment } = require("../models");

const { isLoggedIn } = require("./middlewares");
const router = express.Router();

//게시글 작성하는 라우터
router.post("/", isLoggedIn, async (req, res, next) => {
  //실제로는 POST /post
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User, //댓글 작성자!
              attributes: ["id", "nickname"],
            },
          ],
        },
        {
          model: User, //게시글 작성자
          attributes: ["id", "nickname"],
        },
        {
          model: User, //좋아요눌른사람
          as: "Likers",
          attributes: ["id"],
        },
      ],
    });
    res.status(201).json(post); //다시 프론트로 돌려줌
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//댓글작성하는 라우터
//주소부분에서 동적으로 바뀌는 부분을 파라미터 라고 부른다.
//router.post("/1/comment", async (req, res, next) => {
router.post("/:postId/comment", isLoggedIn, async (req, res, next) => {
  //실제로는 DELETE /post
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send("존재하지않는 게시글임니다.");
    }
    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id,
    });
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [
        {
          model: User,
          attributes: ["id", "nickname"],
        },
      ],
    });
    res.status(201).json(fullComment);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch("/:postId/like", isLoggedIn, async (req, res, next) => {
  // PATCH /post/1/like
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send("게시글이 존재하지 않습니다.");
    }
    await post.addLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:postId/like", isLoggedIn, async (req, res, next) => {
  // DELETE /post/1/like
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send("게시글이 존재하지 않습니다.");
    }
    await post.removeLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:postId", isLoggedIn, async (req, res, next) => {
  // DELETE /post/10
  try {
    await Post.destroy({
      where: {
        id: req.params.postId,
        UserId: req.user.id,
      },
    });
    res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
