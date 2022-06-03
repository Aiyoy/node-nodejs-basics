import { workerData, parentPort, BroadcastChannel } from 'worker_threads';

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
  const res = nthFibonacci(workerData);
  
  const inf = {
    status: 'error',
    data: null
  }

  if (res) {
    inf.status = 'resolved';
    inf.data = res;
  }

  parentPort.postMessage(inf);
};

sendResult();
