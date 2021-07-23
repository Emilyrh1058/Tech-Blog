const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec ',
    body: 'Donec posuere metus vitae ipsum.',
    user_id: 10
  },
  {
    title: 'The rutrum.',
    body: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 8
  },
  {
    title: 'Dos vel, augue.',
    body: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    body: 'Donec diam neque vulputate ut, ultrices vel, augue.',
    user_id: 4
  },
  {
    title: 'Pell',
    body: 'Vestibulum eget, vulputate ut, hello some more, again.',
    user_id: 7
  },
  {
    title: 'Consectetuer adipiscing elit.',
    body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 4
  },
  {
    title: 'Lorem',
    body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 1
  },
  {
    title: 'Dude is happy',
    body: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    body: 'Blah blah quam nec dui luctus ration.',
    user_id: 9
  },
  {
    title: 'Curabitur',
    body: 'Curabitur at ipsum ac tellus semper interdum.',
    user_id: 5
  },
  {
    title: 'In hac ',
    body: 'Habey In hac habitasse platea dictumst.',
    user_id: 3
  },
  {
    title: 'Elementum eu',
    body: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    body: 'Morbi odio odio, elementum eu, a bit more in, leo.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    body: 'Some other stuff eu, interdum eu, tincidunt in, leo.',
    user_id: 3
  },
  {
    title: 'Malesuada',
    body: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    user_id: 3
  },
  {
    title:
      'Et ultr',
    body: 'Vestibulum ante ipsum primis in',
    user_id: 10
  },
  {
    title: 'Habitasse plate',
    body: 'Gesluctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    body: 'Etiam justo.',
    user_id: 3
  },
  {
    title: 'Nulla',
    body: 'Nulla ut erat id mauris vulputate elementum.',
    user_id: 4
  },
  {
    title: 'Integer pede justo',
    body: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    user_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
