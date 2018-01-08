const googleTrends = require('google-trends-api')

googleTrends.relatedQueries({keyword: 'Vulnerability', startTime: new Date('2017-10-10'), endTime: new Date('2017-10-16')})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})
