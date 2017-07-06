import { combineStyles } from './StylesUtil';

describe('utilities/styles', () => {
    const testCSSModule = {
        'super-style': 'super-style__super-style___3dbGp'
    };

    describe('combineStyles()', () => {
        it('should return an empty object if no arguments are specified', () => {
            const styles = combineStyles();

            expect(styles).to.be.empty;
        });

        it('should return an empty object if no arguments are valid modules', () => {
            const styles = combineStyles('I will fool you!', null, 56);

            expect(styles).to.be.empty;
        });

        it('should return only the modules', () => {
            const styles = combineStyles(testCSSModule, 'not a module');

            expect(styles).to.deep.equal(testCSSModule);
        });
    });
});
