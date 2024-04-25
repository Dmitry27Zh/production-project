import webpack, { DefinePlugin, RuleSetRule } from 'webpack'
import path from 'path'
import { BuildPaths } from '../build/types/config'
import { buildCSSLoader } from '../build/loaders/buildCSSLoader';
import { buildSVGLoader } from '../build/loaders/buildSVGLoader';

export default ({config}: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }
  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')
  // @ts-ignore:next-line
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return {...rule, exclude: /\.svg$/i}
    } else {
      return rule
    }
  })
  config.module?.rules?.push(buildSVGLoader(), buildCSSLoader(true))
  config.plugins?.push(new DefinePlugin({
    __IS_DEV__: true
  }))

  return config
}
