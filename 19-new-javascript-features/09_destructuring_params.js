
function fullName(user){
    const {firstName, lastName} = user;
    return `${firstName} ${lastName}`
};

user = {
    firstName:'harvey',
    lastName:'milksteele',
    phone:'12345',
    email:'web@mail.com'
};

console.log(fullName(user));
 