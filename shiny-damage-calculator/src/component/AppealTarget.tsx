import * as React from 'react';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';

export const AppealTarget: React.FC = () => {
  // tslint:disable-next-line: no-empty
  const onChange = () => {
  };
  return (
    <FormGroup className='d-flex m-3'>
      <FormLabel className='text-nowrap mt-2 mr-1'>アピール対象</FormLabel>
      <FormControl className='mx-1' as='select' defaultValue='0' onChange={onChange}>
        <option value='0'>Vo審査員</option>
        <option value='1'>Da審査員</option>
        <option value='2'>Vi審査員</option>
      </FormControl>
    </FormGroup>
  )
};
