import _ from 'lodash';

/**
 * Creates an object with a reference to each module.
 *
 * NOTE: each module property is a shallow copy to the module; ergo, it is a reference.
 * @param args a list of arguments.
 * @return {Object} an object containing all the modules.
 */
export function combineStyles(...args) {
    if(args.length < 1) {
        return {};
    }

    // Filter only objects.
    return _.assign({}, ..._.filter(args, item => (_.isObject(item) && !_.isNull(item))));
}

/**
 * Default options for react-css-modules.
 * @type {{allowMultiple: boolean}}
 */
export const cssModulesOptions = { allowMultiple: true };
