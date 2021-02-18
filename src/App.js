import React, { useEffect, useState } from 'react';

import { Row, Col, Input, Button, Popover, Layout } from 'antd';
import { SketchPicker } from 'react-color';

import './App.css';

const { Header, Content } = Layout;

const WIDTH = 300;
const HEIGHT = 300;

function App() {

  const [text, setText] = useState('杨明');
  const [color, setColor] = useState('#ffffff');
  const [background, setBackground] = useState('#0000ff');

  useEffect(() => {
    console.log(text, color, background);

    drawAvatar()
  }, [text, color, background]);


  const drawAvatar = () => {
    const canvas = document.querySelector('#avatar');
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, WIDTH, HEIGHT);

    context.fillStyle = background;

    context.beginPath();
    context.arc(WIDTH / 2, HEIGHT / 2, WIDTH / 2, 0, 2 * Math.PI, true);
    context.closePath();
    context.fill();

    context.fillStyle = color;
    context.font = HEIGHT / 2.2 + 'px "Microsoft Yahei"';
    context.textAlign = 'center';

    context.fillText(text, WIDTH / 2, HEIGHT / 1.5);
  }

  const handleDownload = () => {
    const canvas = document.querySelector('#avatar');
    const link = document.createElement('a');
    link.download = 'avatar';
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  return (
    <Layout>
      <Header>
        <span className="header">
          头像工具
        </span>
      </Header>
      <Content className="App">
        <div className="app-body">
          <Row>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Row>
                <Col span={6}>内容：</Col>
                <Col span={12}>
                  <Input maxLength="2" value={text} onInput={(e) => { setText(e.target.value) }} />
                </Col>
              </Row>
              <Row>
                <Col span={6}>文字颜色：</Col>
                <Col span={12}>
                  <Popover
                    style={{ padding: 0 }}
                    content={
                      <SketchPicker
                        color={color}
                        onChangeComplete={(value) => setColor(value.hex)}
                      />
                    }>
                    <Input maxLength="2" value={color} onInput={(e) => { setColor(e.target.value) }} />
                  </Popover>
                </Col>
              </Row>
              <Row>
                <Col span={6}>背景颜色：</Col>
                <Col span={12}>
                  <Popover
                    style={{ padding: 0 }}
                    content={
                      <SketchPicker
                        color={background}
                        onChangeComplete={(value) => setBackground(value.hex)}
                      />
                    }>
                    <Input maxLength="2" value={background} onInput={(e) => { setBackground(e.target.value) }} />
                  </Popover>
                </Col>
              </Row>
              <Row>
                <Col span={6}></Col>
                <Col span={12}><Button type="primary" onClick={() => { handleDownload() }}>下载图片</Button></Col>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <canvas id="avatar" width="300" height="300" />
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
