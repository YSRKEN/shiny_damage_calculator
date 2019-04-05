import * as React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { LOCAL_KEY, reduce } from 'src/reducer';
import { calcMemorialDamage, calcNormalDamage } from 'src/simulator';
import { AppealTarget, DEFAULT_STATE, IAction, IAppState } from 'src/state';
import { range } from 'src/utility';
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

  const memorialDamageGood = calcMemorialDamage(state, true);
  const memorialDamageBad = calcMemorialDamage(state, false);
  const normalDamage = range(5).map(index => {
    return ['vo', 'vi', 'da'].map(type => {
      const type2 = type as AppealTarget;
      return [
        calcNormalDamage(state, index, type2, 2.5, 'perfect'),
        calcNormalDamage(state, index, type2, 2.5, 'good')
      ]
    });
  });

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
            <strong>通常アピール</strong><br/>
            {
              range(5).map(index => {
                return (
                  <>
                    <span>{index === 0 ? '・pアイドル' : `・s${index-1}アイドル`}</span><br/>
                    <span>　Vo2.5倍→{normalDamage[index][0][0]}/{normalDamage[index][0][1]}</span><br/>
                    <span>　Da2.5倍→{normalDamage[index][1][0]}/{normalDamage[index][1][1]}</span><br/>
                    <span>　Vi2.5倍→{normalDamage[index][2][0]}/{normalDamage[index][2][1]}</span><br/>
                    <br/>
                  </>
                )
              })
            }
            <strong>思い出アピール</strong><br/>
            Good：Vo{memorialDamageGood[0]}, Da{memorialDamageGood[1]}, Vi{memorialDamageGood[2]}<br/>
            Bad：Vo{memorialDamageBad[0]}, Da{memorialDamageBad[1]}, Vi{memorialDamageBad[2]}
          </div>
        </Col>
      </Row>
    </AppContext.Provider>
  );
}

export default App;
