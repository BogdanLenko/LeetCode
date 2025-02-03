function twoSum(nums: number[], target: number): number[] {
    const output: number[] = []
    for (let i = 0; i < nums.length; i++) {
        const firstNum = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            const secondNum = nums[j]
            if (firstNum + secondNum === target) {
                output.push(i, j)
            }
        }
    }
    return output
};