const twoSum = (nums, target) => {
  const cache = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (cache[diff] !== undefined) {
      return [cache[diff], i];
    }
    cache[nums[i]] = i;
  }
};
