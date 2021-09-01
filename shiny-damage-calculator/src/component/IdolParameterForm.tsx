import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { range } from 'utility';
import { AppContext } from 'component/App';
import { IdolParameter } from 'component/IdolParameter';

export const IdolParameterForm: React.FC = () => {
  const context = React.useContext(AppContext);

  const [presetName, setPresetName] = useState('');

  useEffect(() => {
    if (context.state.presetList !== undefined) {
      if (context.state.presetList.length > 0 && !presetNameList().includes(presetName)) {
        setPresetName(context.state.presetList[0].idolStatusName);
      }
    }
  }, [context.state.presetList]);

  const disableAddFlg = () => {
    if (context.state.idolStatusName === '') {
      return true;
    }
    if (context.state.presetList !== undefined) {
      if (context.state.presetList.map(p => p.idolStatusName).includes(context.state.idolStatusName)) {
        return true;
      }
    }
    return false;
  }

  const presetNameList = () => {
    if (context.state.presetList === undefined) {
      return [];
    }
    return context.state.presetList.map(p => p.idolStatusName);
  }

  const loadPreset = () => {
    context.dispatch({ type: 'LOAD_PRESET', value: presetName });
  };

  const updatePreset = () => {
    context.dispatch({ type: 'UPDATE_PRESET', value: presetName });
  };

  const deletePreset = () => {
    if (window.confirm(`「${presetName}」を削除しますか？`)) {
      context.dispatch({ type: 'DELETE_PRESET', value: presetName });
    }
  };

  return (
    <details className='border p-1'>
      <summary>アイドルのステータス</summary>
      <Form.Group className='m-3'>
        <Form.Control placeholder='プリセットの名称' value={context.state.idolStatusName}
          // tslint:disable-next-line: jsx-no-lambda
          onChange={(e: any) => context.dispatch({ 'type': 'STATUS_NAME', 'value': e.currentTarget.value })} />
      </Form.Group>
      <IdolParameter />
      {
        range(4).map(i => (
          <IdolParameter key={i} produce={false} index={i} />
        ))
      }
      <Form.Group className='m-3 d-flex'>
        <Button className="d-block mr-3 text-nowrap"
          // tslint:disable-next-line: jsx-no-lambda
          onClick={() => context.dispatch({ 'type': 'ADD_PRESET', 'value': '' })}
          disabled={disableAddFlg()}>追加</Button>
        <Form.Control as="select" className="mr-3" value={presetName}
          // tslint:disable-next-line: jsx-no-lambda
          onChange={(e: any) => setPresetName(e.currentTarget.value)}>
          {
            presetNameList().map(name => <option key={name}>{name}</option>)
          }
        </Form.Control>
        <Button className="d-block mr-3 text-nowrap"
          disabled={presetNameList().length === 0}
          onClick={loadPreset}>読込み</Button>
        <Button className="d-block mr-3 text-nowrap" variant="warning"
          disabled={presetNameList().length === 0 || (presetNameList().includes(context.state.idolStatusName) && presetName !== context.state.idolStatusName)}
          onClick={updatePreset}>上書き</Button>
        <Button className="d-block mr-3 text-nowrap" variant="danger"
          disabled={presetNameList().length === 0}
          onClick={deletePreset}>削除</Button>
      </Form.Group>
    </details>
  );
}
