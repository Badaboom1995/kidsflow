const isDev = window.location.href.includes('kidsflow-admin-dev')
export const serverUrl =
  process.env.NODE_ENV === "production" && !isDev
    ? "https://api.vzletaem.ru"
    : "https://api-dev.vzletaem.ru";

export const colors = {
  primary: "#FF5A57",
  secondary: "#FFC400",
  back: "#FFF0D3",
  border: "rgba(0, 0, 0, 0.1)",
  black: "#2f2f2f",
  gray: "#4F4F4F",
};

export const gender = [
  { name: "Мужской", value: '0' },
  { name: "Женский", value: '1' },
  { name: "Неважно", value: '2' },
];

export const getSchedule = () => {
  var quarterHours = ["00", "15", "30", "45"];
  var times = [];
  for (var i = 0; i < 24; i++) {
    for (var j = 0; j < 4; j++) {
      const timeString = i + ":" + quarterHours[j];
      times.push({ name: timeString, value: timeString });
    }
  }
  return times;
};

export const directions = [
  { name: "IT", value: "IT" },
  { name: "Иностранные Языки", value: "ForeignLanguage" },
  { name: "Музыка", value: "Music" },
  { name: "Наука", value: "Science" },
  { name: "Спорт", value: "Sport" },
  { name: "Кастинги", value: "Casting" },
  { name: "Танцы", value: "Dance" },
  { name: "Креативный центр", value: "CreativityCenter" },
  { name: "Центр развития детей", value: "ChildrenDevelopmentCenter" },
];

export const getAge = (max: number) => {
  const ageArray = [];
  for (let i = 1; i <= max; i++) {
    ageArray.push({ name: i.toString(), value: i.toString() });
  }
  return ageArray;
};

export const imagePlaceholder = 'https://i.stack.imgur.com/mwFzF.png'
