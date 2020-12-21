class CommentEntry {
  constructor({ handle, datePosted, content }, { Username, ProfilePicture }) {
    this.handle = handle;
    this.datePosted = datePosted;
    this.content = content;
    this.Username = Username;
    this.ProfilePicture = ProfilePicture;
  }
}

module.exports = CommentEntry;
