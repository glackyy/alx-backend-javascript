import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const prom1 = uploadPhoto();
  const prom2 = createUser();

  return Promise.all([prom1, prom2]).then((value) => {
    console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
