import { boolean } from "yup/lib/locale";

export const serverUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.vzletaem.ru"
    : "https://api-dev.vzletaem.ru";

export const colors = {
  primary: "#FF5A57",
  secondary: "#FFC400",
  black: "#2f2f2f",
  gray: "#4F4F4F",
};

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
