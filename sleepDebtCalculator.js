function getSleepHours(day){
  var hours = prompt ('How many hours of sleep they got each night this week' + day + '?');
  Number(hours);
};

function getActualSleepHours (){
  return getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thrusday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday');
};
  function getIdealSleepHours(){
    var idealHours = prompt('How many hours would you prefer to sleep every night ?');
    return Number(idealHours) * 7;
  };

  function calculateSleepDebt (){
    var actualHoursPerWeek = getActualSleepHours ();
    var idealHoursPerWeek = getIdealSleepHours ();
    
    if (idealHoursPerWeek === actualHoursPerWeek) {
  console.log('You got the ideal amount of sleep!');
} else if (idealHoursPerWeek < actualHoursPerWeek) {
  console.log('You got ' + (actualHoursPerWeek - idealHoursPerWeek) + ' hours more sleep than is ideal.');
} else {
  console.log('You need to get ' + (idealHoursPerWeek - actualHoursPerWeek) + ' more hours of sleep!');
  console.log('Make sure to get some rest to be your best!');
}
  }
    
calculateSleepDebt();
   