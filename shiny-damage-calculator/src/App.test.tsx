import { calcMemorialDamage, calcNormalDamage } from './simulator';
import { IAppState } from "./state";

it('test1', () => {
  const state: IAppState = {
    pIdolStatus: {vo: 80, da: 80, vi: 303},
    sIdolStatus: [
      {vo: 150, da: 140, vi: 160},
      {vo: 138, da: 138, vi: 180},
      {vo: 125, da: 156, vi: 188},
      {vo: 140, da: 140, vi: 159}
    ],
    // tslint:disable-next-line:object-literal-sort-keys
    memorialOption: 0,
    auditionWeek: 17,
    buffValue: {vo: 0, da: 0, vi: 0},
    appealTarget: 'vi',
    cardMultiple: 26,
    pIdolName: '',
    sIdolName: ['', '', '', '']
  }
// tslint:disable-next-line: no-console
  console.log(`${calcNormalDamage(state, 4, 'vi', 'perfect')} ${6068}`);
});

it('test2', () => {
  const state: IAppState = {
    pIdolStatus: {vo: 80, da: 80, vi: 303},
    sIdolStatus: [
      {vo: 150, da: 140, vi: 160},
      {vo: 138, da: 138, vi: 180},
      {vo: 125, da: 156, vi: 188},
      {vo: 140, da: 140, vi: 159}
    ],
    // tslint:disable-next-line:object-literal-sort-keys
    memorialOption: 0,
    auditionWeek: 17,
    buffValue: {vo: 0, da: 0, vi: 0},
    appealTarget: 'vi',
    cardMultiple: 25,
    pIdolName: '',
    sIdolName: ['', '', '', '']
  }
// tslint:disable-next-line: no-console
  console.log(`${calcNormalDamage(state, 2, 'vi', 'perfect')} ${6090}`);
});

it('test3', () => {
  const state: IAppState = {
    pIdolStatus: {vo: 80, da: 80, vi: 303},
    sIdolStatus: [
      {vo: 150, da: 140, vi: 160},
      {vo: 138, da: 138, vi: 180},
      {vo: 125, da: 156, vi: 188},
      {vo: 140, da: 140, vi: 159}
    ],
    // tslint:disable-next-line:object-literal-sort-keys
    memorialOption: 0,
    auditionWeek: 17,
    buffValue: {vo: 0, da: 0, vi: 0},
    appealTarget: 'vi',
    cardMultiple: 20,
    pIdolName: '',
    sIdolName: ['', '', '', '']
  }
// tslint:disable-next-line: no-console
  console.log(`${calcNormalDamage(state, 3, 'vi', 'good')} ${3632}`);
});

it('test4', () => {
  const state: IAppState = {
    pIdolStatus: {vo: 80, da: 80, vi: 303},
    sIdolStatus: [
      {vo: 150, da: 140, vi: 160},
      {vo: 138, da: 138, vi: 180},
      {vo: 125, da: 156, vi: 188},
      {vo: 140, da: 140, vi: 159}
    ],
    // tslint:disable-next-line:object-literal-sort-keys
    memorialOption: 0,
    auditionWeek: 17,
    buffValue: {vo: 0, da: 0, vi: 0},
    appealTarget: 'vi',
    cardMultiple: 25,
    pIdolName: '',
    sIdolName: ['', '', '', '']
  }
// tslint:disable-next-line: no-console
  console.log(`${calcMemorialDamage(state, true)[0]} ${2780}`);
});

it('test5', () => {
  const state: IAppState = {
    pIdolStatus: {vo: 102, da: 96, vi: 430},
    sIdolStatus: [
      {vo: 150, da: 140, vi: 160},
      {vo: 138, da: 138, vi: 180},
      {vo: 125, da: 156, vi: 188},
      {vo: 140, da: 140, vi: 159}
    ],
    // tslint:disable-next-line:object-literal-sort-keys
    memorialOption: 0,
    auditionWeek: 27,
    buffValue: {vo: 0, da: 0, vi: 0},
    appealTarget: 'vi',
    cardMultiple: 26,
    pIdolName: '',
    sIdolName: ['まの', 'まみみ', 'きりこ', 'ちゆき']
  }
// tslint:disable-next-line: no-console
console.log(`${calcNormalDamage(state, 4, 'vi', 'perfect')} ${8382}`);
});

it('test6', () => {
  const state: IAppState = {
    pIdolStatus: {vo: 102, da: 96, vi: 430},
    sIdolStatus: [
      {vo: 150, da: 140, vi: 160},
      {vo: 138, da: 138, vi: 180},
      {vo: 125, da: 156, vi: 188},
      {vo: 140, da: 140, vi: 159}
    ],
    // tslint:disable-next-line:object-literal-sort-keys
    memorialOption: 0,
    auditionWeek: 27,
    buffValue: {vo: 0, da: 0, vi: 13},
    appealTarget: 'vi',
    cardMultiple: 26,
    pIdolName: '',
    sIdolName: ['まの', 'まみみ', 'きりこ', 'ちゆき']
  }
// tslint:disable-next-line: no-console
console.log(`${calcNormalDamage(state, 1, 'vi', 'good')} ${6956}`);
});

it('test7', () => {
  const state: IAppState = {
    pIdolStatus: {vo: 102, da: 96, vi: 430},
    sIdolStatus: [
      {vo: 150, da: 140, vi: 160},
      {vo: 138, da: 138, vi: 180},
      {vo: 125, da: 156, vi: 188},
      {vo: 140, da: 140, vi: 159}
    ],
    // tslint:disable-next-line:object-literal-sort-keys
    memorialOption: 0,
    auditionWeek: 27,
    buffValue: {vo: 0, da: 0, vi: 13},
    appealTarget: 'vi',
    cardMultiple: 25,
    pIdolName: '',
    sIdolName: ['まの', 'まみみ', 'きりこ', 'ちゆき']
  }
// tslint:disable-next-line: no-console
console.log(`${calcNormalDamage(state, 2, 'vi', 'perfect')} ${8410}`);
});

it('test8', () => {
  const state: IAppState = {
    pIdolStatus: {vo: 102, da: 96, vi: 430},
    sIdolStatus: [
      {vo: 150, da: 140, vi: 160},
      {vo: 138, da: 138, vi: 180},
      {vo: 125, da: 156, vi: 188},
      {vo: 140, da: 140, vi: 159}
    ],
    // tslint:disable-next-line:object-literal-sort-keys
    memorialOption: 0,
    auditionWeek: 27,
    buffValue: {vo: 0, da: 0, vi: 25},
    appealTarget: 'vi',
    cardMultiple: 25,
    pIdolName: '',
    sIdolName: ['まの', 'まみみ', 'きりこ', 'ちゆき']
  }
// tslint:disable-next-line: no-console
console.log(`${calcNormalDamage(state, 0, 'vi', 'good')} ${9400}`);
});

it('test9', () => {
  const state: IAppState = {
    pIdolStatus: {vo: 102, da: 96, vi: 430},
    sIdolStatus: [
      {vo: 150, da: 140, vi: 160},
      {vo: 138, da: 138, vi: 180},
      {vo: 125, da: 156, vi: 188},
      {vo: 140, da: 140, vi: 159}
    ],
    // tslint:disable-next-line:object-literal-sort-keys
    memorialOption: 0,
    auditionWeek: 27,
    buffValue: {vo: 0, da: 0, vi: 20},
    appealTarget: 'vo',
    cardMultiple: 25,
    pIdolName: '',
    sIdolName: ['まの', 'まみみ', 'きりこ', 'ちゆき']
  }
// tslint:disable-next-line: no-console
console.log(`${calcNormalDamage(state, 0, 'vi', 'good')} ${4512}`);
});

it('test10', () => {
  const state: IAppState = {
    pIdolStatus: {vo: 102, da: 96, vi: 430},
    sIdolStatus: [
      {vo: 150, da: 140, vi: 160},
      {vo: 138, da: 138, vi: 180},
      {vo: 125, da: 156, vi: 188},
      {vo: 140, da: 140, vi: 159}
    ],
    // tslint:disable-next-line:object-literal-sort-keys
    memorialOption: 0,
    auditionWeek: 27,
    buffValue: {vo: 0, da: 0, vi: 20},
    appealTarget: 'vo',
    cardMultiple: 25,
    pIdolName: '',
    sIdolName: ['まの', 'まみみ', 'きりこ', 'ちゆき']
  }
// tslint:disable-next-line: no-console
console.log(`${calcMemorialDamage(state, true)[1]} ${4181}`);
});

it('test11', () => {
  const state: IAppState = {
    pIdolStatus: {vo: 116, da: 103, vi: 496},
    sIdolStatus: [
      {vo: 150, da: 140, vi: 160},
      {vo: 138, da: 138, vi: 180},
      {vo: 125, da: 156, vi: 188},
      {vo: 140, da: 140, vi: 159}
    ],
    // tslint:disable-next-line:object-literal-sort-keys
    memorialOption: 0,
    auditionWeek: 32,
    buffValue: {vo: 0, da: 0, vi: 0},
    appealTarget: 'vi',
    cardMultiple: 25,
    pIdolName: '',
    sIdolName: ['まの', 'まみみ', 'きりこ', 'ちゆき']
  }
// tslint:disable-next-line: no-console
  console.log(`${calcNormalDamage(state, 0, 'vi', 'perfect')} ${12464}`);
});

it('test12', () => {
  const state: IAppState = {
    pIdolStatus: {vo: 116, da: 103, vi: 496},
    sIdolStatus: [
      {vo: 150, da: 140, vi: 160},
      {vo: 138, da: 138, vi: 180},
      {vo: 125, da: 156, vi: 188},
      {vo: 140, da: 140, vi: 159}
    ],
    // tslint:disable-next-line:object-literal-sort-keys
    memorialOption: 0,
    auditionWeek: 32,
    buffValue: {vo: 0, da: 0, vi: 6},
    appealTarget: 'vi',
    cardMultiple: 20,
    pIdolName: '',
    sIdolName: ['まの', 'まみみ', 'きりこ', 'ちゆき']
  }
// tslint:disable-next-line: no-console
  console.log(`${calcNormalDamage(state, 3, 'vi', 'perfect')} ${8244}`);
});

it('test13', () => {
  const state: IAppState = {
    pIdolStatus: {vo: 116, da: 103, vi: 496},
    sIdolStatus: [
      {vo: 150, da: 140, vi: 160},
      {vo: 138, da: 138, vi: 180},
      {vo: 125, da: 156, vi: 188},
      {vo: 140, da: 140, vi: 159}
    ],
    // tslint:disable-next-line:object-literal-sort-keys
    memorialOption: 0,
    auditionWeek: 32,
    buffValue: {vo: 0, da: 0, vi: 0},
    appealTarget: 'da',
    cardMultiple: 26,
    pIdolName: '',
    sIdolName: ['まの', 'まみみ', 'きりこ', 'ちゆき']
  }
// tslint:disable-next-line: no-console
  console.log(`${calcNormalDamage(state, 1, 'vi', 'perfect')} ${4781}`);
});

it('test14', () => {
  const state: IAppState = {
    pIdolStatus: {vo: 136, da: 123, vi: 500},
    sIdolStatus: [
      {vo: 150, da: 140, vi: 160},
      {vo: 138, da: 138, vi: 180},
      {vo: 125, da: 156, vi: 188},
      {vo: 140, da: 140, vi: 159}
    ],
    // tslint:disable-next-line:object-literal-sort-keys
    memorialOption: 0,
    auditionWeek: 33,
    buffValue: {vo: 0, da: 0, vi: 0},
    appealTarget: 'vi',
    cardMultiple: 26,
    pIdolName: '',
    sIdolName: ['まの', 'まみみ', 'きりこ', 'ちゆき']
  }
// tslint:disable-next-line: no-console
  console.log(`${calcNormalDamage(state, 1, 'vi', 'perfect')} ${9764}`);
});

it('test15', () => {
  const state: IAppState = {
    pIdolStatus: {vo: 136, da: 123, vi: 500},
    sIdolStatus: [
      {vo: 150, da: 140, vi: 160},
      {vo: 138, da: 138, vi: 180},
      {vo: 125, da: 156, vi: 188},
      {vo: 140, da: 140, vi: 159}
    ],
    // tslint:disable-next-line:object-literal-sort-keys
    memorialOption: 0,
    auditionWeek: 33,
    buffValue: {vo: 0, da: 0, vi: 0},
    appealTarget: 'vi',
    cardMultiple: 25,
    pIdolName: '',
    sIdolName: ['まの', 'まみみ', 'きりこ', 'ちゆき']
  }
// tslint:disable-next-line: no-console
  console.log(`${calcNormalDamage(state, 0, 'vi', 'perfect')} ${11924}`);
});

it('test15', () => {
  const state: IAppState = {
    pIdolStatus: {vo: 136, da: 123, vi: 500},
    sIdolStatus: [
      {vo: 150, da: 140, vi: 160},
      {vo: 138, da: 138, vi: 180},
      {vo: 125, da: 156, vi: 188},
      {vo: 140, da: 140, vi: 159}
    ],
    // tslint:disable-next-line:object-literal-sort-keys
    memorialOption: 0,
    auditionWeek: 33,
    buffValue: {vo: 0, da: 0, vi: 20},
    appealTarget: 'vi',
    cardMultiple: 26,
    pIdolName: '',
    sIdolName: ['まの', 'まみみ', 'きりこ', 'ちゆき']
  }
// tslint:disable-next-line: no-console
  console.log(`${calcNormalDamage(state, 4, 'vi', 'good')} ${8574}`);
});
