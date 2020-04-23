// ステータス情報
export interface IStatus {
  vo: number
  da: number
  vi: number
}

// アピール対象
export type AppealTarget = 'vo' | 'da' | 'vi' | 'other';

// ステータスのプリセット
export interface IStatusPreset {
  idolStatusName: string;
  pIdolStatus: IStatus;
  sIdolStatus: IStatus[];
  pIdolName: string;
  sIdolName: string[];
}

// アプリケーション全体のState
export interface IAppState {
  idolStatusName: string;
  pIdolStatus: IStatus;
  sIdolStatus: IStatus[];
  memorialOption: number;
  auditionWeek: number;
  buffValue: IStatus;
  appealTarget: AppealTarget;
  cardMultiple: number;
  pIdolName: string;
  sIdolName: string[];
  presetList?: IStatusPreset[];
}

// Stateの初期値
export const DEFAULT_STATE: IAppState = {
  idolStatusName: '',
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
  appealTarget: 'vo',
  cardMultiple: 20,
  pIdolName: '',
  sIdolName: ['', '', '', ''],
  presetList: []
}

// Actionの種類
export type ActionType = 'P_IDOL' | 'S_IDOL' | 'P_NAME' | 'S_NAME' | 'MEMORIAL' | 'WEEK' | 'BUFF' | 'TARGET' | 'CARD' | 'STATUS_NAME' | 'ADD_PRESET' | 'LOAD_PRESET' | 'UPDATE_PRESET';

// Actionを表すinterface
export interface IAction {
  type: ActionType
  value: string
}
