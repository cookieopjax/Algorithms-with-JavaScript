function generateTestCases() {
  return [
    {
      name: "Random integers",
      data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
    },
    {
      name: "Already sorted (ascending)",
      data: Array.from({ length: 10 }, (_, i) => i)
    },
    {
      name: "Already sorted (descending)",
      data: Array.from({ length: 10 }, (_, i) => 10 - i)
    },
    {
      name: "Array with duplicates",
      data: [5, 1, 3, 3, 7, 5, 1, 9, 3, 5]
    },
    {
      name: "Array with negative numbers",
      data: [3, -1, 4, -2, 0, -5, 8, -3]
    },
    {
      name: "Large dataset",
      data: Array.from({ length: 10000 }, () => Math.floor(Math.random() * 100000))
    }
  ]
}

function validateSort(sortFunction) {
  const testCases = generateTestCases()

  for (const { name, data } of testCases) {
    const input = [...data]
    const expected = [...data].sort((a, b) => a - b)
    const output = sortFunction([...data])

    if (JSON.stringify(output) !== JSON.stringify(expected)) {
      console.error(`❌ ${name} test failed!`)
      console.log("Input:     ", input)
      console.log("Expected:  ", expected)
      console.log("Output:    ", output)
      return false
    }
  }
  
  console.log("✅ All tests passed!")
  return true
}

export default validateSort
