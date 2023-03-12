function writeCards(name,event) {
  let cards = []
  for (let i = 0; i < name.length; i++) {
    cards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }
return cards
}

function countDown(num) {
  while (num >= 0)
  console.log(num--)
}