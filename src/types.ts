export interface Score {
  name: string;
  score: number;
  contact: string;
}

export interface Ranking {
  entries: [Score];
  name: string;
}
