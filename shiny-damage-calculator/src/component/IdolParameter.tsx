import * as React from 'react';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';

export const IdolParameter: React.FC<{label: string}> = ({label}) => (
  <FormGroup className='d-flex m-3'>
    <FormLabel className='text-nowrap mt-2 mr-1'>{label}</FormLabel>
    <FormControl className='mx-1' type='text' placeholder='Vo' defaultValue='150'/>
    <FormControl className='mx-1' type='text' placeholder='Da' defaultValue='150'/>
    <FormControl className='ml-1' type='text' placeholder='Vi' defaultValue='150'/>
  </FormGroup>
);
