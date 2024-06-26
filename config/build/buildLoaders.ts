import webpack from 'webpack';
import { BuildOptions } from './types/config';
import {buildCSSLoader} from './loaders/buildCSSLoader'
import { buildSVGLoader } from './loaders/buildSVGLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = buildCSSLoader(isDev);
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  const svgLoader = buildSVGLoader();
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [['i18next-extract', { locales: ['en', 'ru'], keyAsDefaultValue: true }]],
      },
    },
  };

  return [babelLoader, typescriptLoader, cssLoader, svgLoader, fileLoader];
}
