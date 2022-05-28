const db = require('./connection');
const { User, Book} = require('../models');

db.once('open', async () => {
  await Book.deleteMany();


  const book = await Book.insertMany([
    { author: 'Steven Calebrese',
      description: 'The tale of two apricots living in an aprinot world',
      bookId: 'ISBN001',
      image: "book1.jpg",
      link: "",
      title: 'Apricots of Wrath'
  }
  ]);

  await User.deleteMany();

  await User.create({
    userName: "PamBam",
    email: 'pamela@testmail.com',
    password: 'password12345',
    savedBooks: [
      {
        books: [book[0]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    userName: 'EliSchmeli',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
