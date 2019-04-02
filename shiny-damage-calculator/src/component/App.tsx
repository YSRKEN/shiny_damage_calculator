import * as React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { reduce } from 'src/reducer';
import { DEFAULT_STATE, IAction, IAppState } from 'src/state';
import { IdolParameterForm } from './IdolParameterForm';
import { OtherOptionForm } from './OtherOptionForm';

interface IContext {
  dispatch: (action: IAction) => void
}

const App: React.FC = () => {
  const [state, setState] = React.useState<IAppState>(DEFAULT_STATE);
  
  // tslint:disable-next-line:no-empty
  const AppContext = React.createContext<IContext>({dispatch: () => {}});

  return (
    <AppContext.Provider value={{dispatch: (action: IAction) => reduce(state, setState, action)}}>
      <Row>
        <Col className='mx-auto' xs={12} sm={8} md={6}>
          <h1 className='text-center d-none d-sm-block my-3'>シャニマス火力計算機</h1>
          <h2 className='text-center d-xs-block d-sm-none my-3'>シャニマス火力計算機</h2>
          <div className='text-center my-3'>
            Ver.0.1.1<a className='ml-3' href='https://github.com/YSRKEN/shiny_damage_calculator'>GitHubへのリンク</a>
          </div>
          <Form className='border mx-3'>
            <IdolParameterForm/>
            <OtherOptionForm/>
          </Form>
        </Col>
      </Row>
    </AppContext.Provider>
  );
}

export default App;
