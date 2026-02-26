const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const group = {};

numbers.forEach(num => {
  const remain = num % 3;
  if (!group[remain]) 
  {
    group[remain] = [];
  }

  group[remain].push(num);
});

console.log(group);