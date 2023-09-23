const { Question } = require('../db');
const data = require('../../../encuesta.json')

const createQuestion = async (req, res) => {
    try {
      for (const ele of data.items) {
        if(ele.type !== 'submit'){
          let newdata = {}
          if(ele.options){
            const options = ele.options.map(el => el.label)
            newdata = {
              type:ele.type,
              label:ele.label,
              name:ele.name,
              required:ele.required,
              options: options
            }
            await Question.create(newdata);
          }
          else{
            await Question.create(ele);
          }
        }
      }
      return res.status(201).json({message: 'Question creada exitosamente'});
    } catch (error) {
      return res.status(404).send({ error: error.message });
    }
};

const getQuestion = async (req, res) => {
    try {
      const question = await Question.findAll();
      if (!question.length) {
        return res.status(200).json({message: 'No se encontraron questions disponibles'});
      }
      return res.status(200).json(question);
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
};
  
  module.exports = {
    createQuestion,
    getQuestion
  };
  