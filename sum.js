sumArray = array => array ? array.sort((a,b) => a - b).slice(1,-1).reduce((prev,curr) => prev + curr,0) : 0
