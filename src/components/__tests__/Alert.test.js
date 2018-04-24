import React from 'react';
import {shallow} from 'enzyme';
import Alert from '../Alert.react';

describe('Alert', () => {

    it('renders', () => {
        const component = shallow(<Alert/>);
        expect(component).to.be.ok;
    });
});
