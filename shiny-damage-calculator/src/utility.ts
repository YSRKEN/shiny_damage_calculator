export const range = (n: number) => Array.from(Array(n), (_, k) => k);

export const isPC = () => window.innerWidth >= 768;

export const idolWord = () => isPC() ? 'アイドル' : '';
