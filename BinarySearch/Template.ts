/**
 * Credit: https://labuladong.github.io/algo/2/18/26/
 */

function binary_search(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2); // avoid overflow
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        }
    }
    return -1;
}

function left_bound(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2); // avoid overflow
        if (nums[mid] === target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        }
    }
    if (left >= nums.length || nums[left] !== target) {
        return -1;
    }
    return left;
}

function right_bound(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2); // avoid overflow
        if (nums[mid] === target) {
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        }
    }
    if (right < 0 || nums[right] !== target) {
        return -1;
    }
    return right;
}
