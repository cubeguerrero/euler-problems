var year, month, date, dateString;
var sundayCount = 0;

for (year = 1901; year <= 2000; year++) {
  for (month = 0; month < 12; month++) {
    date = new Date(year, month, 1);
    if (date.getDay() === 0) {
      sundayCount++;
    }
  }
}

console.log(sundayCount);