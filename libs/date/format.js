import fecha from 'fecha'

fecha.i18n = {
  amPm:['上午','下午']
}



export function shortFormatString(date){
  var dateNow = new Date();


  let year = dateNow.getFullYear();
  let month = dateNow.getMonth();
  let day = dateNow.getDate();

  let yearB = date.getFullYear();
  let monthB = date.getMonth();
  let dayB = date.getDate();


  if(yearB<year || yearB>year){
    return 'YYYY-MM-DD A hh:mm'
  }else{
    if(monthB==month){
      if (dayB == day) {
        //今天
        return 'Ahh:mm';
      } else if (dayB == day-1){
        return '昨天Ahh:mm';
      }else{
        return 'MM-DD Ahh:mm'
      }
    }else{
      return 'MM-DD Ahh:mm'
    }
  }
}

export function socialFormat(date) {
  return fecha.format(date,shortFormatString(date))
}
