/* eslint-disable no-console */
// VECTOR (SAME TYPE)
const v = [1, 2, 3, 4];
v.push(5);
v.push(6);
v.push(7);
v.push(8);
const one = v[0];
if (one !== undefined) {
  console.log(`The value of the first item of v is: ${one}`); // 1
}
v.forEach(i => {
  console.log(i); // 1 2 3 4 5 6 7 8
});

// VECTOR (MULTIPLE TYPES)
type SpreadsheetCell = number | string;
const row: SpreadsheetCell[] = [3, 'blue', 10.12];
const three = row[0];
if (three !== undefined) {
  switch (typeof three) {
    case 'number':
      console.log(`The value of the first item (number) of row is: ${three}`); // 3
      break;
    case 'string':
      console.log(`The value of the first item (string) of row is: ${three}`);
      break;
    default:
  }
}

// HASH MAP
const scores = new Map<string, number>();
scores.set('Blue', 10);
scores.set('Yellow', 50);
const score = scores.get('Blue');
if (score !== undefined) {
  console.log(`The value of the Blue item of score is: ${score}`);
}
scores.forEach((value, key) => {
  console.log(`${key}: ${value}`); // Blue: 10 Yellow: 50
});

const teams = ['Blue', 'Yellow'];
const initialScores = [10, 50];
const scores2 = new Map<string, number>();
teams.reduce((accumulator, currentValue, i) => {
  accumulator.set(currentValue, initialScores[i]);
  return accumulator;
}, scores2);
const score2 = scores2.get('Blue');
if (score2 !== undefined) {
  console.log(`The value of the Blue item of score2 is: ${score2}`);
}
scores2.forEach((value, key) => {
  console.log(`${key}: ${value}`); // Blue: 10 Yellow: 50
});
