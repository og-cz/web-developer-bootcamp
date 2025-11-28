// spreading with objects will take the latest and change it to the current data
const feline = {legs:4, family: 'felidae'}
const canine = {isFurry: true, family: 'felidae'}

const catDog = {...feline, ...canine, family: "steele"}
console.log(catDog); // pick only the latest object when doin spread with objects

const dataForm = {
    email: 'email@.com',
    password: 'password1234',
    username: 'unamegg'
}

const newUser = {...dataForm, id:1234, isAdmin: false}
console.log(newUser);
