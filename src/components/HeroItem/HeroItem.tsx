import * as React from 'react';
import {Component, ComponentProps} from '../Component/Component';
import {Icon} from '../Icon/Icon';

export interface HeroItemProps extends ComponentProps {
}

export class HeroItem extends Component<HeroItemProps> {
  constructor(props) {
    super(props, 'heroItem');
  }

  render(): JSX.Element {
    const heroStyle = {
      backgroundImage: 'url(img/hero/hero_1.jpg)'
    };

    return (
      <div className="hero bg-img bg-gradient white-text" style={heroStyle}>
        <canvas data-strokecolor="86,67,124" id="canvas" />

        <div className="container-fluid hero__container">
          <div className="row hero__outer flex-vertical-align-center">
            <div className="col-md-5 text-right">
              <img className="hero__logo" src="img/hero_logo.png" alt="ArkhamJS Logo" />
            </div>
            <div className="col-md-7 text-left">
              <h1 className="hero__title hero--boxed">A Flux Javascript Framework</h1>
              <div className="hero__btn-holder mt-30">
                <a href="https://docs.arkhamjs.io" className="btn btn--lg btn--color rounded">
                  <Icon name="book" />
                  <span>Documentation</span>
                </a>
                <a
                  href="https://medium.com/@nitrog7/arkhamjs-react-framework-8f0ecd28cfbc"
                  className="btn btn--lg btn--color rounded">
                  <Icon name="arrow-right" />
                  <span>Getting Started</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
