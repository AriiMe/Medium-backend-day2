/** @format */

const express = require("express");
const ArticleSchema = require("./schema");
const reviewsSchema = require("../reviews/schema");

const articleRouter = express.Router();

articleRouter.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const newArticle = new ArticleSchema(req.body);
    const { _id } = await newArticle.save();
    res.status(201).send(_id);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

articleRouter.get("/", async (req, res) => {
  try {
    const allArticles = await ArticleSchema.find();
    res.send(allArticles);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

articleRouter.get("/:id", async (req, res) => {
  try {
    const article = await ArticleSchema.findById(req.params.id);
    res.send(article);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

articleRouter.put("/:id", async (req, res) => {
  try {
    const article = await ArticleSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { runValidators: true, new: true }
    );
    if (article) {
      res.send(article);
    } else {
      res.status(404).send("article doesn't exist");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

articleRouter.delete("/:id", async (req, res) => {
  try {
    const article = await ArticleSchema.findByIdAndDelete(req.params.id);
    if (article) {
      res.send("ARTICLE DELETED");
    } else {
      res.status(404).send("404 not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

articleRouter.post("/:id", async (req, res) => {
  try {
    const article = await ArticleSchema.find.findByIdAndUpdate(
      req.params.id,
      { $push: { reviews: req.body } },
      { runValidators: true, new: true }
    );

    res.status(201).send(article);
  } catch (error) {
    console.log(error);
  }
});

module.exports = articleRouter;
