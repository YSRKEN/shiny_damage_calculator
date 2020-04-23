import * as React from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';
import { AppealTarget } from '../state';
import { idolWord } from '../utility';
import { AppContext } from './App';

export const IdolParameter: React.FC<{produce?: boolean, index?: number}> = ({produce=true, index=-1}) => {
  const context = React.useContext(AppContext);

  const onChange = (value: any, type: AppealTarget) => {
    if (typeof value === 'string') {
      const parsedValue = parseInt(value, 10);
      if (parsedValue === parsedValue) {
        if (produce) {
          context.dispatch({'type': 'P_IDOL', 'value': `${type},${value}`});
        } else {
          context.dispatch({'type': 'S_IDOL', 'value': `${index},${type},${value}`});
        }
      }
    }
  }

  const onChangeName =  (event: React.FormEvent<any>) => {
    if (produce) {
      context.dispatch({'type': 'P_NAME', 'value': event.currentTarget.value});
    } else {
      context.dispatch({'type': 'S_NAME', 'value': `${index},${event.currentTarget.value}`});
    }
  }

  const onChangeVo = (event: React.FormEvent<any>) => {
    onChange(event.currentTarget.value, 'vo');
  }

  const onChangeDa = (event: React.FormEvent<any>) => {
    onChange(event.currentTarget.value, 'da');
  }

  const onChangeVi = (event: React.FormEvent<any>) => {
    onChange(event.currentTarget.value, 'vi');
  }

  const defaultName = () => {
    if (produce) {
      return '' + context.state.pIdolName;
    } else {
      return '' + context.state.sIdolName[index];
    }
  }

  const defaultValue = (type: AppealTarget) => {
    if (produce) {
      return '' + context.state.pIdolStatus[type];
    } else {
      return '' + context.state.sIdolStatus[index][type];
    }
  }

  return (
    <FormGroup className='d-flex m-3'>
      <FormControl className='mx-1' type='text' placeholder={produce ? `p${idolWord()}` : `s${index+1}${idolWord()}`}
        value={defaultName()} onChange={onChangeName}/>
      <FormControl className='mx-1' type='text' placeholder='Vo' value={defaultValue('vo')} onChange={onChangeVo}/>
      <FormControl className='mx-1' type='text' placeholder='Da' value={defaultValue('da')} onChange={onChangeDa}/>
      <FormControl className='ml-1' type='text' placeholder='Vi' value={defaultValue('vi')} onChange={onChangeVi}/>
    </FormGroup>
  )
};
