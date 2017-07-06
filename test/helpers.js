import { JSDOM } from 'jsdom';

/**
 * Creates a JSDOM object.
 * @returns {JSDOM} a mocked DOM object.
 */
export function createDom() {
    let html = '<!DOCTYPE html>';

    html += '<html>';
    html += '<body>';
    html += '</body>';
    html += '</html>';

    return new JSDOM(html);
}

/**
 * Returns props that mocks the router and connected components.
 * @return a mocked props object
 */
export function getDefaultProps() {
    return {
        history: {
            push: stub()
        },
        location: {
            query: {}
        }
    };
}
