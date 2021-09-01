import * as React from 'react';
import { AppealTarget } from 'component/AppealTarget';
import { AuditionWeek } from 'component/AuditionWeek';
import { BuffValue } from 'component/BuffValue';
import { MemorialOption } from 'component/MemorialOption';

export const OtherOptionForm: React.FC = () => (
  <details className='border p-1'>
    <summary>その他オプション</summary>
    <MemorialOption />
    <AuditionWeek />
    <BuffValue />
    <AppealTarget />
  </details>
);
