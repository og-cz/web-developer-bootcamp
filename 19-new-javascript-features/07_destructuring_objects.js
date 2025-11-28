const user = {
    id: 1,
    name: "Ava Thompson",
    username: "avathompson",
    email: "ava.thompson@example.com",
    phone: "+1-555-123-4567",
    website: "avathompson.dev",
    born:1975,
    died:2022
};

const {email,name,phone,website,born} = user;
console.log(email,name,phone,website);

const {born: birthYear} = user; // renames born to birthyear
console.log(birthYear)