import React from 'react';
import { Layout, Card, Button } from 'antd';
import background from './Images/background.jpg';
import { Footer } from 'antd/es/layout/layout';
import AccountCircle from '@mdi/react';

const { Content } = Layout;

const MyComponent = () => {
  return (
    <Layout style={{ minHeight: '96vh' }}>
      <Content style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Card
          hoverable
          style={{ width: 500 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Card style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button style={{ marginRight: '10px' }} type="primary" shape="circle" size='large' />
            <Button type="primary" shape="circle" size='large' />
          </Card>
        </Card>
      </Content>
      <Footer>
        <a href="https://br.freepik.com/vetores-gratis/bons-e-pe-imprime-o-fundo-do-teste-padrao_1123963.htm#query=pet%20background&position=0&from_view=search&track=ais&uuid=21c835c3-2dc5-4c6c-94d8-c68cc2de640a">Imagem de isidoro151</a> no Freepik
      </Footer>
    </Layout>
  );
}

export default MyComponent;
