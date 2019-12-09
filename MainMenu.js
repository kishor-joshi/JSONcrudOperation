const read=require("./jsonRead");
const write=require("./jsonWrite");
const update=require("./jsonUpdate");
const deleteObject=require("./jsonDelete");
var readline = require('readline-sync');


script("./JSONcrudOperation/bookingDetails.json");


function script(fileName){
   
    let id, departure, arrival, date, adultCount, childrenCount, operation, updateKey, updateValue;
   
    operation = readline.question("enter the operation to be perform 1) insert 2)Retrieve 3)Update: 4)Delete : ");
   
    switch (operation) {
        case '1':
            id = readline.question('enter the test id:-');
            departure = readline.question('enter departure location : ');
            arrival = readline.question("enter arrival location : ");
            date = readline.question('enter departure date :-');
            adultCount = readline.question("enter the number of adult : ");
            childrenCount = readline.question('enter the number of children : ');
            write.writeData(fileName, id, departure, arrival, date, adultCount, childrenCount);
            break;
        case '2':
           
            getOption=readline.question('want: 1)data for given id 2) entire data 2)data from given id with range ');
            if(getOption=='1'){
                id = readline.question('enter the test id for the data: ');
            read.getDataByID(fileName, id);
            }
            else if(getOption=='2'){              
               read.getEntireData(fileName);
               
            }
            else if(getOption=='3'){
                id = readline.question('enter the test id for the data: ');
                let finalIndex = readline.question('enter the range from given id : ');
                read.getDataByGivenNumber(fileName,id,finalIndex);
               
            }
            else{
                console.log("entered wrong option");
            }
            break;
        case '3':
            id = readline.question('enter the test id to be updated: ');
            updateKey = readline.question('enter the key to be update: ');
            updateValue = readline.question('enter the value to be update: ');
            update.updateData(fileName, id, updateKey, updateValue);
            break;
        case '4':         
           
           let getOptionForDelete=readline.question('want to delete 1) entire data 2) given id data ');
            if(getOptionForDelete=='1'){
                id = readline.question('enter the test id to be deleted: ');
               deleteObject.deleteDataByID(fileName, id);
            }
            else if(getOptionForDelete=='2'){
             deleteObject.deleteEntireData(fileName);
            }
            else{
                console.log('entered wrong option');
            }
                       
            break;
        default:
            console.log("you enter wrong value");
            break;
    }

 
}


module.exports={
    script
}