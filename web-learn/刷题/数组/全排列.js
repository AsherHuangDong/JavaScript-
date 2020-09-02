// dps回溯算法
function backtrack(list, templist, nums) {
  if (templist.length === nums.length) return list.push([...templist])
  for (let i = 0; i < nums.length; i++) {
    if (templist.includes(nums[i])) continue
    templist.push(nums[i])
    backtrack(list, templist, nums)
    templist.pop()
  }
}

var permute = function (nums) {
  const list = []
  backtrack(list, [], nums)
  return list
}

console.log(permute([1, 2, 3]))