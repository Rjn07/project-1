import express from 'express'
const app = express()



  app.get('/api/joke', function (req, res) 
    {const joke =[
      {
        "question": "Why don't scientists trust atoms?",
        "answer": "Because they make up everything!"
      },
      {
        "question": "What do you call a fish wearing a bowtie?",
        "answer": "Sophisticated."
      },
      {
        "question": "Why don't skeletons fight each other?",
        "answer": "They don't have the guts."
      },
      {
        "question": "Why did the scarecrow win an award?",
        "answer": "Because he was outstanding in his field."
      },
      {
        "question": "Why don't oysters donate to charity?",
        "answer": "Because they're shellfish."
      }
    
    ]
      res.send(joke)
  })

app.listen(3000)