import React, { FC } from 'react';
import { Layout, Row, Col } from 'antd';
import AutoTextEffect from 'components/AutoTextEffect/AutoTextEffect';
import { ArrowRightOutlined } from '@ant-design/icons';
import ParticlesComponent from 'components/particles/particles';
import './Home.scss';

const { Content } = Layout;

interface IHome {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Home: FC<IHome> = ({ setPage }) => {
  const roles = ['a Full Stack developer.', 'a Data Analysis.'];

  const handleNextPage = () => {
    setPage(1);
  };

  return (
    <Layout className='home__layout'>
      <ParticlesComponent />
      <Content className="home__content">
        <Row className="home__row" gutter={[0, 10]}>
          <Col span={10} offset={6} className="home__info">
            Hello, I'm <span className="text-primary">Matthew Gan</span>
          </Col>
          <Col span={15} offset={8} className="home__info">
            <AutoTextEffect messages={roles} />
          </Col>
          <Col span={12} offset={10}>
            <button className="home__btn" onClick={handleNextPage}>
              View My Work <ArrowRightOutlined className="arrow--right" />
            </button>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Home;
