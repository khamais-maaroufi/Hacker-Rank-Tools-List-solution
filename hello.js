function ToolsChanger(arr, Index, Target) {
  let countForward = 0;
  let countBackward = 0;

  let min = 0;
  for (let i = Index; i < arr.length; i++) {
    if (arr[i] == Target) {
      break;
    } else {
      countForward++;
    }
    if (arr.length - 1 === i) {
      i = -1;
    }
  }
  for (let i = Index; i >= 0; i--) {
    if (arr[i] == Target) {
      break;
    } else {
      countBackward++;
    }
    if (0 === i) {
      i = arr.length;
    }
  }
  if (countForward > countBackward) {
    min = countBackward;
  } else {
    min = countForward;
  }
  return min;
}

let arr = [0, 2, 3];
let CurrentIndex = 0;
let Target = 2;
console.log(ToolsChanger(arr, CurrentIndex, Target));
