import * as api from '@lp-labs/fixed-queue';
import { FixedQueue } from '@lp-labs/fixed-queue';
const queue = new FixedQueue(2);
queue.enqueue('job');
console.log(queue.dequeue());
// @ts-expect-error invalid argument must be rejected by declarations
api.FixedQueue('zero');
