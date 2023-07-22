console.log("person1: shows ticket");
console.log("person2: shows titcket");
const preMovie = async () => {
  const promiseWifeBringTickets = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ticket"), 3000);
  });
  const getPopcorn = new Promise((resolve, reject) => resolve("popCorn"));
  const getCandy = new Promise((resolve, reject) => resolve("candy"));
  const addButter = new Promise((resolve, reject) => resolve("butter"));
  const getColdDrinks = new Promise((resolve, reject) => resolve("coke"));

  let ticket = await promiseWifeBringTickets;
  console.log(`wife: i have the ${ticket}`);
  console.log("husband: we should go in");
  console.log("wife: no i am hungry");

  let popCorn = await getPopcorn;
  console.log(`husband: i got some ${popCorn}`);
  console.log("husband: we should go in");
  console.log("wife: no i am hungry");

  let butter = await addButter;
  console.log(`husband: i got some ${butter} on popcorn`);
  console.log("husband: anything else darling?");
  console.log("wife: i want cooldrink");

  let coldDrink = await getColdDrinks;
  console.log(`husband: i got ${coldDrink}`);
  console.log("wife: lets go we are getting late");
  console.log("husband: thank you for the reminder *grins*");

  return ticket;
};

preMovie().then((m) => console.log(`person3: shows ${m}`));
console.log("person4: shows ticket");
console.log("person5: shows titcket");
