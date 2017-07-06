import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

// Styles.
import styles from './HomePage.css';

// Config.
import strings from '../../../config/strings';

// Utilities.
import { getHelmet } from '../../utilities/ApplicationUtil';
import { cssModulesOptions } from '../../utilities/StylesUtil';

class HomePage extends Component {
    render() {
        return (
            <main>
                { getHelmet(strings.document.title) }
                <div
                    className="fullSize"
                    styleName="content">
                    <h1>Hello World!</h1>
                </div>
            </main>
        );
    }
}

export default CSSModules(HomePage, styles, cssModulesOptions);
export { HomePage as HomePageTest }; // Export for testing.
