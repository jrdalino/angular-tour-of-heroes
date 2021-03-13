const awsmobile = {
    "aws_project_region": "ap-southeast-1",
    "ap-southeast-1:f71d7e8f-8235-41e4-9bca-8fe6c00eb5e4",
    "aws_user_pools_id": "ap-southeast-1_pfV9SAIvf",
    "aws_user_pools_web_client_id": "23t9cniohmsk313lpogmv6v33b",
    "oauth": {
        "domain": "materialpwa-dev.auth.ap-southeast-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:4200/auth/",
        "redirectSignOut": "http://localhost:4200/auth/signin/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_user_files_s3_bucket": "angularpwapostone283fb76bded24ac2b6110d4234facb214913-dev",
    "aws_user_files_s3_bucket_region": "ap-southeast-1"
};
export default awsmobile;