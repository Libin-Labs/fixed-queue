export class FixedQueue<T> {
  private readonly items: T[] = [];
  constructor(readonly capacity: number) {
    if (!Number.isSafeInteger(capacity) || capacity < 1 || capacity > 1000000)
      throw new RangeError('Capacity must be 1 through 1,000,000');
  }
  enqueue(value: T): boolean {
    if (this.items.length >= this.capacity) return false;
    this.items.push(value);
    return true;
  }
  dequeue(): T | undefined {
    return this.items.shift();
  }
  peek(): T | undefined {
    return this.items[0];
  }
  clear(): void {
    this.items.length = 0;
  }
  get size(): number {
    return this.items.length;
  }
  get isFull(): boolean {
    return this.size === this.capacity;
  }
}
