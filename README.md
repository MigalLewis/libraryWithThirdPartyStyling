# ThirdPartyLibraryWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Create Library




## Use Third party styling in library
In this example I will be using angular material as the third party library with styling.
We will first create the library with a test application and when that is working we will publish and use the library in our project

#### Create Workspace
`ng new third-party-library-workspace --create-application=false`

`cd third-party-library-workspace/`
#### Generate Library
`ng generate library third-party-lib`
#### Generate Test Application
`ng g application third-part-test`

#### Build Test Application
`ng build third-part-test`

#### Generate component in library
`ng generate component header --project=third-party-lib`

after generating the library we can build the library
`ng build third-party-lib`

now import the libray into the test applications module and make use of the header component then run application to test

`ng serve`

now to add the third party library

In your workspace run 
`ng add @angular/material` 

this will add to your workspace and make it available in the library

then copy the `"@angular/material"` to the `peerDependencies` of the `third-party-lib/src/package.json`

add imports to the module you would like to use and then add the angular component see **header component** in `third-party-lib` for example 

#### build your lib

`ng build third-party-lib`

#### re run test app

`ng serve`

## Making use of library in external project

as a test I have published the library under `@omnipresent/third-party-lib@0.0.1` in order to use the library you should first install angular material on your project and install the library

`ng add @angular/material`
`npm install @omnipresent/third-party-lib@0.0.1`

now you will be able to use the library with the styles from angular material