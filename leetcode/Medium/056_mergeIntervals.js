/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considerred overlapping.
*/

// This is just to e
const testCase = [];
const case1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}
case1.forEach(interval => {
  testCase.push(new Interval(interval[0], interval[1]));
});

const merge = intervals => {
  const res = [];
  if (!intervals || !intervals.length) {
    return res;
  }
  // sort by start
  intervals.sort((a, b) => a.start - b.start);

  // insert the first interval into res;
  res.push(intervals[0]);

  // if the current Interval starts AFTER the last interval ends, they don't overlap. Otherwise, they do, so update the end of the last interval with current interval

  intervals.slice(1).forEach(interval => {
    const last = res.pop();
    const { _, end } = last;
    const currStart = interval.start;
    const currEnd = interval.end;
    if (currStart > end) {
      res.push(last);
      res.push(interval);
    } else {
      last.end = Math.max(end, currEnd);
      res.push(last);
    }
  });
  return res;
};
