function timeHandle(time) {
  let date1 = new Date(time).getTime()
  let date2 = new Date()
  let date3 = date2.getTime() - new Date(date1).getTime(); //时间差的毫秒数
  // 计算相差年数
  let years = date3 / (24 * 3600 * 1000 * 365)
  // 计算相差月数
  let monthes = date3 / (24 * 3600 * 1000 * 30)
  //计算出相差天数
  let days = date3 / (24 * 3600 * 1000)
  //计算出小时数
  let hours = date3 / (3600 * 1000)
  //计算相差分钟数
  let minutes = Math.ceil(date3 / (60 * 1000))
  if (years >= 1) {
    return years + '年前'
  } else if (monthes >= 1) {
    return monthes + '个月前'
  } else if (days >= 1) {
    return days + '天前'
  } else if (hours >= 1) {
    return hours + '小时前'
  } else {
    return minutes + '分钟前'
  }
}
console.log(timeHandle('2020-07-30T10:59:37+08:00'))