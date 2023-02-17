import task from '@cypress/code-coverage';
export default function (on, config) {
  task(on, config);
  return config; // <-- REQUIRED
}
