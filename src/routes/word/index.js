const express =require('express')
const WordRouter = express.Router()

const Word = require('../../models/word')

WordRouter.route('/(:word)?').get( async(req,res) =>{
    let words = []
    const { word } = req.params
   

    if(word !== "undefined" &&  word !== undefined){
        console.log(word)
        words = await Word.find({r_word: word})//데이터베이스에서 쿼리로 단어를 검색
        
    }else{
        console.log(word)
        //데이터베이스에서 전체 단어 검색   
        words = await Word.find()
    }
    res.json({status: 200, words})
})

module.exports = WordRouter