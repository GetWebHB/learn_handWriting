export interface ILinkedList<T> {
  append(element: T): void;
  insert(position: number, element: T): boolean;
  get(position: number): T;
  indexOf(element: T): number;
  update(position, value: T): boolean;
  removeAt(position: number): boolean;
  remove(element: T): boolean;
  get isEmpty(): boolean;
  get size(): number;
}
