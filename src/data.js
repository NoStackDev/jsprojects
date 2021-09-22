const weekDays = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};
let data = [
  {
    subject: "Take out trash",
    body: "Take out garbage by 6PM on friday. The garbage truck comes around on saturday",
    timeCreated: `${new Date().getMonth()}, ${weekDays[new Date().getDay()]}`,
  },
  {
    subject: "Get tickets for Lupin the Third: The First",
    body: "Lupin the Third: The First comes out next week, get tickets for the family to go see it",
    timeCreated: `${new Date().getMonth()}, ${weekDays[new Date().getDay()]}`,
  },
];

export default data;
