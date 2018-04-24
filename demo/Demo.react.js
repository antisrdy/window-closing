import React, {Component} from 'react';
import {Alert} from '../src';

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div>
                <h1>window-closing Demo</h1>

                <hr/>
                <h2>Alert</h2>
                <Alert/>
                <hr/>
            </div>
        );
    }
}

export default Demo;
