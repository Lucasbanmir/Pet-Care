import React from 'react';
import { Layout, Image, Button } from 'antd';
import background from './Images/background.jpg';
import { Footer } from 'antd/es/layout/layout';
import AccountCircle from '@mdi/react';

const { Content } = Layout;

const MyComponent = () => {
  return (
    <Layout style={{ minHeight: '96vh' }}>
      <Content style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <Image
            width={600}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </div>
        <div style={{ marginTop: '10px', padding: '10px' }}>
          <Button type="primary" shape="circle" style={{ marginRight: '10px' }}/>
          <Button type="primary" shape="circle"/>
        </div>
      </Content>
      <Footer>
        <a href="https://br.freepik.com/vetores-gratis/bons-e-pe-imprime-o-fundo-do-teste-padrao_1123963.htm#query=pet%20background&position=0&from_view=search&track=ais&uuid=21c835c3-2dc5-4c6c-94d8-c68cc2de640a">Imagem de isidoro151</a> no Freepik
      </Footer>
    </Layout>
  );
}

export default MyComponent;
