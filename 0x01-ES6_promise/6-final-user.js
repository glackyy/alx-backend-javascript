import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserProm = signUpUser(firstName, lastName);
  const uploadPhotoProm = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserProm, uploadPhotoProm]).then((values) => {
    const res = [];
    values.forEach((e) => {
      if (e.status === 'fulfilled') {
        res.push({ status: e.status, value: e.value });
      } else {
        res.push({ status: e.status, value: `${e.reason}` });
      }
    });
    return res;
  });
}
