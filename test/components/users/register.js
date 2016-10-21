import 'babel-polyfill';
import { shallow } from 'enzyme';
import React from 'react';
import {Register} from '../../../src/components/user/register';
import { expect } from 'chai';

describe('<Register />', () => {
    it('should have Sign Up button', () => {
        const wrapper =
            shallow(<Register error={""} success={false} setEmail={() => {}} setPassword={() => {}} setPasswordRepeat={() => {}} />);
        expect(wrapper.contains(<button className="btn btn-lg btn-primary btn-block" type="submit" >Sign up</button>))
            .to.equal(true);
    });
});

describe('<RegisterSuccess />', () => {
    it('should have a success message', () => {
        const wrapper =
            shallow(<Register error={""} success={true} setEmail={() => {}} setPassword={() => {}} setPasswordRepeat={() => {}} />);
        expect(wrapper.contains(<div className="alert alert-success">You can now login using your credentials!</div>))
            .to.equal(true);
    });
});