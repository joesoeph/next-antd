const fs = require('fs');
const { faker } = require('@faker-js/faker');

const generatePosts = count => {
  const data = { posts: [] };

  for (let i = 0; i < count; i++) {
    const post = {
      id: i + 1,
      title: faker.lorem.words(),
      content: faker.lorem.paragraph(),
      image: faker.image.urlLoremFlickr(),
    };

    data.posts.push(post);
  }

  return data;
};

const saveDataToFile = data => {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync('mockdb.json', jsonData);
};

const posts = generatePosts(1000);
saveDataToFile(posts);
