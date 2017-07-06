#!/usr/bin/env bash

##
# Uploads the static assets to the S3 bucket.
#
# @param string $1  the AWS S3 bucket name. Example: `s3://XXXXXXX/`
# @param string $2  the AWS region.
##
function upload_to_s3_bucket() {
    local output

    if output=$(aws s3 sync --region ${2} --acl public-read --delete dist/ s3://${1}); then
        echo -e "\n$(date "+%Y-%m-%d %H:%M:%S") Successfully uploaded to S3 bucket: \n\t$output"
        return 0
    fi

    echo -e "\n$(date "+%Y-%m-%d %H:%M:%S") Failed to upload to S3 bucket: $1"
    exit 1
}
