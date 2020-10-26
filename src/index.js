

function sortByLastName(books) {
    return books.sort((a, b) => {
        console.log(a.author.split(' ')[1],b.author.split(' ')[1]);
     return a.author.split(' ')[1] - b.author.split(' ')[1]
  })
}


console.log(sortByLastName([
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
]));