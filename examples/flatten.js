var arr = [[1,[2],2],[3,4,5]];

function flatten(array) {
  return array.reduce(function(acc, e) {
    console.log(acc);
    if(array.indexOf(acc) == 1) {
      console.log("Adasda");
    }
      //acc = flatten(acc);
    if(check_dim(e)) 
      return acc.concat(flatten(e)) 
    else {
      if(!Array.isArray(acc))
        acc = acc.toString().split('').map(Number);
      return acc.concat(e);
    }
  })
}

function check_dim(array) {
  for(let i = 0; i < array.length; i++)
    if(Array.isArray(array[i]))
      return true;
  return false;
}

flatten(arr)