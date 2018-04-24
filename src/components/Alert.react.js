import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Beforeunload from 'react-beforeunload';

export default class Alert extends Component {
    render() {
        const {id} = this.props;

        return (
            <div id={id}>
              <Beforeunload onBeforeunload={() => 'You\'ll lose your data!'} />
            </div>
        );
    }
}

Alert.propTypes = {
    /**
     * The ID used to identify this compnent in Dash callbacks
     */
    id: PropTypes.string
};
