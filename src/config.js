const apilist = [
  "56d19d5063f6f61b08547199ee5c2671",
  "4c1a9bc9b3fa274cc1facf979d5f790b",
];
let rand_no = Math.floor(Math.random() * apilist.length);

export const NEWS_API_KEY = apilist[rand_no];
