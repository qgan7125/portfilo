import React from 'react';
import { Layout } from 'antd';
import avatar from 'assets/images/avatar.png';
import './About.scss';

const { Content } = Layout;

const About = () => {
  return (
    <Layout>
      <Content className='about__wrapper'>
        <figure>
            <img src={avatar} alt="Matthew Gan" width={100}/>
        </figure>
      </Content>
    </Layout>
  );
};

export default About;
