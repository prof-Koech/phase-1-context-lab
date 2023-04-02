/* Your Code Here */// Your code here
function createEmployeeRecord(array){
    const myObject={
        //Loads Array elements into corresponding Object properties.
        firstName : array[0],
        familyName : array[1],
        title : array[2],
         payPerHour : array[3],
         //initialize empty Arrays on the properties timeInEvents and timeOutEvents.
         timeInEvents : [],
         timeOutEvents : []
   
    }
    return myObject;
   }
       
   function createEmployeeRecords(employeeData){
     let newArray=[]
     employeeData.forEach(accumulator =>{
         newArray.push(createEmployeeRecord(accumulator))
       
     })
     return newArray;
   
   }
   function createTimeInEvent(dateStamp){
       let [date, hour] = dateStamp.split(' ')
   
       this.timeInEvents.push({
           type: "TimeIn",
           hour: parseInt(hour, 10),
           date,
       })
   
       return this;
   }
   function createTimeOutEvent(dateStamp){
       let [date, hour] = dateStamp.split(' ')
   
       this.timeOutEvents.push({
           type: "TimeOut",
           hour: parseInt(hour, 10),
           date,
       })
   
       return this;
   }
   let hoursWorkedOnDate = function(soughtDate){
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === soughtDate
    })

    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === soughtDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}
let wagesEarnedOnDate = function(dateSought){
    let rawWage = hoursWorkedOnDate.call(this, dateSought)
        * this.payPerHour
    return parseFloat(rawWage.toString())
}
//    function allWagesFor(employeeRecord){
//        let  validDates = employeeRecord.timeInEvents.map(function(e){
//            return e.date
//        })
   
//        let amountToPay = validDates.reduce(function(memo, d){
//            return memo + wagesEarnedOnDate(employeeRecord, d)
//        }, 0)
   
//        return amountToPay;
//    }
   
   function findEmployeeByFirstName(srcArray, firstName) {
       return srcArray.find(function(rec){
         return rec.firstName === firstName
       })
     }
     
     function calculatePayroll(arrayOfEmployeeRecords){
         return arrayOfEmployeeRecords.reduce(function(memo, rec){
             return memo + allWagesFor.call(rec)
         }, 0)
     }
   
   
   
   



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!
 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
