function formatDuration(seconds) {
  // your code here
  mp = {yr:24*60*60*365, days: 24*60*60,hrs: 3600}
  let yrs
  if(seconds >= mp.yr){
    yrs = parseInt(seconds/mp.yr)
  }
  days = parseInt((seconds%mp.yr)/mp.days)
  hrs = parseInt((seconds%mp.days)/mp.hrs)
  minutes = parseInt((seconds%mp.hrs)/60)
  sec = seconds%60

  res = ""
  if(yrs) res += yrs + (yrs === 1 ? " year " : " years ")
  if(days) res += days + (yrs === 1 ? " day " : " days ")
  if(hrs) res += hrs + (hrs === 1 ? " hour, " : " hours, ")
  if(minutes) res += minutes + (minutes === 1 ? " minute " : " minutes ")
  if(minutes && sec) res += "and "
  if(sec) res += sec + (sec === 1 ? " second" : " seconds")

  return res
}
