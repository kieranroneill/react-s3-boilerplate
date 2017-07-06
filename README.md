[![CircleCI](https://circleci.com/gh/youviewtv/youview-chromecast-receiver-app/tree/master.svg?style=shield&circle-token=0c767410fcf60f67444e2570839170de9a0fa7a5)](https://circleci.com/gh/youviewtv/youview-chromecast-receiver-app/tree/master)

# React/S3 application

Boilerplate code for building a frontend React application that is statically served from an S3 bucket.

## Development

### Installation & Usage

* Install [Node.js v6.11.0+](https://nodejs.org/en/)
* Install [Yarn](https://yarnpkg.com/lang/en/docs/install)
* Install dependencies `yarn install`
* Start the application `yarn start`
* Navigate to [http://localhost:1337](http://localhost:1337)

The development environment is setup using `webpack-dev-server` with hot-reloading implemented, therefore, changes in the code should be auto-refreshed on the browser.

### Styling

Styling principally follows the [CSS modules](https://github.com/css-modules/css-modules) specification and this is mainly achieved by using [react-css-modules](https://github.com/gajus/react-css-modules).
  
Global styles are achieved using Sass and are preprocessed within the entry file.
 
For abstraction, the `styleName` property indicates an imported CSS module style and the `className` property refers to a global style. This is demonstrated in the below example.

```jsx harmony
import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div
                    className="fullSize"
                    styleName="inner" />
            </header>
        );
    }
}

export default CSSModules(Header, styles);
```

In this example, the class `fullSize` is a global style defined in `src/stylesheets/global/_base.scss`. However, the `inner` style will refer to a style in the CSS module.

This abstraction is used in order to re-use styles and minimise verbose code.

## Testing

Testing is composed of:
* [Mocha](https://mochajs.org/) as the test runner.
* [Chai](http://chaijs.com/) for assertions.
* [SinonJS](http://sinonjs.org/) for spys, stubs and mocks.
* [Enzyme](https://github.com/airbnb/enzyme) for testing React components.
* [Istanbul](https://github.com/gotwarlost/istanbul) for code coverage reporting.

Testing is triggered by a single npm script: `yarn test`.

Once the tests have completed, coverage reports can be found in the `coverage/` directory and mocha will also convert the test results into a JUnit style `test-results.xml` at the root level.

## Continuous Integration/Deployment

A CI build is triggered upon every branch push, and will build a production version of the code, perform linting and run tests.

The deployment script is triggered whenever a GitHub release is tagged with a semantic version pattern, i.e. v1.2.3.

### AWS

1. Go to the IAM service and create a User (name it `circleci` for convenience).
    * Add the following inline policy:
    ```json
    {
        "Statement": [
            {
              "Action": [
                "s3:DeleteObject",
                "s3:GetObject",
                "s3:PutObject",
                "s3:PutObjectAcl"
              ],
              "Effect": "Allow",
              "Resource": [
                "arn:aws:s3:::bucketname/*"
              ]
            },
            {
              "Action": [
                "s3:ListBucket"
              ],
              "Effect": "Allow",
              "Resource": "arn:aws:s3:::*"
            }
        ]
    }
    ```
    * When this is complete, download the CSV file you will need the credentials for setting up the CircleCI environment variables.
2. Go to the S3 service and create a bucket.
    * Under the property _"Static Website Hosting"_, enable website hosting.
        * Set the _"Index Document"_ to `index.html`.
        * Set the _"Error Document"_ to `index.html`.

### CircleCI

To setup CircleCI, the following environment variables are needed for deployment:

| Name | Description |
| :--- | :--- |
| `AWS_ACCESS_KEY_ID` | The access key ID for the AWS IAM user that has access to the S3 bucket |
| `AWS_REGION` | The region of the S3 bucket |
| `AWS_SECRET_ACCESS_KEY` | The secret access key for the AWS IAM user that has access to the S3 bucket |
| `AWS_S3_BUCKET_NAME` | The name of the bucket |
