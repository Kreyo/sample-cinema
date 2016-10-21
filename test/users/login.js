import 'babel-polyfill';
import { shallow } from 'enzyme';
import React from 'react';
import {Login} from '../../src/components/user/login';
import { expect } from 'chai';

describe('<Login />', () => {
    it('should have Sign In button', () => {
        const wrapper = shallow(<Login loginFailed={false} setEmail={() => {}} setPassword={() => {}} />);
        expect(wrapper.contains(<button className="btn btn-lg btn-primary btn-block" type="submit" >Sign in</button>))
            .to.equal(true);
    });
});

describe('<LoginError />', () => {
    it('should have an error message', () => {
        const wrapper = shallow(<Login loginFailed={true} setEmail={() => {}} setPassword={() => {}} />);
        expect(wrapper.contains(<div className="alert alert-danger">Email or password incorrect!</div>))
            .to.equal(true);
    });
});