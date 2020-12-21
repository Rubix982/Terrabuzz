class PostEntry {
  constructor({
    handle, title, datePublished, content, interest, likes = [],
  }, comments = []) {
    this.handle = handle;
    this.title = title;
    this.datePublished = datePublished;
    this.content = content;
    this.interest = interest;
    this.likes = likes;
    this.comments = comments;
  }
}

module.exports = PostEntry;
