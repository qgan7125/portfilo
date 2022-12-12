import React from 'react';
import AutoTextEffect from '../../components/AutoTextEffect/AutoTextEffect';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.scss';
import { ArrowRight } from 'react-bootstrap-icons';

const Home = () => {
  const roles = ['a Full Stack developer.', 'a Data Analysis.'];

  return (
    <Container className="home__container">
      <Row>
        <Col md={{ span: 8, offset: 3 }} className="home__info">
          Hello, I'm <span className="text-primary">Matthew Gan</span>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 8, offset: 5 }} className="home__info">
          <AutoTextEffect messages={roles} />
        </Col>
      </Row>

      <Row className='row__btn'>
        <Col md={{ span: 4, offset: 6 }}>
          <button className="home__btn">View My Work <ArrowRight size={30} className="arrow--right"/> </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
