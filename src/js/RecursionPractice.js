// Problem 1
function reverseOrder(sentence) {
  const sentA = sentence.split(' ');
  let result = [];
  help(sentA, result);
  return result.join(' ');
}

function help(sentA, result) {
  if (sentA.length === 0) {
    return result;
  } else {
    result.push(sentA.pop());
    help(sentA, result);
  }
}

// console.log(reverseOrder('I AM NOT A CAT'));
// console.log(reverseOrder('A B C D'));

// Problem 2

function RGR(num, result) {
  if (result === undefined) {
    result = '';
  }
  if (num === 0) {
    if (result.length === 1) {
      return 'try a larger number';
    } else {
      return result.trim();
    }
  } else {
    num--;
    result = result.concat('red green refactor ');
    return RGR(num, result);
  }
}

console.log(RGR(1000));
