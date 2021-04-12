"use strict";
 const quiz = {};
 quiz.students = [{sid:10, answers:[{qid:2, ans:"b"}, {qid:3, ans:"a"}, {qid:1, ans:"b"}]},
               {sid:11, answers:[{qid:1, ans:"e"}, {qid:2, ans:"a"}, {qid:3, ans:"b"}]},
               {sid:12, answers:[{qid:3, ans:"b"}, {qid:2, ans:"a"}, {qid:1, ans:"d"}]},   
]
 quiz.key = [{qid:1, ans:"b"}, {qid:2, ans:"a"}, {qid:3, ans:"b"} ]
function answerComparator(ans1, ans2) {
    return ans1.qid - ans2.qid;
  }
  
  /**
   *
   * @param {number} sid student id
   * @returns {number} score for student
   * @process: find this student
   * sort the student answers
   * compare them against key and add up matches
   */
  quiz.scoreStudent = function (sid) {
  
    let student = this.students.find((item) => item.sid === sid);
    let studentAnswer = student.answers.sort(answerComparator);
    let score = 0;
  
    for (let i = 0; i < studentAnswer.length; i++) {
      if (studentAnswer[i].ans === this.key[i].ans) score++;
    }
    return score;
  };
  
  /**
   * @returns {number} average score of all students
   * go through list of students and get score of each, then the average
   */
  quiz.getAverage = function () {
    let totalScore = 0;
    let totalStudent = Object.values(this.students).length;
  
    for (let student of this.students) {
      totalScore += this.scoreStudent(student.sid);
    }
    let averageScore = totalScore / totalStudent;
  
    return averageScore;
  };

//    module.exports = {quiz}; 