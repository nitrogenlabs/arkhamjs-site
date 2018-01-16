import * as React from 'react';
import {Component, ComponentProps} from '../Component/Component';
import {Icon} from '../Icon/Icon';

export interface TopButtonProps extends ComponentProps {
}

export class TopButton extends Component<TopButtonProps> {
  constructor(props) {
    super(props, 'topButton');
  }

  render(): JSX.Element {
    return <div id="back-to-top"><a href="#top"><Icon name="arrow-up" /></a></div>;
  }
}
