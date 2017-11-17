const db = require("../config/db")

class Question{
  static CreateTable() {
    return new Promise(function(resolve){
      const sql = `CREATE TABLE questions (
        id INTEGER PRIMARY KEY,
        content TEXT
      )`

      db.run(sql, function(){
        resolve("questions table created")
      })

      insert(){
        const question = new Question("Where in the world is Carmen Sandiego?")
      }


    })
  }

  constructor(content){
    this.content = content
  }

}

module.exports = Question;
