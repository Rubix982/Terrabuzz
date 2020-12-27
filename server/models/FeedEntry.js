class FeedEntry {
  constructor(__id, __handle, { Username, ProfilePicture }, __postDetails) {
    this.id = __id;
    this.Username = Username;
    this.ProfilePicture = ProfilePicture;
    this.Handle = __handle;
    this.postDetails = __postDetails;
  }
}

module.exports = FeedEntry;
