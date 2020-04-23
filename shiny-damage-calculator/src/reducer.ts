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
    case 'P_NAME':
      newState.pIdolName = action.value;
      break;
    case 'S_NAME':
      const sStatusIndex2 = parseInt(action.value.split(',')[0], 10);
      const sStatusName = action.value.split(',')[1];
      newState.sIdolName[sStatusIndex2] = sStatusName;
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
    case 'CARD':
      newState.cardMultiple = parseInt(action.value, 10);
      break;
    case 'STATUS_NAME':
      newState.idolStatusName = action.value;
      break;
    case 'ADD_PRESET':
      if (newState.presetList === undefined) {
        newState.presetList = [];
      }
      newState.presetList.push({
        idolStatusName: state.idolStatusName,
        pIdolStatus: {...state.pIdolStatus},
        sIdolStatus: JSON.parse(JSON.stringify(state.sIdolStatus)),
        // tslint:disable-next-line: object-literal-sort-keys
        pIdolName: state.pIdolName,
        sIdolName: JSON.parse(JSON.stringify(state.sIdolName))
      });
      break;
    case 'LOAD_PRESET':{
      if (state.presetList !== undefined) {
        const temp = state.presetList.filter(p => p.idolStatusName === action.value);
        if (temp.length > 0) {
          newState.idolStatusName = temp[0].idolStatusName;
          // tslint:disable-next-line: no-console
          console.log(temp);
          newState.pIdolStatus =JSON.parse(JSON.stringify(temp[0].pIdolStatus));
          newState.sIdolStatus = JSON.parse(JSON.stringify(temp[0].sIdolStatus));
          newState.pIdolName = temp[0].pIdolName;
          newState.sIdolName = JSON.parse(JSON.stringify(temp[0].sIdolName));
        }
      } 
      break;
    }
    case 'UPDATE_PRESET':{
      if (state.presetList !== undefined) {
        const temp = state.presetList.filter(p => p.idolStatusName === action.value);
        if (temp.length > 0) {
          newState.presetList = [];
          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < state.presetList.length; i += 1) {
            if (state.presetList[i].idolStatusName !== action.value) {
              newState.presetList.push(JSON.parse(JSON.stringify(state.presetList[i])));
            } else {
              newState.presetList.push({
                idolStatusName: state.idolStatusName,
                pIdolStatus: {...state.pIdolStatus},
                sIdolStatus: JSON.parse(JSON.stringify(state.sIdolStatus)),
                // tslint:disable-next-line: object-literal-sort-keys
                pIdolName: state.pIdolName,
                sIdolName: JSON.parse(JSON.stringify(state.sIdolName))
              });
            }
          }
        }
      }
      break;
    }
    case 'DELETE_PRESET': {
      if (state.presetList !== undefined) {
        newState.presetList = [];
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < state.presetList.length; i += 1) {
          if (state.presetList[i].idolStatusName !== action.value) {
            newState.presetList.push(JSON.parse(JSON.stringify(state.presetList[i])));
          }
        }
      }
      break;
    }
  }
  window.localStorage.setItem(LOCAL_KEY, JSON.stringify(newState));
  setState(newState);
}
