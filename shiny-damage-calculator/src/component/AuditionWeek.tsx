import * as React from 'react';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { range } from 'src/utility';

export const AuditionWeek: React.FC = () => {
  // tslint:disable-next-line: no-empty
  const onChange = () => {
  };
  return (
    <FormGroup className='d-flex m-3'>
      <FormLabel className='text-nowrap mt-2 mr-1'>オーデ週</FormLabel>
      <FormControl className='mx-1' as='select' defaultValue='33' onChange={onChange}>
        {
          range(34).map(i => {
            let text = `${Math.floor(i / 8) + 1}-${8 - i % 8}`
            if (i === 32) {
              text = '準決勝';
            } else if (i === 33) {
              text = '決勝';
            }
            return (<option key={i} value={'' + i}>{text}</option>);
          })
        }
      </FormControl>
    </FormGroup>
  )
};
