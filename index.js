


  function superbowlWin(record){
      let result=record.find
      (record=>record.result==="W")
      return !!result?result.year:undefined
    }
//I don't get it but it works...