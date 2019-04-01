import * as React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <Row>
      <Col className="mx-auto" xs={12} sm={10} md={8}>
        <h1 className="text-center d-none d-sm-block my-3">シャニマス火力計算機</h1>
        <h2 className="text-center d-xs-block d-sm-none my-3">シャニマス火力計算機</h2>
        <Form className='text-center'>
          <Button className='w-50 mx-auto'>テスト</Button>
        </Form>
      </Col>
    </Row>
  );
}

export default App;
