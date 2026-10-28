const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

// Программист 1 (средний балл)
function calculateAverage(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i].score;
    }
    return sum / data.length;
}

// Программист 2 (лучший студент)
function findTopStudent(data) {
    if (data.length === 0) return null;

    let top = data[0];
    for (let i = 1; i < data.length; i++) {
        if (data[i].score > top.score) {
            top = data[i];
        }
    }
    return top.name;
}

// Программист 3 (должники)
function filterFailed(data, passScore) {
    return data
        .filter(student => student.score < passScore)
        .map(student => student.name);
}

// Программист 4 (буквенные оценки)
function addLetterGrade(data) {
    data.forEach(student => {
        if (student.score >= 90) {
            student.letter = "A";
        } else if (student.score >= 75) {
            student.letter = "B";
        } else {
            student.letter = "C";
        }
    });
    return data;
}

// Тимлид собирает результат
console.log("1. Средний балл группы:", calculateAverage(grades));
console.log("2. Лучший студент:", findTopStudent(grades));
console.log("3. Список должников:", filterFailed(grades, 60));
console.log("4. Массив с буквенными оценками:");
console.log(addLetterGrade([...grades]));


   
