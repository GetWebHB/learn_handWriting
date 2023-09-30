export interface IQueue<T> {
  enqueue(ele: T): void;
  dequeue(): T | undefined;
  front(): T | undefined;
  isEmpty(): boolean;
  size(): number;
}
