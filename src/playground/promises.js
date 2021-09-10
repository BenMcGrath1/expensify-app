const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'Ben', age: 145 });
    // resolve('Something went wrong');
  }, 3000);
});

console.log('before');

promise
  .then((data) => {
    console.log(data);
  })
  .then(() => {
    console.log('do this run sucker?');
  })
  .catch((error) => {
    console.log('error: ', error);
  });

console.log('after');
