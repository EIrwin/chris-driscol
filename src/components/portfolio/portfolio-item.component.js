import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { createFragmentContainer, graphql } from 'react-relay';
import FaPlus from 'react-icons/lib/fa/plus';
import PortfolioModal from './portfolio-modal.component';
import { Dialog, Fade } from 'material-ui';

class PortfolioItem extends React.Component {
  state = {
    open: false,
  };

  render() {
    const { work } = this.props;
    return (
      <div className={classNames('col-md-4', 'col-sm-6', 'portfolio-item')}>
        <a
          style={{ cursor: 'pointer' }}
          tabIndex={-1}
          role="button"
          onClick={() => this.setState({ open: true })}
          className="portfolio-link"
        >
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <FaPlus style={{ height: '3em', width: '3em' }} />
            </div>
          </div>
          <img src={work.imageUrl} className="img-responsive" alt="" />
        </a>
        <div className="portfolio-caption">
          <h4 className="portfolio-title">{work.title}</h4>
          <p className="text-muted">{work.location}</p>
        </div>
        <Dialog
          fullWidth
          fullScreen
          onClose={() => this.setState({ open: false })}
          open={this.state.open}
          transition={Fade}
        >
          <PortfolioModal
            work={work}
            onClose={() => this.setState({ open: false })}
          />
        </Dialog>
      </div>
    );
  }
}

PortfolioItem.propTypes = {
  work: PropTypes.shape({
    title: PropTypes.string,
    location: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
};

export default createFragmentContainer(
  PortfolioItem,
  graphql`
    fragment portfolioItem_work on Work {
      ...portfolioModal_work
      title
      location
      imageUrl
    }
  `,
);
