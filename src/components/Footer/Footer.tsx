import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Component, ComponentProps} from '../Component/Component';
import {Icon} from '../Icon/Icon';

export interface FooterProps extends ComponentProps {
  readonly children?: any;
  readonly icon?: string;
  readonly name: string;
}

export class Footer extends Component<FooterProps> {
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
    super(props, 'footer');
  }

  renderFooterLinks(list): JSX.Element[] {
    return list.map((item) => {
      const {links, title} = item;
      const linkElements = links.map((link) => {
        const {name, url} = link;
        return (
          <li key={`${name}-${url}`}>
            <a href={url}>{name}</a>
          </li>
        );
      });

      return (
        <div key={`link-${title}`} className="col-md-2 col-md-offset-2 col-sm-3 col-xs-12">
          <div className="widget widget-links">
            <h5 className="widget_title">{title}</h5>
            <ul className="listNoDividers">
              {linkElements}
            </ul>
          </div>
        </div>
      );
    });
  }

  render(): JSX.Element {
    const {icon, name} = this.props;
    const year: string = (new Date()).getFullYear().toString();
    const links = [
      {
        links: [
          {name: 'Features', url: '#features'},
          {name: 'Documentation', url: 'https://docs.arkhamjs.io'},
          {name: 'GitHub', url: 'https://github.com/nitrogenlabs/arkhamjs'},
          {name: 'npm', url: 'https://www.npmjs.com/package/arkhamjs'}
        ],
        title: 'Product'
      },
      {
        links: [
          {name: 'Issues', url: 'https://github.com/nitrogenlabs/arkhamjs/issues'},
          {name: 'Gitter', url: 'https://gitter.im/NitrogenLabs/arkhamjs'}
        ],
        title: 'Support'
      },
      {
        links: [
          {name: 'Facebook', url: 'https://www.facebook.com/nitrogenlabs'},
          {name: 'LinkedIn', url: 'https://www.linkedin.com/company/nitrogenlabs'},
          {name: 'Contact', url: 'mailto:support@nitrogenlabs.com'}
        ],
        title: 'Company'
      }
    ];

    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="footer_widgets">
            <div className="row">

              <div className="col-md-4 col-sm-3 col-xs-12">
                <div className="widget footer_aboutUs">
                  <img src="img/logo_dark.png" alt="ArkhamJS" className="logo" />
                  <div className="foote\_socials mt-40">
                    <div className="socialIcons socialIcons-nobase">
                      <a href="https://www.facebook.com/nitrogenlabs/">
                        <Icon name="social-facebook-circular" />
                      </a>
                      <a href="https://www.linkedin.com/company/nitrogenlabs">
                        <Icon name="social-linkedin-circular" />
                      </a>
                    </div>
                    <span className="copyright">
                      &copy; {year}
                      <a href="https://nitrogenlabs.com">Nitrogen Labs</a>
                    </span>
                  </div>
                </div>
              </div>

              {this.renderFooterLinks(links)}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
