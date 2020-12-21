class InterestedInEntry {
  constructor(__handle, { Username, ProfilePicture }, __interests) {
    this.Username = Username;
    this.ProfilePicture = ProfilePicture;
    this.Handle = __handle;
    this.interests = __interests;
  }
}

module.exports = InterestedInEntry;
