// ステータス情報
export interface IStatus {
  vo: number
  da: number
  vi: number
}

// アピール対象
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

// Stateの初期値
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

// Actionの種類
export type ActionType = 'P_IDOL' | 'S_IDOL' | 'MEMORIAL' | 'WEEK' | 'BUFF' | 'TARGET'

// Actionを表すinterface
export interface IAction {
  type: ActionType
  value: string
}
