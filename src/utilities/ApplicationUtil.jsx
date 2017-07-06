import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';

// Config.
import strings from '../../config/strings';

/**
 * Creates a <Helmet> node that is used by react-helmet to change the meta data in the head of the DOM.
 * @param title specifies what the <title> will be, defaults to 'Certua'
 * @param image specifies what image is displayed when sharing on social media, defaults to the home page image.
 * @return {XML} the <Helmet> node.
 */
export function getHelmet(title, image = '') {
    const url = window.location.protocol + '//' + window.location.host + window.location.pathname;

    title = (_.isEmpty(title) ? strings.document.title : title);

    return (
        <Helmet>
            <title>{ title }</title>
            <meta name="description" content={ strings.document.description } />

            <meta name="twitter:description" content={ strings.document.description } />
            <meta name="twitter:image" content={ image } />
            <meta name="twitter:title" content={ title } />

            <meta name="og:description" content={ strings.document.description } />
            <meta name="og:image" content={ image } />
            <meta name="og:title" content={ title } />
            <meta name="og:type" content={ 'website' } />
            <meta name="og:url" content={ url } />
        </Helmet>
    );
}
