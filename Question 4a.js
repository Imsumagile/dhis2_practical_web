// The original JSON array
const students = [
  {
    "studentName": "John Doe",
    "studentId": "393494",
    "courseResults": {
      "courseWork": [
        {
          "subject": "Pascal",
          "score": 34
        },
        {
          "subject": "C Programming",
          "score": 24
        }
      ],
      "ue": [
        {
          "subject": "Pascal",
          "score": 56
        },
        {
          "subject": "C Programming",
          "score": 40
        }
      ]
    }
  },
  {
    "studentName": "Jane Robert",
    "studentId": "439493",
    "courseResults": {
      "courseWork": [
        {
          "subject": "Pascal",
          "score": 28
        },
        {
          "subject": "C Programming",
          "score": 24
        }
      ],
      "ue": [
        {
          "subject": "Pascal",
          "score": 56
        },
        {
          "subject": "C Programming",
          "score": 50
        }
      ]
    }
  }
];

// Function to calculate the total score for a student
const calculateTotalScore = (courseResults) => {
  const courseWorkTotal = courseResults.courseWork.reduce((acc, curr) => acc + curr.score, 0);
  const ueTotal = courseResults.ue.reduce((acc, curr) => acc + curr.score, 0);
  return courseWorkTotal + ueTotal;
};

// Create a new JSON array with total scores
const totalScores = students.map(student => {
  return {
    studentName: student.studentName,
    totalScore: calculateTotalScore(student.courseResults)
  };
});

// Output the new JSON array
console.log(totalScores);
