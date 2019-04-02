// ステータス情報
export interface IStatus {
  vo: number
  da: number
  vi: number
}

export type AppealTarget = 'vo' | 'da' | 'vi'

// アプリケーション全体のState
export interface IAppState {
  pIdolStatus: IStatus,
  sIdolStatus: IStatus[]
  memorialOption: number,
  auditionWeek: number,
  buffValue: IStatus,
  appealTarget: AppealTarget
}

export const DEFAULT_STATE: IAppState = {
  pIdolStatus: {vo: 500, da: 150, vi: 150},
  sIdolStatus: [
    {vo: 150, da: 150, vi: 150},
    {vo: 150, da: 150, vi: 150},
    {vo: 150, da: 150, vi: 150},
    {vo: 150, da: 150, vi: 150}
  ],
  // tslint:disable-next-line:object-literal-sort-keys
  memorialOption: 2,
  auditionWeek: 33,
  buffValue: {vo: 0, da: 0, vi: 0},
  appealTarget: 'vo'
}
