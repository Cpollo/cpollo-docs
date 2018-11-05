/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

class Users extends React.Component {
  render() {
    if ((siteConfig.partners || []).length === 0) {
      return null;
    }
    const showcase = siteConfig.partners.map(partner => (
      <a href={partner.infoLink} key={partner.infoLink}>
        <img src={partner.image} alt={partner.caption} title={partner.caption} />
      </a>
    ));

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>CPOLLO Partners</h1>
             
            </div>
            <div className="logos">{showcase}</div>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
