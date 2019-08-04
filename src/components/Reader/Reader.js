import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import publications from '../../publications.json';
import css from './Reader.module.css';

const queryStringParse = (publicationToShowNumber, startPublication) => {
  return publicationToShowNumber
    ? Number(queryString.parse(publicationToShowNumber).item)
    : Number(startPublication);
};

class Reader extends Component {
  static defaultProps = {
    history: PropTypes.shape({}),
    location: PropTypes.shape({}),
  };

  static propTypes = {
    history: PropTypes.shape({ push: PropTypes.func }),
    location: PropTypes.shape({ search: PropTypes.string }),
  };

  state = {
    publicationToShowNumber: 0,
    items: publications,
  };

  componentDidMount() {
    const { publicationToShowNumber } = this.state;
    const { history, location } = this.props;
    const stringQuery = queryStringParse(
      location.search,
      publicationToShowNumber,
    );

    if (stringQuery !== publicationToShowNumber) {
      this.setState({ publicationToShowNumber: stringQuery });

      history.push({
        ...location,
        search: `?item=${stringQuery}`,
      });

      return;
    }

    history.push({
      ...location,
      search: `?item=${publicationToShowNumber}`,
    });
  }

  componentDidUpdate(prevState) {
    const { publicationToShowNumber } = this.state;
    const { history, location } = this.props;
    const prevStateParse = queryStringParse(prevState.location.search);

    if (prevStateParse === publicationToShowNumber) {
      return;
    }

    history.push({
      ...location,
      search: `?item=${publicationToShowNumber}`,
    });
  }

  handleIncrement = () => {
    const parseString = queryStringParse(this.props.location.search);

    this.setState({ publicationToShowNumber: parseString + 1 });
  };

  handleDecrement = () => {
    const parseString = queryStringParse(this.props.location.search);

    this.setState({ publicationToShowNumber: parseString - 1 });
  };

  render() {
    const { items, publicationToShowNumber } = this.state;

    return (
      <div className={css.reader}>
        <Publication item={items[publicationToShowNumber]} />
        <Counter number={publicationToShowNumber} counterMax={items.length} />
        <Controls
          number={publicationToShowNumber}
          counterMax={items.length}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default withRouter(Reader);
