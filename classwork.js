let studentArray = [
    {
        name: "Tom",
        studentId: 1,
        grade: undefined
    },
    {
        name: "Sasha",
        studentId: 2,
        grade: undefined
    },
    {
        name: "Daniel",
        studentId: 3,
        grade: undefined
    },
    {
        name: "Tiger",
        studentId: 4,
        grade: undefined
    }
]



  const gradeChange = (id, grade) =>{
        let array= studentArray.map(item => item.studentId)
        array.forEach((i, idx) => i === id ? studentArray[idx].grade= grade : null) 

  }

  gradeChange (1, 95)
  console.log (studentArray)
