import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Component, ComponentProps} from '../Component/Component';
import {Icon} from '../Icon/Icon';

export interface HeaderProps extends ComponentProps {
  readonly children?: any;
  readonly icon?: string;
  readonly name: string;
}

export class Header extends Component<HeaderProps> {
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
      <div className="nav nav-transparent">
        <div className="nav_holder" id="sticky-nav">
          <div className="container">
            <div className="flex-parent">
              <div className="nav_header">
                <div className="logo_wrap">
                  <a href="index.html" className="logo_link">
                    <img className="logo logo--dark" src="img/logo_dark.png" alt="logo" />
                    <img className="logo logo--light" src="img/logo_light.png" alt="logo" />
                  </a>
                </div>

                <button
                  type="button"
                  className="nav__icon-toggle"
                  id="nav__icon-toggle"
                  data-toggle="collapse"
                  data-target="#navbar-collapse">
                  <Icon name="menu" />
                </button>
              </div>

              <nav id="navbar-collapse" className="nav_wrap collapse navbar-collapse">
                <ul className="nav_menu nav_menu-inline">
                  <li><a href="#features">Features</a></li>
                  <li><a href="https://docs.arkhamjs.io">Documentation</a></li>
                  <li><a href="./reduxComparison.html">Comparison</a></li>
                  <li><a href="https://github.com/nitrogenlabs/arkhamjs">Github</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
