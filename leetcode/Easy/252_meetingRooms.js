/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

Example 1:

Input: [[0,30],[5,10],[15,20]]
Output: false
Example 2:

Input: [[7,10],[2,4]]
Output: true
*/

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const canAttendMeetings = intervals => {
  if (intervals.length < 2) {
    return true;
  }

  const sorted = [...intervals].sort((a, b) => a.start - b.start);

  for (const [index, curr] of sorted.entries()) {
    if (index > 0 && curr.start < sorted[index - 1].end) {
      return false;
    }
  }
  return true;
};
