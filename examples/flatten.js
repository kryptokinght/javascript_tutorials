/* This program doesn't work */
function checkDim(array) {
  for (let i = 0; i < array.length; i += 1)
    if (Array.isArray(array[i]))
      return true;
  return false;
}

const arr = [[1, [2], 2], [3, 4, 5]];

function flatten(array) {
  return array.reduce((acc, e) => {
    console.log(acc);
    if (array.indexOf(acc) === 1) {
      console.log("Adasda");
    }
    // acc = flatten(acc);
    if (checkDim(e))
      return acc.concat(flatten(e))

    if (!Array.isArray(acc))
      return acc.toString().split('').map(Number).concat(e);

  })
}



flatten(arr)