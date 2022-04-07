// const superbowlWin = [
//     {year: " ", result: " ",}
// ]

//loops through arry to find the object with result is "W" (a win)
//loops through objects, to find the first object whose condition returnd true
//based on a callback 
function superbowlWin (record,finder){
    let result = "W"
    for(let item of record){
        if(finder(item) === true){
        result = item
        break
        }
        return result
    }
    }

    //COME BACK TO 
    
    //will find a given result
    function theResult(record){
        return record.result === "W"
    }superbowlWin(record,theResult)
    
    //will find the first win
    function firstWin(record){
        return record.result ["W"];
        return record.year = ["1997"]
    }superbowlWin(record, firstWin)


    //FOUND BELOW/DON'T REALLY UNDERSTAND/DOESN'T CONFIRM TO INSTRUCTIONS IN MODULE -4/7
    // superbowlWin = (record) => {
//     const result = record.find( record => record.result === "W" );
//     return !!result ? result.year : undefined;
//   }