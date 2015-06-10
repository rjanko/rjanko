import React from 'react';
import _ from 'lodash';
import {branch} from 'baobab-react/decorators';

import rjankoModels from '../../models';
import {Component} from '../components/Component';
import Link from '../components/Link';

import subprojectModels from 'subproject/src/models';

let models1 = _.merge({}, rjankoModels);
let models = _.merge(models1, subprojectModels);

@branch({
  cursors: {
    list: ['admin', 'list']
  }
})
export default class ListPage extends Component {

  renderLoaded({entity, list}) {
    if (!list || !list[entity]) {
      return <div>loading!</div>;
    }
    return (
      <div>
        ListPage {entity}
        <hr />
        <Link name={`admin${entity}DetailsNew`}>create new {entity}</Link>
        <hr />
        <table>
          <tbody>
          <tr>
            <th></th>
            {Object.keys(models[entity].fields).map((field, j) =>
              <td style={{borderBottom: '1px solid #bbb'}} key={j}>
                {field}
              </td>
            )}
          </tr>
          {list[entity].map((item, i) =>
          <tr key={i}>
            <td><Link name={`admin${entity}Details`} params={{id: item._id}}>{i}</Link></td>
            {Object.keys(models[entity].fields).map((field, j) =>
              <td style={{borderBottom: '1px solid #bbb'}} key={j}>
                {JSON.stringify(item[field])}
              </td>
            )}
          </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }

}
