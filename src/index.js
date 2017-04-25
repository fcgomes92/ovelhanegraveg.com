/**
 * Created by gomes on 28/01/17.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {
  Layout,
  Content,
  Footer,
  FooterLinkList,
  FooterSection,
  Grid,
  Cell
} from 'react-mdl';
import 'react-mdl/extra/css/material.orange-yellow.min.css';
import 'react-mdl/extra/material.js';
import logo from './svgs/logo';
import './index.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Content>
          <div className="logo" dangerouslySetInnerHTML={{
            __html: logo
          }}></div>
          <br/>
          <br/>
          <div className="social-links">
            <Grid>
              <Cell col={4} className="social-link instagram">
                <a href="#instagram">
                  <div className="icon">
                    <svg viewBox="0 0 512 512">
                      <title>Instagram</title>
                      <g><path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"/><path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"/><circle cx="351.5" cy="160.5" r="21.5"/></g>
                    </svg>
                  </div>
                  <div className="text">@ovelhanegraveg</div>
                </a>
              </Cell>
              <Cell col={4} className="social-link facebook">
                <a href="#instagram">
                  <div className="icon">
                    <svg viewBox="0 0 800 800">
                      <title>Facebbok</title>
                      <path d="M604 170c15 0 26 11 26 26v408c0 15-11 26-26 26H487V452h60l9-70h-69v-44c0-20 6-34 35-34h37v-62s-24-3-54-3c-53 0-89 33-89 92v51h-60v70h60v178H196c-15 0-26-11-26-26V196c0-15 11-26 26-26h408z"/>
                    </svg>
                  </div>
                  <div className="text">/ovelhanegraveg</div>
                </a>
              </Cell>
              <Cell col={4} className="social-link whatsapp">
                <a href="#instagram">
                  <div className="icon">
                    <svg viewBox="0 0 800 800">
                      <title>Whatsapp</title>
                      <path d="M519 454c4 2 7 10-1 31-6 16-33 29-49 29-96 0-189-113-189-167 0-26 9-39 18-48 8-9 14-10 18-10h12c4 0 9 0 13 10l19 44c5 11-9 25-15 31-3 3-6 7-2 13 25 39 41 51 81 71 6 3 10 1 13-2l19-24c5-6 9-4 13-2zM401 200c-110 0-199 90-199 199 0 68 35 113 35 113l-20 74 76-20s42 32 108 32c110 0 199-89 199-199 0-111-89-199-199-199zm0-40c133 0 239 108 239 239 0 132-108 239-239 239-67 0-114-29-114-29l-127 33 34-124s-32-49-32-119c0-131 108-239 239-239z"/>
                    </svg>
                  </div>
                  <div className="text">(35) 9 8808 8547</div>
                </a>
              </Cell>
            </Grid>
          </div>
        </Content>
        <Footer size="mini" className="footer">
          <FooterSection type="bottom">
            <FooterLinkList>
              <a href="#">Help</a>
              <a href="#">Privacy & Terms</a>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </Layout>
    )
  }
}

render(
  <App/>, document.getElementById('root'));
