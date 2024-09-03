import { config as baseConfig } from '@wdio/config';

export const config = {
  runner: 'local',
  path: '/',
  specs: [
    './test/specs/**/*.js' 
  ],
  maxInstances: 1,
  capabilities: [{
    browserName: 'chrome' 
  }],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://saucedemo.com', 
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: {
    require: ['./test/steps/**/*.js'], 
    backtrace: false,
    requireModule: ['@babel/register'],
    failFast: false,
    format: ['json:./reports/cucumber-report.json'],
    colors: true,
    snippetSyntax: undefined,
    source: true,
    profile: [],
    strict: false,
    tags: [],
    timeout: 60000
  },
  
};
