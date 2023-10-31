// const BASE_URL = "http://localhost:6868/";
const BASE_URL = "https://unknown-movie.adaptable.app/";

export const USER_BASE_URL = `${BASE_URL}users`;

export const CAROUSEL_BASE_URL = `${BASE_URL}carousels`;

export const MOVIES_BASE_URL = `${BASE_URL}movies`;

export const COMMENT_BASE_URL = `${BASE_URL}comments`;

export const THEATER_BASE_URL = `${BASE_URL}theaters`;

export const BRANCH_BASE_URL = `${BASE_URL}branches`;

export const SCHEDULE_IN_TOTAL_BASE_URL = `${BASE_URL}schedulesInTotal`;

export const SEAT_BASE_URL = `${BASE_URL}seats`;

export const TINH_ANH_BASE_URL = `${BASE_URL}users/tinh-anh`;

export const TICKET_BASE_URL = `${BASE_URL}tickets`;

export const THEATER_BASE_URL1 =
  "https://movienew.cybersoft.edu.vn/api/QuanLyRap";

const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOCIsIkhldEhhblN0cmluZyI6IjA3LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTc2OTYwMDAwMCIsIm5iZiI6MTY4Njc2MjAwMCwiZXhwIjoxNzA5OTE3MjAwfQ.KMixzquIcyG1HcsZ_iekv3cHfqWMebGVfzp349mNosg";

export const config = {
  headers: { TokenCybersoft: TOKEN_CYBERSOFT },
};
