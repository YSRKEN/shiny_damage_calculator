import * as React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { LOCAL_KEY, reduce } from 'reducer';
import { DEFAULT_STATE, IAction, IAppState } from 'state';
import DamageResult from 'component/DamageResult';
import { IdolParameterForm } from 'component/IdolParameterForm';
import { OtherOptionForm } from 'component/OtherOptionForm';

interface IContext {
  state: IAppState
  dispatch: (action: IAction) => void
}

const defaultState: IAppState = window.localStorage.getItem(LOCAL_KEY) === null
  ? DEFAULT_STATE : JSON.parse('' + window.localStorage.getItem(LOCAL_KEY));
if (defaultState.presetList === undefined) {
  defaultState.presetList = [];
}

// tslint:disable-next-line: no-empty
export const AppContext = React.createContext<IContext>({ 'state': defaultState, dispatch: () => { } });

const App: React.FC = () => {
  const [state, setState] = React.useState<IAppState>(defaultState);

  return (
    <AppContext.Provider value={{ 'state': state, dispatch: (action: IAction) => reduce(state, setState, action) }}>
      <Row>
        <Col className='mx-auto' xs={12} sm={8} md={6}>
          <h1 className='text-center d-none d-sm-block my-3'>シャニマス火力計算機</h1>
          <h2 className='text-center d-xs-block d-sm-none my-3'>シャニマス火力計算機</h2>
          <div className='text-center my-3'>
            Ver.0.7.0
            <a className='ml-3' href='https://github.com/YSRKEN/shiny_damage_calculator'>GitHubへのリンク</a>
            <a className='ml-3' href='https://twitter.com/YSRKEN'>作者Twitter</a>
          </div>
          <p className='text-center my-3'>
            注意：ダメージ計算式には未解明の箇所もあるため<strong>計算誤差が存在します</strong>
          </p>
          <Form className='border'>
            <IdolParameterForm />
            <OtherOptionForm />
          </Form>
          <div className='border'>
            <DamageResult />
          </div>
        </Col>
      </Row>
    </AppContext.Provider>
  );
}

export default App;
