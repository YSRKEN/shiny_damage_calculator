import * as React from 'react';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { range } from '../utility';
import { AppContext } from './App';

export const AuditionWeek: React.FC = () => {
  const context = React.useContext(AppContext);

  const onChange = (event: React.FormEvent<any>) => {
    if (event.currentTarget.value !== undefined) {
      context.dispatch({'type': 'WEEK', 'value': event.currentTarget.value});
    }
  };
  return (
    <FormGroup className='d-flex m-3'>
      <FormLabel className='text-nowrap mt-2 mr-1'>オーデ週</FormLabel>
      <FormControl className='mx-1' as='select' defaultValue={'' + context.state.auditionWeek} onChange={onChange}>
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
