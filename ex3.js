/////////////////////////////////////////////////////////////////

console.log("person1: shows ticket");
console.log("person2: shows titcket");
const preMovie = async () => {
  const promiseWifeBringTickets = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ticket"), 3000);
  });
  const getPopcorn = new Promise((resolve, reject) => resolve("popCorn"));
  const getCandy = new Promise((resolve, reject) => resolve("candy"));
  const getColdDrinks = new Promise((resolve, reject) => resolve("coke"));
  let ticket = await promiseWifeBringTickets;

  let [popcorn, candy, coke] = await Promise.all([
    getPopcorn,
    getCandy,
    getColdDrinks,
  ]);
  console.log(`${popcorn}, ${candy}, ${coke}`);
  return ticket;
};
preMovie().then((m) => console.log(`person3: shows ${m}`));
console.log("person4: shows ticket");
console.log("person5: shows titcket");
