import React, { ReactElement } from 'react';
import { List } from 'antd';
import peepSide from 'assets/images/peepSide.svg';
import { MailOutlined, PhoneOutlined, GithubOutlined } from '@ant-design/icons';
import './SideBar.scss';

const { Item } = List;

type TItem = {
  image: ReactElement;
  value: string;
  type?: string;
};

const LIST_INFO: TItem[] = [
  {
    image: <MailOutlined className="info--icon" />,
    value: 'gq12121@gmail.com',
    type: 'email',
  },
  {
    image: <PhoneOutlined className="info--icon" />,
    value: '520-808-8018',
  },
  {
    image: <GithubOutlined className="info--icon" />,
    value: 'https://github.com/qgan7125',
    type: 'github',
  },
];

const SideBar = () => {
  const itemComponent = (item: TItem) => (
    <>
      {item.image} <span className="info">{item.value}</span>
    </>
  );

  const renderItem = (item: TItem) => {
    return (
      <Item>
        {item.type ? (
          item.type === 'email' ? (
            <a href={`mailto:${item.value}`}>{itemComponent(item)}</a>
          ) : (
            <a href={item.value} target="_blank" rel="noreferrer">
              {itemComponent(item)}
            </a>
          )
        ) : (
          itemComponent(item)
        )}
      </Item>
    );
  };

  return (
    <aside className="sideBar__wrapper">
      <List dataSource={LIST_INFO} renderItem={renderItem}/>
      <img src={peepSide} className="sideImage" alt="sidepeep" />
    </aside>
  );
};

export default SideBar;
