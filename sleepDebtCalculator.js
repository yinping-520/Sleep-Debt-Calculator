
const getSleepHours =  function (day) {
  
  switch(day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 8;
      break;
    case "thursday":
      return 7;
      break;
    case "friday":
      return 5;
      break;
    case "saturday":
      return 3;
      break;
    case "sunday":
      return 2;
      break;
  }
};

//console.log(getSleepHours("tuesday"))

const getActualSleepHours = () => getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday") ;
//console.log(getActualSleepHours());


const getIdealSleepHours = () =>{
  const idealHours = 8;
  return idealHours * 7;
};
//console.log(getIdealSleepHours());


function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  var hoursDifference = idealSleepHours - actualSleepHours;
  
  if (actualSleepHours === idealSleepHours){
    console.log("You got the perfect amount of sleep!")
  }; 
  if (actualSleepHours > idealSleepHours){
    console.log(`You got more sleep than needed by ${hoursDifference}hours`)
  }; 
  if (actualSleepHours < idealSleepHours){
    console.log(`You should get some rest! You need to sleep ${hoursDifference} more hours.`)
  };
};

calculateSleepDebt();
