const { Router } = require("express");
const router = Router();
const {createQuestion, getQuestion} = require("../controllers/question");
const { createAnswer, getAnswer, editAnswer } = require("../controllers/answer");

router.post("/question",createQuestion)
router.get("/question",getQuestion)

router.post("/answer",createAnswer)
router.get("/answer",getAnswer)
router.patch("/answer/:id",editAnswer)

module.exports = router;
