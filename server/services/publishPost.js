const { PostList, Post } = require('../models/post.js');

const getDateInWords = (__date) => {
  let date = (__date.toString()).split('').reverse();

  if (date[1] !== '1') {
    switch (date[0]) {
      case '1':
        date = date.reverse().join('');
        return `${date}st`;
      case '2':
        date = date.reverse().join('');
        return `${date}nd`;
      case '3':
        date = date.reverse().join('');
        return `${date}rd`;
      default:
        date = date.reverse().join('');
        return `${date}th`;
    }
  }
  date = date.reverse().join('');
  return `${date}th`;
};

const getMonthInWords = (__month) => {
  const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return (months[__month]);
};

const formattedDate = () => {
  const completeDate = new Date();
  const date = getDateInWords(completeDate.getDate());
  const month = getMonthInWords(completeDate.getMonth());
  const year = completeDate.getFullYear();
  return (`${date} ${month} ${year}`);
};

const createAndPushPost = async ({ title, content, interest }, __handle) => {
  try {
    const userPostList = await PostList.findOne({ _id: __handle }).populate('payload');
    const date = formattedDate();
    const newPost = new Post({
      handle: __handle,
      title,
      datePublished: date,
      content,
      interest,
    });
    await newPost.save();
    userPostList.payload.push(newPost.id);
    await userPostList.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.createAndPushPost = createAndPushPost;
