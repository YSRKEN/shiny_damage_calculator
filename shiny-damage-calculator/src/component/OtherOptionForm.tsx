import * as React from 'react';
import { AppealTarget } from './AppealTarget';
import { AuditionWeek } from './AuditionWeek';
import { BuffValue } from './BuffValue';
import { MemorialOption } from './MemorialOption';

export const OtherOptionForm: React.FC = () => (
  <details className='border p-1'>
    <summary>その他オプション</summary>
    <MemorialOption/>
    <AuditionWeek/>
    <BuffValue/>
    <AppealTarget/>
  </details>
);
