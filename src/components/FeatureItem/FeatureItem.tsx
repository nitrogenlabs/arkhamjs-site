import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Component, ComponentProps} from '../Component/Component';

export interface FeatureItemProps extends ComponentProps {
  readonly children?: any;
  readonly icon?: string;
  readonly name: string;
}

export class FeatureItem extends Component<FeatureItemProps> {
  static propTypes: object = {
    ...Component.propTypes,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]),
    icon: PropTypes.string,
    name: PropTypes.string.isRequired
  };

  static defaultProps: object = {
    ...Component.defaultProps,
    children: ''
  };

  constructor(props) {
    super(props, 'featureItem');
  }

  render(): JSX.Element {
    const {children, icon, name} = this.props;

    return (
      <div className="feature">
        <div className="feature_hdr">
          <div className="feature_icon">
            <img src={`img/icons/${icon}.png`} width="200" />
          </div>
          <div className="feature_title">{name}</div>
        </div>
        <div className="feature_description">{children}</div>
      </div>
    );
  }
}
