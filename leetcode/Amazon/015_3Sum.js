// [-1, 0, 1, 2, -1, -4]
// [-4, -1, -1, 0, 1, 2] => [[-1, 0, 1], [-1, -1, 2]]

// [-1, -1, -1, 0, 1, 2] => [[-1, 0, 1], [-1, -1, 2]]

const threeSum = nums => {
  const res = [];
  if (nums.length < 3) {
    return res;
  }

  const sorted = nums.slice().sort((a, b) => a - b);
  let next;
  let end;
  let sum;

  for (let i = 0; i < nums.length - 2; i++) {
    // if curr num is greater than 0, abort
    if (sorted[i] > 0) {
      return res;
    }
    if (i === 0 || sorted[i] > sorted[i - 1]) {
      next = i + 1;
      end = nums.length - 1;
      sum = 0;
      while (next < end) {
        sum = sorted[i] + sorted[next] + sorted[end];

        if (sum < 0) {
          next++;
        } else if (sum > 0) {
          end--;
        } else {
          // sum must be === 0
          res.push([sorted[i], sorted[next], sorted[end]]);
          next++;
          end--;

          // skip same numbers
          while (next < end && sorted[next] === sorted[next - 1]) {
            next++;
          }

          while (next < end && sorted[end] === sorted[end + 1]) {
            end--;
          }
        }
      }
    }
  }
  return res;
};
