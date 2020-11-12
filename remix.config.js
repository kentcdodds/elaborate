module.exports = {
  appDirectory: './app',
  loadersDirectory:
    process.env.NODE_ENV === 'production'
      ? './server-build/loaders'
      : './server/loaders',
  serverBuildDirectory: './server-build/remix',
  browserBuildDirectory: './public/build',
  publicPath: '/build/',
  devServerPort: 8002,
}
