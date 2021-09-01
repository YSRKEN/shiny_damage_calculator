import { AppealTarget, IStatus } from "state";

export const range = (n: number) => Array.from(Array(n), (_, k) => k);

export const isPC = () => window.innerWidth >= 768;

export const idolWord = () => isPC() ? 'アイドル' : '';

export const getStatus = (status: IStatus, target: AppealTarget) => {
  if (target === 'other') {
    return 0;
  } else {
    return status[target];
  }
}

export const setStatus = (status: IStatus, target: AppealTarget, value: number) => {
  if (target === 'other') {
    return;
  } else {
    status[target] = value;
  }
}
