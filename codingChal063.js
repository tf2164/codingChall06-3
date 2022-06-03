
//create a function that takes in two dates for parameters
function getDays(date1, date2) {

    // The number of milliseconds in one day
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculate the difference in milliseconds
    const difference = Math.abs(date1 - date2);

    // Convert back to days and return
    return Math.round(difference / oneDay);

}




console.log( getDays(

new Date("June 14, 2019"),

 new Date("June 20, 2019"),

  ) ) //➞ 6
  


//   console.log(`How many days are between ${getDays.Date} and ${getDays.Date}  `);

  
  console.log( getDays(
  
    new Date("December 29, 2018"),
  
   new Date("January 1, 2019")
  
  )) //➞ 3
  
   // Dates may not all be in the same month/year.
  
  
  
  
  console.log(getDays(

    new Date("July 20, 2019"),
  
     new Date("July 30, 2019")
  
   )) //➞ 10
  
  
