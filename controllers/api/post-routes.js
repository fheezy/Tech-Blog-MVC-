const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");


router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "content", "title", "created_at"],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Post by ID
router.get("/:id", (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id,
          },
          attributes: ["title", "created_at", "id", "content"],
          include: [
            {
              model: User,
              attributes: ["username"],
            },
            {
              model: Comment,
              attributes: ["post_id", "comment_text", "user_id", "id", "created_at"],
              include: {
                model: User,
                attributes: ["username"],
              },
            },
          ],
        })
          .then((dbPostData) => {
            if (!dbPostData) {
              res.status(404).json({
                message: "This ID Post has not been found",
              });
              return;
            }
            res.json(dbPostData);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      });