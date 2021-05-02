let getSleepHours = day => {
  
  
    if (day === 'monday'){
      return 8;
    }else if(day === 'tuesday'){
      return 7;
    }else if(day === 'wednesday'){
      return 8;
    }else if(day === 'thursday'){
      return 8;
    }else if(day === 'friday'){
      return 7;
    }else if(day === 'satuday'){
      return 8;
    }else if(day === 'sunday'){
      return 9;
    }else{
      return 'ecc'
    }
  }
  
  console.log(getSleepHours('tuesday'));
  
  const getActualSleepHours = () => 
    getSleepHours('monday')+
    getSleepHours('tuesday')+
    getSleepHours('wednesday')+
    getSleepHours('thursday')+
    getSleepHours('friday')+
    getSleepHours('satuday')+
    getSleepHours('sunday');
  
  console.log(getActualSleepHours())
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours){
      console.log('adf')
    }else if(actualSleepHours > idealSleepHours){
      console.log('qwer')
    }else if(actualSleepHours < idealSleepHours){
      console.log('zcv')
    }else{
      console.log('err')
    }
  }
  
  calculateSleepDebt()
  