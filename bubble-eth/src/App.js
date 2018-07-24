import React, { Component } from 'react';
import './App.css';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Bubble from './Bubble';

class App extends Component {
  render() {
    return (
      <div>
        <PageHeader>
          Test
        </PageHeader>
        <Grid>
          <Row className="show-grid">
            <Col fluid="true" lg={12}>
              <Bubble />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
