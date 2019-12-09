    function readData(jsonFile){
        'use strict';
       //get the fs module
        const fs = require('fs');
        //read the json file Synchronously
        let rawdata = fs.readFileSync(jsonFile);
        //convert into java script object
        let jsonObject = JSON.parse(rawdata);
        return jsonObject;    
     }
     
        function getDataByID(fileName, id) {
            let isIDexist=false;
            const fs = require('fs');
          
            fs.exists(fileName, function (exists) {
    
                if (exists) {
                    console.log("yes file exists");
                    let jsonFileObject = readData(fileName);
                    for (var index = 0; index < jsonFileObject.flightbookingDetails.length; index++) {
                       
                        if (jsonFileObject.flightbookingDetails[index].userid == id) {
                            console.log("id matched");
                            console.log(jsonFileObject.flightbookingDetails[index]);
                            isIDexist=true;
                            break;
                        }
                    }
                    if(!isIDexist){
                        console.log("enter id wrong or id not exit");
                        }
                }
                else {
                    console.log("file not exists");
                }
    
            });
    
        }
    
      function getDataByGivenNumber(fileName,id,recordNumber){
       let isIDexist=false;
        const fs = require('fs');
          
        fs.exists(fileName, function (exists) {

            if (exists) {
                console.log("yes file exists");
                let jsonFileObject = readData(fileName);
                for (var index = 0; index < jsonFileObject.flightbookingDetails.length; index++) {
                   
                    if (jsonFileObject.flightbookingDetails[index].userid == id) {
                        console.log(jsonFileObject.flightbookingDetails.slice(index,recordNumber));
                        isIDexist=true;
                        break;
                    }
                }
                if(!isIDexist){
                console.log("enter id wrong or id not exsit");
                }
            }
            else {
                console.log("file not exists");
            }

        });

      }

     function getEntireData(fileName){
        const fs = require('fs');
          
        fs.exists(fileName, function (exists) {

            if (exists) {
                console.log("yes file exists");
                let jsonFileObject = readData(fileName);
                let totalData=jsonFileObject.flightbookingDetails.length;
                console.log(jsonFileObject.flightbookingDetails.slice(0,totalData));
            }
            else {
                console.log("file not exists");
            }

        });

     }

   
     module.exports= {
       readData,getDataByID,getDataByGivenNumber,getEntireData
     }
