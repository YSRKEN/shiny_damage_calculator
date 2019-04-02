import * as React from 'react';
import { range } from 'src/utility';
import { IdolParameter } from './IdolParameter';

export const IdolParameterForm: React.FC = () => (
  <details className='border p-1'>
    <summary>アイドルのステータス</summary>
    <IdolParameter label='pアイドル'/>
    {
      range(4).map(i => (
        <IdolParameter key={i} label={`s${i+1}アイドル`}/>
      ))
    }
  </details>
);
