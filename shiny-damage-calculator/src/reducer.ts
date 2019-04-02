import { AppealTarget, IAction, IAppState } from './state';

export const LOCAL_KEY = 'shiny-damage-calculator_state';

export const reduce = (state: IAppState, setState: (s: IAppState) => void, action: IAction) => {
  const newState: IAppState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case 'P_IDOL':
      const pStatusType = action.value.split(',')[0];
      const pStatusValue = parseInt(action.value.split(',')[1], 10);
      newState.pIdolStatus[pStatusType] = pStatusValue;
      break;
    case 'S_IDOL':
      const sStatusIndex = parseInt(action.value.split(',')[0], 10);
      const sStatusType = action.value.split(',')[1];
      const sStatusValue = parseInt(action.value.split(',')[2], 10);
      newState.sIdolStatus[sStatusIndex][sStatusType] = sStatusValue;
      break;
    case 'MEMORIAL':
      newState.memorialOption = parseInt(action.value, 10);
      break;
    case 'WEEK':
      newState.auditionWeek = parseInt(action.value, 10);
      break;
    case 'BUFF':
      const buffType = action.value.split(',')[0];
      const buffValue = parseInt(action.value.split(',')[1], 10);
      newState.buffValue[buffType] = buffValue;
      break;
    case 'TARGET':
      newState.appealTarget = action.value as AppealTarget;
      break;
  }
  // tslint:disable-next-line:no-console
  console.log(newState);
  window.localStorage.setItem(LOCAL_KEY, JSON.stringify(newState));
  setState(newState);
}
