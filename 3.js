function getScore(user) {
  if (user.length === 0) {
    return null; 
  }
  let winner = user[0];  

  for (let i = 1; i < user.length; i++) 
  {
    if (user[i].score > winner.score) {
      winner = user[i];
    }
  }
  return winner.name;
}

const data = [
  { name: 'Roman', score: 50 },
  { name: 'Denis', score: 90 },
  { name: 'Vika', score: 75 }
];
console.log(getScore(data));