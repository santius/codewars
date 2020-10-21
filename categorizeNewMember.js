const data = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]];

function openOrSenior(data){
  var result = [];
  data.forEach(function(value, index){ 
    (value[0] > 54 && value[1] > 7) ? result.push('Senior') : result.push('Open'); 
  })
  return result;
}

openOrSenior(data);
