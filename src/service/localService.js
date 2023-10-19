export const userLocalStorage = {
  get: () => {
    return JSON.parse(localStorage.getItem("user"));
  },
  set: (value) => {
    localStorage.setItem("user", JSON.stringify(value));
  },
  remove: () => {
    localStorage.removeItem("user");
  },
};

export const phimLocalStorage = {
  get: () => {
    return JSON.parse(localStorage.getItem("phim"));
  },
  set: (value) => {
    localStorage.setItem("phim", JSON.stringify(value));
  },
  remove: () => {
    localStorage.removeItem("phim");
  },
};

export const heThongRapLocalStorage = {
  get: () => {
    return JSON.parse(localStorage.getItem("heThongRap"));
  },
  set: (value) => {
    localStorage.setItem("heThongRap", JSON.stringify(value));
  },
  remove: () => {
    localStorage.removeItem("heThongRap");
  },
};

export const cumRapLocalStorage = {
  get: () => {
    return JSON.parse(localStorage.getItem("cumRap"));
  },
  set: (value) => {
    localStorage.setItem("cumRap", JSON.stringify(value));
  },
  remove: () => {
    localStorage.removeItem("cumRap");
  },
};

export const ngayLocalStorage = {
  get: () => {
    return JSON.parse(localStorage.getItem("ngay"));
  },
  set: (value) => {
    localStorage.setItem("ngay", JSON.stringify(value));
  },
  remove: () => {
    localStorage.removeItem("ngay");
  },
};

export const gioLocalStorage = {
  get: () => {
    return JSON.parse(localStorage.getItem("gio"));
  },
  set: (value) => {
    localStorage.setItem("gio", JSON.stringify(value));
  },
  remove: () => {
    localStorage.removeItem("gio");
  },
};

export const moviesByTheaterLocalStorage = {
  get: () => {
    return JSON.parse(localStorage.getItem("moviesByTheater"));
  },
  set: (value) => {
    localStorage.setItem("moviesByTheater", JSON.stringify(value));
  },
  remove: () => {
    localStorage.removeItem("moviesByTheater");
  },
};
