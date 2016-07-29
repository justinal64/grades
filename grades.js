// How many of each grade?
// What is the lowest grade?
// What is the highest grade

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var grade = [];
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var f = 0;
var lowest = 100;
var highest = 0;

for (var i = 0; i < scores.length; i++) {

switch(true) {
    case (scores[i] < lowest):
        lowest = scores[i]
        f++;
        break;
    case (scores[i]<= 70):
        d++;
        break;
    case (scores[i]<= 80):
        c++;
        break;
    case (scores[i]<= 90):
        b++;
        break;
    case (scores[i] > highest):
        highest = scores[i];
        a++;
        break;
    default:
}

    // if(scores[i] <= 60) {
    //     if(scores[i] < lowest) {
    //         lowest = scores[i];
    //     }
    //     f++;
    // } else if(scores[i] <= 70) {
    //     d++;
    // } else if(scores[i] <= 80) {
    //     c++;
    // } else if(scores[i] <= 90) {
    //     b++;
    // } else {
    //     if(scores[i] > highest) {
    //         highest = scores[i];
    //     }
    //     a++;
    // }

    // Task 1
    grade.f = f;
    grade.d = d;
    grade.c = c;
    grade.b = b;
    grade.a = a;
    // Task 2
    grade.lowest = lowest;
    // Task 3
    grade.highest = highest;
}
console.log(grade);
// console.log(highest);
// console.log(lowest);


