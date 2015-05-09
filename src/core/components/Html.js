import React from 'react';
import component from './component';

export default component('Html', ({webpackAssets, markup, state}) =>
  <html>
    <head>
      <meta charSet='utf-8' />
      {webpackAssets['app.css'] &&
        <link href={webpackAssets['app.css']} rel='stylesheet' type='text/css'/>
      }
      <title>project.name</title>
    </head>
    <body>
      <div id='app' dangerouslySetInnerHTML={{__html: markup}} />
      <script dangerouslySetInnerHTML={{__html: `window._app_state_ = ${JSON.stringify(state)};`}} />
      <script src={webpackAssets['vendor.js']} />
      <script src={webpackAssets['app.js']} />
    </body>
  </html>
);