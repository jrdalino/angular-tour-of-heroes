# AngularTourOfHeroes

## Step 1: Set up your environemnt
```
npm install -g @angular/cli
```

## Step 2: Create workspace and initial app project
```
ng new angular-tour-of-heroes
```
- This creates the following directory
```
~/environment/angular-tour-of-heroes
├── e2e/                             ## IGNORE FOR NOW
├── node_modules/
├── src/
│   ├── app/
|   │   ├── app.component.css        ## WE WILL MODIFY THIS
|   │   ├── app.component.html       ## WE WILL MODIFY THIS
|   │   ├── app.component.spec.ts    ## IGNORE FOR NOW
|   │   └── app.module.ts            ## WE WILL MODIFY THIS
│   ├── assets/
|   │   └── .gitkeep
│   ├── environments/
|   │   ├── environment.prod.ts
|   │   └── environments.ts
│   ├── favicon.ico
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   └── tests.ts
├── .browserslistrc                  ## IGNORE FOR NOW
├── .gitignore
├── angular.json
├── karma.conf.js                    ## IGNORE FOR NOW
├── package-lock.json     
├── package.json
├── README.md
├── tsconfig.app.json                ## IGNORE FOR NOW
├── tsconfig.json                    ## IGNORE FOR NOW
├── tsconfig.spec.json               ## IGNORE FOR NOW
└── tslint.json                      ## IGNORE FOR NOW
```

## Step 3: Run Unit & E2E Tests
- Execute the unit tests via [Karma](https://karma-runner.github.io).
```
ng test
```

- Execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
```
ng e2e
```

## Step 4: Build & Serve the application
- The build artifacts will be stored in the `dist/
- Application will be served at http://localhost:4200/
```
cd angular-tour-of-heroes
ng build
ng serve --open
```

## Step X: Add Angular Material
- Check out https://material.angular.io/guide/getting-started
```
ng add @angular/material
```

- //TODO: What folders, files do i need to add and/or modify?

## Step X: Add Navigation & Routing
- Dashboard
- Add Collapsible Menu
- Hero Create
- Hero Read
- Hero Update
- Hero Delete
- Hero Index

## Step X: Add Amplify
- Install SDK
```
npm install --save aws-amplify @aws-amplify/ui-angular
npm start
```

- Add ~/angular-tour-of-heroes/aws-exports.ts
```
    "aws_project_region": "ap-southeast-1",
    "aws_cognito_identity_pool_id": "ap-southeast-1:f71d7e8f-8235-41e4-9bca-8fe6c00eb5e4",
    "aws_cognito_region": "ap-southeast-1",
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
```

- Modify ~/angular-tour-of-heroes/src/main.ts
```
...
import AWSConfig from '../aws-exports';
import Auth from '@aws-amplify/auth';
import Storage from '@aws-amplify/storage';

Auth.configure(AWSConfig);
Storage.configure(AWSConfig);
...
```

- Modify ~/angular-tour-of-heroes/src/app/app.module.ts
```
/* import AmplifyUIAngularModule  */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
```


## Step X: Add Authentication Components
- Landing
- Sign Up
- Sign In
- Dashboard

## Step X: Add Hero Component

## Step X: Add Hero Service