const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec ',
    post_text: 'Donec posuere metus vitae ipsum.',
    user_id: 10
  },
  {
    title: 'The rutrum.',
    post_text: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 8
  },
  {
    title: 'Dos vel, augue.',
    post_text: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_text: 'Donec diam neque vulputate ut, ultrices vel, augue.',
    user_id: 4
  },
  {
    title: 'Pell',
    post_text: 'Vestibulum eget, vulputate ut, hello some more, again.',
    user_id: 7
  },
  {
    title: 'Consectetuer adipiscing elit.',
    post_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 4
  },
  {
    title: 'Lorem',
    post_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 1
  },
  {
    title: 'Dude is happy',
    post_text: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_text: 'Blah blah quam nec dui luctus ration.',
    user_id: 9
  },
  {
    title: 'Curabitur',
    post_text: 'Curabitur at ipsum ac tellus semper interdum.',
    user_id: 5
  },
  {
    title: 'In hac ',
    post_text: 'Habey In hac habitasse platea dictumst.',
    user_id: 3
  },
  {
    title: 'Elementum eu',
    post_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_text: 'Morbi odio odio, elementum eu, a bit more in, leo.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_text: 'Some other stuff eu, interdum eu, tincidunt in, leo.',
    user_id: 3
  },
  {
    title: 'Malesuada',
    post_text: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    user_id: 3
  },
  {
    title:
      'Et ultr',
    post_text: 'Vestibulum ante ipsum primis in',
    user_id: 10
  },
  {
    title: 'Habitasse plate',
    post_text: 'Gesluctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_text: 'Etiam justo.',
    user_id: 3
  },
  {
    title: 'Nulla',
    post_text: 'Nulla ut erat id mauris vulputate elementum.',
    user_id: 4
  },
  {
    title: 'Integer pede justo',
    post_text: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    user_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
