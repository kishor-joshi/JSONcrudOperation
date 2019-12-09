const read=require("./jsonRead");


    function deleteDataByID(fileName, id) {
        const fs = require('fs');
       let isIDpresent=false;
        fs.exists(fileName, function (exists) {

            if (exists) {
                console.log("yes file exists");
                var jsonFileObject = read.readData(fileName);
                console.log(jsonFileObject);
                for (var index = 0; index < jsonFileObject.flightbookingDetails.length; index++) {
                    if (jsonFileObject.flightbookingDetails[index].userid == id) {
                        jsonFileObject.flightbookingDetails.splice(index, 1);
                        isIDpresent=true;
                        break;
                    }
                    let jsonFileString = JSON.stringify(jsonFileObject);
                    fs.writeFile(fileName, jsonFileString, function (err) {
                        if (err) throw err;
                        
                    });
                }
                if(!isIDpresent){
                    console.log("id is not exist, no data deleted from file");
                }
                else{
                    console.log('data deleted from file');
                    console.log("file after deleting data");
                    console.log(jsonFileObject);
                }
            }
            else {
                console.log("file not exists");
            }

        });
      

    }
    function deleteEntireData(fileName) {
        const fs = require('fs');
        fs.exists(fileName, function(exists) {
    
            if (exists) {    
                console.log("yes file exists");
                var jsonFileObject  =read.readData(fileName);
               console.log(jsonFileObject);
                totalArrayLength=jsonFileObject.flightbookingDetails.length;
                console.log("data present in file: "+totalArrayLength);
                jsonFileObject.flightbookingDetails.splice(0,totalArrayLength);
                let jsonFileString = JSON.stringify(jsonFileObject);
                fs.writeFile (fileName, jsonFileString, function(err) {
                    if (err) throw err;
                    console.log('data deleted from existing file');
                    console.log("file after deleting data is: ");
                    console.log(read.readData(fileName));
                    }
                );     
                
            }
            else{
                console.log("file not exists ,data deleted");
               

                               
                    
            }
        });          
      

    }



module.exports={
    deleteDataByID,deleteEntireData
}