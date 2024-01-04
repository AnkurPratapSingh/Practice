const student = {
    name: 'Alice',
    scores: [85, 92, 78, 95, 88],
  
    calculateAverageScore: function () {
      const sum = this.scores.reduce((acc, score) => acc + score, 0);
      const average = sum / this.scores.length;
      return average;
    }
  };
  
  console.log('Student Name:', student.name);
  console.log('Scores:', student.scores);
  console.log('Average Score:', student.calculateAverageScore().toFixed(2)); 
  