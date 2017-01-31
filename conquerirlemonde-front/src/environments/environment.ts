// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  wsPlanetsKubernetes: 'ws://192.168.0.11:8083/ws/planets/kubernetes',
  wsPlanetsFleet: 'ws://192.168.0.11:8083/ws/planets/fleet',
  newTrooperUrl: 'ws://192.168.0.11:8083/ws/trooper',
  dropTrooperUrl: 'http://192.168.0.11:8083/trooper/die',
  loginUrl: 'http://192.168.0.11:8083/api/authenticate'
};
