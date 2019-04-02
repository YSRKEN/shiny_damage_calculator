import * as React from 'react';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { AppealTarget } from 'src/state';
import { range } from 'src/utility';
import { AppContext } from './App';

const buffValueList = [-10].concat(range(101));

const BuffValueSingle: React.FC<{type: AppealTarget}> = ({type}) => {
  const context = React.useContext(AppContext);

  // tslint:disable-next-line: no-empty
  const onChange = (event: React.FormEvent<any>) => {
    if (event.currentTarget.value !== undefined) {
      context.dispatch({'type': 'BUFF', 'value': `${type},${event.currentTarget.value}`});
    }
  };

  return (
    <FormControl className='mx-1' as='select' defaultValue={'' + context.state.buffValue[type]} onChange={onChange}>
    {
      buffValueList.map(j => {
        const per = j <= 0 ? '' + j : '+' + j;
        return (<option key={j} value={'' + j}>{per}％</option>);
      })
    }
  </FormControl>
  )
};

export const BuffValue: React.FC = () => {
  return (
    <FormGroup className='d-flex m-3'>
      <FormLabel className='text-nowrap mt-2 mr-1'>補正値</FormLabel>
      <BuffValueSingle type='vo'/>
      <BuffValueSingle type='da'/>
      <BuffValueSingle type='vi'/>
    </FormGroup>
  )
};
