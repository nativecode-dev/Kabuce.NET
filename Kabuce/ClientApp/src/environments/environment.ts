export const environment = {
  auth: {
    audience: 'https://iam.nativecode.com',
    clientId: 'wJIoxT5xfrFIcXqVn38jLG5Vhi40gWV1',
    domain: 'dev-acljxp0j.auth0.com',
    httpInterceptor: {
      allowedList: [
        {
          uri: '/api/*'
        }
      ]
    }
  },
  browser: {
    appId: 'Kabuce'
  },
  production: false
}

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
import 'zone.js/dist/zone-error'
