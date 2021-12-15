// 時間轉 YYYY-M-D || YYYY-MM-DD 格式
export const dateFormat = (dateStr = '', format = 'YYYY-M-D') => {
  if (!Date.parse(dateStr)) {
    // ios 不支援 YYYY-MM-DD 格式
    dateStr = dateStr.replace(/-/g, '/')
  }
  const dateObj = new Date(dateStr)
  let [year, month, day] = [
    dateObj.getFullYear(),
    dateObj.getMonth() + 1,
    dateObj.getDate(),
  ]
  switch (format) {
    case 'YYYY-MM-DD':
      month = `0${month}`
      day = `0${day}`
      break

    default:
      break
  }
  return `${year}-${month}-${day}`
}
