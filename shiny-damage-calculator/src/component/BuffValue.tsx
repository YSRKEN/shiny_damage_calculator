import * as React from 'react';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { range } from 'src/utility';

export const BuffValue: React.FC = () => {
  // tslint:disable-next-line: no-empty
  const onChange = () => {
  };
  return (
    <FormGroup className='d-flex m-3'>
      <FormLabel className='text-nowrap mt-2 mr-1'>補正値</FormLabel>
      {
        range(3).map(i => (
          <FormControl key={i} className='mx-1' as='select' defaultValue='0' onChange={onChange}>
            {
              range(26).map(j => {
                const per = j < 5 ? `${j * 10 - 50}` : j === 5 ? '0' : `+${j * 10 - 50}`
                return (<option key={j} value={per}>{per}％</option>);
              })
            }
          </FormControl>
        ))
      }
    </FormGroup>
  )
};
