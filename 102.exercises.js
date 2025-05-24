function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}


function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}


function hasPassingGrade(score) {
  return getGrade(score) <=60;
}

function studentMsg(totalScores, studentScore) {
   // Calcular el promedio de la clase
  const average = getAverage(totalScores).toFixed(1);  // Promedio con un decimal
  
  // Obtener la calificación del estudiante según su puntaje
  const grade = getGrade(studentScore);
  
  // Determinar si el estudiante aprueba o reprueba según su puntaje
  const status = studentScore >= 60 ? "passed" : "failed";

  // Devolver el mensaje en el formato adecuado
  return `Class average: ${average}. Your grade: ${grade}. You ${status} the course.`;
}


console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
// Class average: 71.7. Your grade: F. You failed the course.
console.log(studentMsg([56,23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
//lass average: 50.8. Your grade: A++. You passed the course.