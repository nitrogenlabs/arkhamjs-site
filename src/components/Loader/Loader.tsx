import * as React from 'react';
import {Component, ComponentProps} from '../Component/Component';

export interface LoaderProps extends ComponentProps {
}

export class Loader extends Component<LoaderProps> {
  constructor(props) {
    super(props, 'loader');
  }

  render(): JSX.Element {
    return (
      <div className="loader_container">
        <div className="loader">Loading...</div>
      </div>
    );
  }
}
