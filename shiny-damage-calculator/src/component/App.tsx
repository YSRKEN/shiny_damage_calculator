import * as React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { LOCAL_KEY, reduce } from 'src/reducer';
import { DEFAULT_STATE, IAction, IAppState } from 'src/state';
import DamageResult from './DamageResult';
import { IdolParameterForm } from './IdolParameterForm';
import { OtherOptionForm } from './OtherOptionForm';

interface IContext {
  state: IAppState
  dispatch: (action: IAction) => void
}

const defaultState: IAppState = window.localStorage.getItem(LOCAL_KEY) === null
  ? DEFAULT_STATE : JSON.parse('' + window.localStorage.getItem(LOCAL_KEY));

// tslint:disable-next-line: no-empty
export const AppContext = React.createContext<IContext>({'state': defaultState, dispatch: () => {}});

const App: React.FC = () => {
  const [state, setState] = React.useState<IAppState>(defaultState);

  return (
    <AppContext.Provider value={{'state': state, dispatch: (action: IAction) => reduce(state, setState, action)}}>
      <Row>
        <Col className='mx-auto' xs={12} sm={8} md={6}>
          <h1 className='text-center d-none d-sm-block my-3'>シャニマス火力計算機</h1>
          <h2 className='text-center d-xs-block d-sm-none my-3'>シャニマス火力計算機</h2>
          <div className='text-center my-3'>
            Ver.0.2.0<a className='ml-3' href='https://github.com/YSRKEN/shiny_damage_calculator'>GitHubへのリンク</a>
          </div>
          <Form className='border'>
            <IdolParameterForm/>
            <OtherOptionForm/>
          </Form>
          <div className='border'>
            <DamageResult/>
          </div>
        </Col>
      </Row>
    </AppContext.Provider>
  );
}

export default App;
