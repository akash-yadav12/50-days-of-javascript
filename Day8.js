const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    // write your solution here
    let [m1,d1,y1] = dateText1.split('/')
    let [m2,d2,y2] = dateText2.split('/')
    const dd1 = new Date(y1,m1,d1)
    const dd2 = new Date(y2,m2,d2)
    const res = Math.abs(dd2-dd1)

    return Math.floor(res/DAY_IN_MILLISECONDS)
}

console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`)
