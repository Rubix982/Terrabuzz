class UserInformation {
  constructor(handler, email, password,
    activities, location, instagram,
    facebook, linkedIn, twitter,
    website, biography, joinedWebsite) {
    this.handler = handler;
    this.email = email;
    this.password = password;
    this.activities = activities;
    this.location = location;
    this.instagram = instagram;
    this.facebook = facebook;
    this.linkedIn = linkedIn;
    this.twitter = twitter;
    this.website = website;
    this.biography = biography;
    this.joinedWebsite = joinedWebsite;
  }
}

export default UserInformation;
