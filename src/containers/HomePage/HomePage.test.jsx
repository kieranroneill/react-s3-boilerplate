import _ from 'lodash';
import React from 'react';

// Helpers.
import { getDefaultProps } from '../../../test/helpers';

// Components.
import { HomePageTest as HomePage } from './HomePage';

describe('<HomePage />', () => {
    beforeEach(function() {
        this.props = getDefaultProps();
    });

    afterEach(function() {
        this.props = _.noop();
    });

    describe('when the component has finished rendering', function() {
        it('should display "Hello World" header tag', function() {
            const wrapper = shallow(<HomePage { ...this.props } />);
            const content = wrapper.find({ styleName: 'content' });

            expect(content.find('h1').exists()).to.be.true;
            expect(content.find('h1').text()).to.contain('Hello World');
        });
    });
});
