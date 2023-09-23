const { Answer, Question } = require('../db');

const createAnswer = async (req, res) => {
    const { 
      questionname,
      answer
    } = req.body;
    const newAnswer = {
      answer
    }
    try {
      const question = await Question.findOne({ where: { name:questionname } })
      const createAnswer = await Answer.create(newAnswer)
      await createAnswer.setQuestion(question);
      return res.status(201).json({message: 'Answer creada exitosamente'});
    } catch (error) {
      return res.status(404).send({ error: error.message });
    }
};

const getAnswer = async (req, res) => {
    try {
      const answer = await Answer.findAll();
      
      if (!answer.length) {
        return res.status(200).json({message: 'No se encontraron Answers disponibles'});
      }
      return res.status(200).json(answer);
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
};
const editAnswer = async (req, res) => {
    try {
        const { id } = req.params;
        const {
          answer
        } = req.body
        const answerbd = await Answer.findByPk(id)
        const updatedAnswer = await Answer.update({ 
            answer
        }, {
          where: { id: id },
          returning: true,
        });
    
        if (updatedAnswer[0] === 0) {
          return res.status(404).json({ error: 'Answer no encontrado' });
        }
        return res.status(200).json({message: 'Answer actulizado correctamente'});
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  };


  
  module.exports = {
    createAnswer,
    getAnswer,
    editAnswer
  };
  