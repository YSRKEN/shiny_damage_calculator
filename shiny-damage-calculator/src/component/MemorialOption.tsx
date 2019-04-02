import * as React from 'react';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { range } from 'src/utility';

export const MemorialOption: React.FC = () => {
  // tslint:disable-next-line: no-empty
  const onChange = () => {
  };
  return (
    <FormGroup className='d-flex m-3'>
      <FormLabel className='text-nowrap mt-2 mr-1'>思い出Lv</FormLabel>
      <FormControl className='mx-1' as='select' defaultValue='3' onChange={onChange}>
        {
          range(5).map(i => (
            <option key={i} value={'' + (i+1)}>Lv.{i+1}</option>
          ))
        }
      </FormControl>
    </FormGroup>
  )
};
