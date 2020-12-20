export const concatInterests = (__interests) => {
  let interestsString = '';
  __interests.forEach((element) => {
    interestsString += `#${element} `;
  });
  return interestsString;
};