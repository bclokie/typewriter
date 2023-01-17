const sentence = "hello there from lighthouse labs";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50; //increment delay by 50ms for each iteration
}
setTimeout(() => {
  process.stdout.write('\n'); 
}, delay);