import Promise from 'bluebird';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { assert, match, mock, spy, stub } from 'sinon';

// Ignore styling modules.
import 'ignore-styles';

// Helpers.
import { createDom } from './helpers';

const { window } = createDom();

// General globals.
global.assert = assert;
global.expect = expect;
global.match = match;
global.mock = mock;
global.spy = spy;
global.stub = (...args) => stub.apply(this, args).usingPromise(Promise); // Use the bluebird library.

// Client globals.
global.document = window.document;
global.mount = mount;
global.navigator = { userAgent: 'node.js', appName: 'Netscape' };
global.shallow = shallow;
global.window = window;
