const users = [
  {
    "id": "612c9b2d3823d979dd8064dd",
    "isActive": true,
    "points": 20,
    "age": 25,
    "eyeColor": "brown",
    "firstName": "Pearson",
    "lastName": "Petersen",
    "gender": "male",
    "company": "PRIMORDIA",
    "email": "pearsonpetersen@primordia.com"
  },
  {
    "id": "612c9b2dc56febd1daf22b56",
    "isActive": false,
    "points": 71,
    "age": 25,
    "eyeColor": "blue",
    "firstName": "Pat",
    "lastName": "Nolan",
    "gender": "female",
    "company": "TRASOLA",
    "email": "patnolan@trasola.com"
  },
  {
    "id": "612c9b2d86d4e6b08d722ffa",
    "isActive": false,
    "points": 48,
    "age": 28,
    "eyeColor": "brown",
    "firstName": "Mendoza",
    "lastName": "Hansen",
    "gender": "male",
    "company": "REALMO",
    "email": "mendozahansen@realmo.com"
  },
  {
    "id": "612c9b2d0f693e2c650531a8",
    "isActive": false,
    "points": 39,
    "age": 28,
    "eyeColor": "brown",
    "firstName": "Franks",
    "lastName": "Bean",
    "gender": "male",
    "company": "OLUCORE",
    "email": "franksbean@olucore.com"
  },
  {
    "id": "612c9b2daed768ed053eed43",
    "isActive": true,
    "points": 79,
    "age": 37,
    "eyeColor": "green",
    "firstName": "Gay",
    "lastName": "Hancock",
    "gender": "male",
    "company": "GEEKOSIS",
    "email": "gayhancock@geekosis.com"
  },
  {
    "id": "612c9b2d374ac9ac45b696b2",
    "isActive": false,
    "points": 67,
    "age": 23,
    "eyeColor": "blue",
    "firstName": "Bailey",
    "lastName": "Schneider",
    "gender": "male",
    "company": "OBONES",
    "email": "baileyschneider@obones.com"
  }
]

const result = users
  .map(user => {
    const userToMap = user;
    const newPoints = userToMap.points >= 50 ? 0 : userToMap.points;
    userToMap['points'] = newPoints;
    userToMap['firstName'] = user.firstName.toLowerCase();
    userToMap['lastName'] = user.lastName.toUpperCase();
    return userToMap;
  }).sort((a, b) => a.age - b.age)
console.log('====================================');
console.log(users, result);
console.log('====================================');