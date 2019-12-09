const read=require("./jsonRead");
const getMenu=require("./MainMenu");

function writeData(fileName,userID,fromPlace,ToPlace,date,adultNumber,childNumber){
    const fs = require('fs');
    fs.exists(fileName, function(exists) {

        if (exists) {    
            console.log("yes file exists");
            var jsonFileObject  =read.readData(fileName);
            jsonFileObject.flightbookingDetails.push({userid:userID,from:fromPlace,to:ToPlace,departureDate:date,adult:adultNumber,child:childNumber});
            let jsonFileString = JSON.stringify(jsonFileObject);
            fs.writeFile (fileName, jsonFileString, function(err) {
                if (err) throw err;
                console.log('data enterd into the existing file');
                jsonFileObject  =read.readData(fileName);
                console.log(jsonFileObject);
              

                }
            );     
            
        }
        else{
            console.log("file not exists");
            let jsonFileObject={"flightbookingDetails":[]};
           
            jsonFileObject.flightbookingDetails.push({userid:userID,from:fromPlace,to:ToPlace,departureDate:date,adult:adultNumber,child:childNumber});
            let jsonFileString = JSON.stringify(jsonFileObject);                  
                fs.writeFile (fileName, jsonFileString, function(err) {
                    if (err) throw err;
                    console.log('data entered into the new file');
                    console.log(read.readData(fileName));
                    }
                );
        }
    });                 
        
}
module.exports= {
    writeData
     }