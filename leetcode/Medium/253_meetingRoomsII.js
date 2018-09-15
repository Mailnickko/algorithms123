/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
*/

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const minMeetingRooms = intervals => {
  const starts = [...intervals].map(times => times.start).sort((a, b) => a - b);
  const ends = [...intervals].map(times => times.end).sort((a, b) => a - b);
  let rooms = 0;
  let endIndex = 0;

  starts.forEach(startTime => {
    let endTime = ends[endIndex];
    if (startTime < endTime) {
      rooms++;
    } else {
      endIndex++;
    }
  });
  return rooms;
};
