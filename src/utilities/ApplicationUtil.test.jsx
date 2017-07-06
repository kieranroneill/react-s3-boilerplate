import _ from 'lodash';

// Config.
import strings from '../../config/strings';

// Utilities.
import { getHelmet } from './ApplicationUtil';

describe('utilities/application', () => {
    afterEach(() => {
        navigator.appName = 'Netscape';
        navigator.userAgent = 'node.js';
    });

    describe('getHelmet()', () => {
        it('should return a node containing the correct children', () => {
            const props = shallow(getHelmet()).props();

            expect(props.title).to.not.be.empty;

            expect(_.some(props.meta, ['name', 'description'])).to.be.true;

            expect(_.some(props.meta, ['name', 'twitter:description'])).to.be.true;
            expect(_.some(props.meta, ['name', 'twitter:image'])).to.be.true;
            expect(_.some(props.meta, ['name', 'twitter:title'])).to.be.true;

            expect(_.some(props.meta, ['name', 'og:description'])).to.be.true;
            expect(_.some(props.meta, ['name', 'og:image'])).to.be.true;
            expect(_.some(props.meta, ['name', 'og:title'])).to.be.true;
            expect(_.some(props.meta, ['name', 'og:type'])).to.be.true;
            expect(_.some(props.meta, ['name', 'og:url'])).to.be.true;
        });

        it('should use the default values if nothing is specified', () => {
            const props = shallow(getHelmet()).props();

            expect(props.title).to.equal(strings.document.title);

            expect(_.find(props.meta, ['name', 'description']).content).to.equal(strings.document.description);

            expect(_.find(props.meta, ['name', 'twitter:description']).content).to.equal(strings.document.description);
            expect(_.find(props.meta, ['name', 'twitter:title']).content).to.equal(strings.document.title);

            expect(_.find(props.meta, ['name', 'og:description']).content).to.equal(strings.document.description);
            expect(_.find(props.meta, ['name', 'og:title']).content).to.equal(strings.document.title);
            expect(_.find(props.meta, ['name', 'og:type']).content).to.equal('website');
            expect(_.find(props.meta, ['name', 'og:url']).content).to.be.a('string');
        });

        it('should use the specified title on the relevant tags', () => {
            const title = 'I am Sparta!!!';
            const props = shallow(getHelmet(title)).props();

            expect(props.title).to.equal(title);

            expect(_.find(props.meta, ['name', 'twitter:title']).content).to.equal(title);

            expect(_.find(props.meta, ['name', 'og:title']).content).to.equal(title);
        });

        it('should use the specified image on the relevant tags', () => {
            const image = '/some.elaborate.titled.image.jpg';
            const props = shallow(getHelmet(null, image)).props();

            expect(_.find(props.meta, ['name', 'twitter:image']).content).to.contain(image);

            expect(_.find(props.meta, ['name', 'og:image']).content).to.contain(image);
        });
    });
});
