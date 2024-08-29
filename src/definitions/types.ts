export type FeedRow = {
  text: string;
  type: "input" | "output";
  id: number;
};

export type Command = {
    text: string;
}

export type CommandArg = {
  key: string
  value: string
}

export type ParsedRunnable<T> = {
  id: string;
  action: Runnable<T>;
}
export type Runnable<T> = (raw: T) => Promise<void>
export type RunnableStorage<T> = {
  [key: string]: ParsedRunnable<T>
}