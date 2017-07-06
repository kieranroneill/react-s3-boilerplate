#!/usr/bin/env bash

###
# Pushes the pre-built static files to a configured AWS S3 bucket.
#
# This file uses the following environment variables:
# AWS_ACCESS_KEY_ID     : The access key ID given when you created a User on IAM.
# AWS_REGION            : The region of the S3 bucket, e.g. `eu-west-2`.
# AWS_S3_BUCKET_NAME    : The name of the bucket. Example: `s3://XXXXXXX/`
# AWS_SECRET_ACCESS_KEY : The secret access key given when you created a User on IAM.
###

SCRIPT_DIR=$(dirname "${BASH_SOURCE[0]}")

# Import the utility scripts.
source "$SCRIPT_DIR/_configure_aws_cli.sh"
source "$SCRIPT_DIR/_upload_to_s3_bucket.sh"

##
# Main function
##
function main() {
    echo "$(date "+%Y-%m-%d %H:%M:%S") Configuring AWS CLI."
    configure_aws_cli ${AWS_ACCESS_KEY_ID} ${AWS_SECRET_ACCESS_KEY} ${AWS_REGION}

    echo "$(date "+%Y-%m-%d %H:%M:%S") Uploading assets to S3 bucket."
    upload_to_s3_bucket ${AWS_S3_BUCKET_NAME} ${AWS_REGION}

    echo "$(date "+%Y-%m-%d %H:%M:%S") Deployed successfully."
}

# And so, it begins...
main
exit 0
