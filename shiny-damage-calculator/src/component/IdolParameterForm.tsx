import * as React from 'react';
import { Form } from 'react-bootstrap';
import { range } from '../utility';
import { AppContext } from './App';
import { IdolParameter } from './IdolParameter';

export const IdolParameterForm: React.FC = () => {
  const context = React.useContext(AppContext);

  return (
    <details className='border p-1'>
      <summary>アイドルのステータス</summary>
      <Form.Group className='m-3'>
        <Form.Control placeholder='プリセットの名称' value={context.state.idolStatusName}
          // tslint:disable-next-line: jsx-no-lambda
          onChange={(e: any) => context.dispatch({'type': 'STATUS_NAME', 'value': e.currentTarget.value })} />
      </Form.Group>
      <IdolParameter />
      {
        range(4).map(i => (
          <IdolParameter key={i} produce={false} index={i} />
        ))
      }
    </details>
  );
}
