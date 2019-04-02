import * as React from 'react';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { range } from 'src/utility';
import { AppContext } from './App';

export const MemorialOption: React.FC = () => {
  const context = React.useContext(AppContext);

  const onChange = (event: React.FormEvent<any>) => {
    if (event.currentTarget.value !== undefined) {
      context.dispatch({'type': 'MEMORIAL', 'value': event.currentTarget.value});
    }
  };
  return (
    <FormGroup className='d-flex m-3'>
      <FormLabel className='text-nowrap mt-2 mr-1'>思い出Lv</FormLabel>
      <FormControl className='mx-1' as='select' defaultValue={'' + context.state.memorialOption} onChange={onChange}>
        {
          range(5).map(i => (
            <option key={i} value={'' + i}>Lv.{i+1}</option>
          ))
        }
      </FormControl>
    </FormGroup>
  )
};
