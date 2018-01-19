const googleTrends = require('google-trends-api')

let key = process.argv[2];
let startTime = process.argv[3];
let endTime = process.argv[4];

console.log(key,startTime,endTime)

googleTrends.relatedQueries({keyword: key, startTime: new Date(startTime), endTime: new Date(endTime)})
.then((res) => {
  var result = {};
  var obj = JSON.parse(res);
  var rankedList = obj['default']['rankedList'];

  rankedList.forEach(
    function(list){
        var test = list['rankedKeyword']

        test.forEach(
            function(content){
                var temp = content['query'].split(' ')
                temp.forEach(function(query_key){
                    if ( query_key.toLowerCase() !== key.toLowerCase() ) {
                        if ( query_key in result )
                            result[query_key]++
                        else
                            result[query_key] = 1
                    }
                })
            });
    });
  console.log(result)
})
.catch((err) => {
  console.log(err);
})
