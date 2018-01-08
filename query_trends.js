const googleTrends = require('google-trends-api')

let key = process.argv[2];
let startTime = process.argv[3];
let endTime = process.argv[4];

console.log(key,startTime,endTime)

googleTrends.relatedQueries({keyword: key, startTime: new Date(startTime), endTime: new Date(endTime)})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})
