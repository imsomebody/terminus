export type FeedRow = {
  text: string;
  type: "input" | "output";
  id: number;
};

export type Command = {
    text: string;
}