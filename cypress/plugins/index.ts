module.exports = (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
) => {
  config.baseUrl = `http://localhost:5000`
  Object.assign(config, {
    integrationFolder: 'cypress/e2e',
  })

  return config
}
