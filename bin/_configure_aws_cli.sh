#!/usr/bin/env bash

##
# Configures the AWS CLI.
#
# @param string $1  the AWS access key id.
# @param string $2  the AWS secret access key.
# @param string $3  the AWS region.
##
function configure_aws_cli() {
	aws --version
	aws configure set aws_access_key_id $1
	aws configure set aws_secret_access_key $2
	aws configure set default.output json
	aws configure set default.region $3
}
