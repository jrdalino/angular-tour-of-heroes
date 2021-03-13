# AngularTourOfHeroes

## Step 1: Use the Angular CLI to bootstrap a new Angular app
```
npm install -g @angular/cli
```

## Step 2: Create a new Angular app
- Use the Angular CLI to create a new app
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

- Modify ~/angular-tour-of-heroes/src/polyfills.ts for Angular 6+ Support
```
(window as any).global = window;
(window as any).process = {
  env: { DEBUG: undefined },
};
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
ng build OR npm run-script build
ng serve --open OR nom start
```

## Step 5: Add Amplify Backend
- Install Amplify Libraries
```
npm install --save aws-amplify @aws-amplify/ui-angular
npm start
```

- Add ~/angular-tour-of-heroes/src/aws-exports.ts
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

- Add the Amplify Angular UI Module to ~/angular-tour-of-heroes/src/app/app.module.ts
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* import AmplifyUIAngularModule  */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    /* configure app with AmplifyUIAngularModule */
    AmplifyUIAngularModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```







## Step X: Add Navigation & Routing

- //TODO
- Dashboard
- Add Collapsible Menu
- Hero Create
- Hero Read
- Hero Update
- Hero Delete
- Hero Index



## Step X: Add Authentication Components
- Landing
- Sign Up
- Sign In
- Dashboard

## Step X: Add Hero Component

## Step X: Add Hero Service

## Step X: Add Angular Material
- Check out https://material.angular.io/guide/getting-started
```
ng add @angular/material
```

- //TODO: What folders, files do i need to add and/or modify?