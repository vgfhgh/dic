const express =require('express')
const WordRouter = express.Router()

const word = require('../../models/word')

WordRouter.route('/(:word)?').get( (req,res) =>{
    let words = []
    const { word } = req.params
   

    if(word !== "undefined" &&  word !== undefined){
        console.log(word)
        //데이터베이스에서 쿼리로 단어를 검색
        words = [
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},

            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},

            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},

            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
            {name: "syleemomo", description: "your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice! your name is nice!"},
        ]
        
    }else{
        console.log(word)
        words=["no query"]
        //데이터베이스에서 전체 단어 검색       
    }
    res.json({status: 200, words})
})

module.exports = WordRouter