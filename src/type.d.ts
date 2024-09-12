/// <reference types="vite-plugin-svgr/client" />
declare module '*.svg?react' {
  import React = require('react');

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}
declare namespace Intl {
  type Key =
    | 'calendar'
    | 'collation'
    | 'currency'
    | 'numberingSystem'
    | 'timeZone'
    | 'unit';

  function supportedValuesOf(input: Key): string[];
}

declare module '*webp' {
  const value: any;
  export = value;
}
