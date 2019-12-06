const original = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,6,19,1,9,19,23,2,23,10,27,1,27,5,31,1,31,6,35,1,6,35,39,2,39,13,43,1,9,43,47,2,9,47,51,1,51,6,55,2,55,10,59,1,59,5,63,2,10,63,67,2,9,67,71,1,71,5,75,2,10,75,79,1,79,6,83,2,10,83,87,1,5,87,91,2,9,91,95,1,95,5,99,1,99,2,103,1,103,13,0,99,2,14,0,0];
let intcode = original.slice();

for (let a = 0; a <= 99; a++){
  for (let b = 0; b <= 99; b++){
    intcode = original.slice();
    intcode[1] = a;
    intcode[2] = b;
    let i = 0;
    while (intcode[i] != 99) {
      if (intcode[i] == 1) {
        intcode[intcode[i+3]] = intcode[intcode[i+1]] + intcode[intcode[i+2]]
      }
      else if (intcode[i] == 2) {
        intcode[intcode[i+3]] = intcode[intcode[i+1]] * intcode[intcode[i+2]];
      }
      i += 4;
    }
    if (intcode[0] == 19690720) {
      console.log(100 * a + b);
    }
  }
}