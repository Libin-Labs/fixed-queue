import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('enqueues until full', () => {
  const q = new api.FixedQueue(2);
  assert.equal(q.enqueue(1), true);
  assert.equal(q.enqueue(2), true);
  assert.equal(q.enqueue(3), false);
});
test('dequeues FIFO order', () => {
  const q = new api.FixedQueue(2);
  q.enqueue('a');
  q.enqueue('b');
  assert.equal(q.dequeue(), 'a');
});
test('peeks without removing', () => {
  const q = new api.FixedQueue(2);
  q.enqueue('a');
  assert.equal(q.peek(), 'a');
  assert.equal(q.size, 1);
});
test('reports full state', () => {
  const q = new api.FixedQueue(1);
  q.enqueue(1);
  assert.equal(q.isFull, true);
});
test('clears entries', () => {
  const q = new api.FixedQueue(2);
  q.enqueue(1);
  q.clear();
  assert.equal(q.size, 0);
});
test('returns undefined when empty', () => {
  assert.equal(new api.FixedQueue(2).dequeue(), undefined);
});
