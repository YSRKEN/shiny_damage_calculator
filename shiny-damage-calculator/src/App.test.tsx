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
  console.log(`${calcNormalDamage(state, 4, 'vi', 2.6, 'perfect')} ${6068}`);
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
  console.log(`${calcNormalDamage(state, 2, 'vi', 2.5, 'perfect')} ${6090}`);
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
    cardMultiple: 2,
    pIdolName: '',
    sIdolName: ['', '', '', '']
  }
// tslint:disable-next-line: no-console
  console.log(`${calcNormalDamage(state, 3, 'vi', 2, 'good')} ${3632}`);
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
console.log(`${calcNormalDamage(state, 4, 'vi', 2.6, 'perfect')} ${8382}`);
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
console.log(`${calcNormalDamage(state, 1, 'vi', 2.6, 'good')} ${6956}`);
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
console.log(`${calcNormalDamage(state, 2, 'vi', 2.5, 'perfect')} ${8410}`);
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
console.log(`${calcNormalDamage(state, 0, 'vi', 2.5, 'good')} ${9400}`);
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
console.log(`${calcNormalDamage(state, 0, 'vi', 2.5, 'good')} ${4512}`);
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
