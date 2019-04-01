import * as React from 'react';
import { Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';

const range = (n: number) => Array.from(Array(n), (_, k) => k);

const IdolParameter: React.FC<{label: string}> = ({label}) => (
  <FormGroup className='d-flex m-3'>
    <FormLabel className='text-nowrap mt-2 mr-1'>{label}</FormLabel>
    <FormControl className='mx-1' type='text' placeholder='Vo' defaultValue='150'/>
    <FormControl className='mx-1' type='text' placeholder='Da' defaultValue='150'/>
    <FormControl className='ml-1' type='text' placeholder='Vi' defaultValue='150'/>
  </FormGroup>
);

const IdolParameterForm: React.FC = () => (
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

const MemorialOption: React.FC = () => {
  // tslint:disable-next-line: no-empty
  const onChange = () => {
  };
  return (
    <FormGroup className='d-flex m-3'>
      <FormLabel className='text-nowrap mt-2 mr-1'>思い出Lv</FormLabel>
      <FormControl className='mx-1' as='select' value='3' onChange={onChange}>
        {
          range(5).map(i => (
            <option key={i} value={'' + (i+1)}>Lv.{i+1}</option>
          ))
        }
      </FormControl>
    </FormGroup>
  )
};

const AuditionWeek: React.FC = () => {
  // tslint:disable-next-line: no-empty
  const onChange = () => {
  };
  return (
    <FormGroup className='d-flex m-3'>
      <FormLabel className='text-nowrap mt-2 mr-1'>オーデ週</FormLabel>
      <FormControl className='mx-1' as='select' value='33' onChange={onChange}>
        {
          range(34).map(i => {
            let text = `${Math.floor(i / 8) + 1}-${8 - i % 8}`
            if (i === 32) {
              text = '準決勝';
            } else if (i === 33) {
              text = '決勝';
            }
            return (<option key={i} value={'' + i}>{text}</option>);
          })
        }
      </FormControl>
    </FormGroup>
  )
};

const BuffValue: React.FC = () => {
  // tslint:disable-next-line: no-empty
  const onChange = () => {
  };
  return (
    <FormGroup className='d-flex m-3'>
      <FormLabel className='text-nowrap mt-2 mr-1'>補正値</FormLabel>
      {
        range(3).map(i => (
          <FormControl key={i} className='mx-1' as='select' value='0' onChange={onChange}>
            {
              range(26).map(j => {
                const per = `${j * 10 - 50}`
                return (<option key={j} value={per}>{per}％</option>);
              })
            }
          </FormControl>
        ))
      }
    </FormGroup>
  )
};

const AppealTarget: React.FC = () => {
  // tslint:disable-next-line: no-empty
  const onChange = () => {
  };
  return (
    <FormGroup className='d-flex m-3'>
      <FormLabel className='text-nowrap mt-2 mr-1'>アピール対象</FormLabel>
      <FormControl className='mx-1' as='select' value='0' onChange={onChange}>
        <option value='0'>Vo審査員</option>
        <option value='1'>Da審査員</option>
        <option value='2'>Vi審査員</option>
      </FormControl>
    </FormGroup>
  )
};

const OtherOptionForm: React.FC = () => (
  <details className='border p-1'>
    <summary>その他オプション</summary>
    <MemorialOption/>
    <AuditionWeek/>
    <BuffValue/>
    <AppealTarget/>
  </details>
);

const App: React.FC = () => {
  return (
    <Row>
      <Col className='mx-auto' xs={12} sm={8} md={6}>
        <h1 className='text-center d-none d-sm-block my-3'>シャニマス火力計算機</h1>
        <h2 className='text-center d-xs-block d-sm-none my-3'>シャニマス火力計算機</h2>
        <div className='text-center my-3'>
          Ver.0.1.0<a className='ml-3' href='https://github.com/YSRKEN/shiny_damage_calculator'>GitHubへのリンク</a>
        </div>
        <Form className='border mx-3'>
          <IdolParameterForm/>
          <OtherOptionForm/>
        </Form>
      </Col>
    </Row>
  );
}

export default App;
