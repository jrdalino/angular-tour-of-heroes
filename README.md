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

- Modify /src/polyfills.ts for Angular 6+ Support
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

## Step 5: Manually Add Amplify Backend
- Create file /src/aws-exports.ts
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

- Add the following to .gitignore
```
#amplify
amplify/\#current-cloud-backend
amplify/.config/local-*
amplify/logs
amplify/mock-data
amplify/backend/amplify-meta.json
amplify/backend/awscloudformation
amplify/backend/.temp
build/
dist/
node_modules/
aws-exports.js
awsconfiguration.json
amplifyconfiguration.json
amplify-build-config.json
amplify-gradle-config.json
amplifytools.xcconfig
.secret-*
```

- Install Amplify Libraries
```
npm install --save aws-amplify @aws-amplify/ui-angular
npm start
```

- Importing the Amplify Angular UI Module. Add Amplify Angular UI Module to /src/app/app.module.ts
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

## Step 6: Connect API and database to the app
- Connect frontend to API Modify. Add the following to /src/main.ts
```
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);
```

- Update tsconfig.app.json to include the “node” compiler option in types:
```
"compilerOptions": {
    "types" : ["node"]
}
```

## Step 7: Add Angular Material Components // TODO
- Install https://material.angular.io/guide/getting-started
```
ng add @angular/material
```

- Display Tool Bar Component https://material.angular.io/components/toolbar/examples. Import Module that you want to display by adding the following lines to your app.module.ts file.
```
import {Component} from '@angular/core';

/**
 * @title Toolbar overview
 */
@Component({
  selector: 'toolbar-overview-example',
  templateUrl: 'toolbar-overview-example.html',
  styleUrls: ['toolbar-overview-example.css'],
})
export class ToolbarOverviewExample {}
```

- Add to app.component.css
```
.example-spacer {
  flex: 1 1 auto;
}
```

- Add the <mat-toolbar> tag to the app.component.html like so:
```
<p>
  <mat-toolbar color="primary">
    <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
      <mat-icon>menu</mat-icon>
    </button>
    <span>My App</span>
    <span class="example-spacer"></span>
    <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
      <mat-icon>favorite</mat-icon>
    </button>
    <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
      <mat-icon>share</mat-icon>
    </button>
  </mat-toolbar>
</p>
```


## Step 8: Add Navigation & Routing //TODO
- Landing Page
- Sign Up
- Sign In
- Dashboard
- Hero Create
- Hero Read
- Hero Update
- Hero Delete
- Hero Index

## Step 9: Add Hero Components
- Create the heroes component
```
ng generate component heroes
```
```
CREATE src/app/heroes/heroes.component.css (0 bytes)
CREATE src/app/heroes/heroes.component.html (21 bytes)
CREATE src/app/heroes/heroes.component.spec.ts (626 bytes)
CREATE src/app/heroes/heroes.component.ts (275 bytes)
UPDATE src/app/app.module.ts (755 bytes)
```

- Add /src/types/hero.ts
```
export type Hero = {
  id : string,
  name : string
};
```

- Add data to your database by modifying /src/app/app.component.ts
```
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from './API.service';
import { Hero } from '../types/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'amplify-angular-app';
  public createForm: FormGroup;

  constructor(private api: APIService, private fb: FormBuilder) { }

  async ngOnInit() {
    this.createForm = this.fb.group({
      'name': ['', Validators.required]
    });
  }

  public onCreate(hero: Hero) {
    this.api.CreateHero(hero).then(event => {
      console.log('item created!');
      this.createForm.reset();
    })
    .catch(e => {
      console.log('error creating hero...', e);
    });
  }
}
```

- Enable Angular Forms modules in /src/app/app.module.ts:
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

/* new form imports */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyUIAngularModule,
    /* configuring form modules */
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

- Add form that will be used for creating heroes. Add the following to /src/app/app.component.html
```
<div class="form-body">
  <form autocomplete="off" [formGroup]="createForm" (ngSubmit)="onCreate(createForm.value)">
    <div>
      <label>Name: </label>
      <input type="text" formControlName="name" autocomplete="off">
    </div>
    <button type="submit">Submit</button>
  </form>
</div>
```

- Next, update your AppComponent class so that it will list all heroes in the database when the app starts. To do so, implement OnInit add a ListHeroes query in src/app/app.component.ts. Store the query results in an array.
```
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from './API.service';
import { Hero } from '../types/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'amplify-angular-app';
  public createForm: FormGroup;

  /* declare heroes variable */
  heroes: Array<Hero>;

  constructor(private api: APIService, private fb: FormBuilder) { }

  async ngOnInit() {
    this.createForm = this.fb.group({
      'name': ['', Validators.required]
    });

    /* fetch heroes when app loads */
    this.api.ListHeroes().then(event => {
      this.heroes = event.items;
    });
  }

  public onCreate(hero: Hero) {
    this.api.CreateHero(hero).then(event => {
      console.log('item created!');
      this.createForm.reset();
    })
    .catch(e => {
      console.log('error creating hero...', e);
    });
  }
}
```

- Add the following to your /src/app/app.component.html to display any of the heroes you have added:
```
<div *ngFor="let hero of heroes">
  <div>{{ hero.name }}</div>
</div>
```

- Finally, to subscribe to realtime data, update ngOnInit in /src/app/app.component.ts. When the app starts, this code will set up a subscription. The subscription will update the heroes array when new events are received (when a new hero is created):
```
async ngOnInit() {
  this.createForm = this.fb.group({
    'name': ['', Validators.required]
  });
  this.api.ListHeroes().then(event => {
    this.heroes = event.items;
  });

  /* subscribe to new heroes being created */
  this.api.OnCreateHeroListener.subscribe( (event: any) => {
    const newHero = event.value.data.onCreateHero;
    this.heroes = [newHero, ...this.heroes];
  });
}
```

## Step 10: Add Hero Service //TODO

## Step 11: Add Authentication Components //TODO
- Sign Up
- Sign In
- Sign Out