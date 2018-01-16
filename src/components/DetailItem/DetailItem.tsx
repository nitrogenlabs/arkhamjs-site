import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Component, ComponentProps} from '../Component/Component';
import {Icon} from '../Icon/Icon';

export interface DetailItemProps extends ComponentProps {
  children: any;
  image: string;
  name: string;
}

export class DetailItem extends Component<DetailItemProps> {
  static propTypes: object = {
    ...Component.propTypes,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]),
    image: PropTypes.string,
    name: PropTypes.string.isRequired
  };

  static defaultProps: object = {
    ...Component.defaultProps,
    children: ''
  };

  constructor(props) {
    super(props, 'detailItem');
  }

  render(): JSX.Element {
    const {children, image, name} = this.props;

    return (
      <div className="container-fluid">
        <div className="row flex-parent flex-vertical-align-center flex-sm-collapse">
          <div className="col-md-6 col-sm-12 col-xs-12 mb-30">
            <img src={image} alt={name} className="img-responsive" />
          </div>
          <div className="col-md-5 col-md-offset-1 col-sm-12">
            <div className="promo-section__description">
              <h2 className="promo-section__title">{name}</h2>
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
