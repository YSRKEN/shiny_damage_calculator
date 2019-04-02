import * as React from 'react';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { AppealTarget } from 'src/state';
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

  const onChangeVo = (event: React.FormEvent<any>) => {
    onChange(event.currentTarget.value, 'vo');
  }

  const onChangeDa = (event: React.FormEvent<any>) => {
    onChange(event.currentTarget.value, 'da');
  }

  const onChangeVi = (event: React.FormEvent<any>) => {
    onChange(event.currentTarget.value, 'vi');
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
      <FormLabel className='text-nowrap mt-2 mr-1'>{produce ? 'pアイドル' : `s${index+1}アイドル`}</FormLabel>
      <FormControl className='mx-1' type='text' placeholder='Vo' defaultValue={defaultValue('vo')} onChange={onChangeVo}/>
      <FormControl className='mx-1' type='text' placeholder='Da' defaultValue={defaultValue('da')} onChange={onChangeDa}/>
      <FormControl className='ml-1' type='text' placeholder='Vi' defaultValue={defaultValue('vi')} onChange={onChangeVi}/>
    </FormGroup>
  )
};
