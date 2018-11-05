/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Cpollo Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('cpollo.svg')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('get-started.html', language)}>Getting Started</Button>
            <Button href={docUrl('access_CpolloRole.html', language)}>Roles Contracts</Button>
           
          </PromoSection>
          <PromoSection>
            <Button href={docUrl('wallet_BaseWallet.html', language)}>Wallet Contracts</Button>
            <Button href={docUrl('templates_BurnERC20Template.html', language)}>Template Contracts</Button>
            <Button href={docUrl('token-crowdsale_TokenCrowdsale.html', language)}>Token Crowdsale Contracts</Button>
            
          </PromoSection>

        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="fourColumn">
    {[
      {
        content: 'When Cpollo detects scam in funds, we freeze all the funds and we will start a investigation',
        image: imgUrl('lock.png'),
        imageAlign: 'top',
        title: 'Killswitch Contracts',
      },
      {
        content: 'Parallel Coin offerings are a new type of crowdsale with vesting features. The price of tokens in a PCO is static for a determined amount of time with tokens purchased through vested smart contract crowd sale. The money raised with the PCO is via direct sells so the team does not need to sell tokens on the market to raise money.        ',
        image: imgUrl('PCO.png'),
        imageAlign: 'top',
        title: 'Parallel Coin Offering',
      },
    ]}
  </Block>
);

const FeatureCallout = () => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Feature Callout</h2>
    <MarkdownBlock>
      ### Killswitch Contracts, Wallet Role Contracts, Scam Alerts, Freeze Alerts,
      Verified Team with KYC, 
    </MarkdownBlock>
    <MarkdownBlock>
   ### Verified Human Resources with KYC,
      Tracking of all the funds using the power of Blockchain
      </MarkdownBlock>
  </div>
);

const LearnHow = () => (
  <Block background="light">
    {[
      {
        content: '1.Exchange ETH for CPLO in Platform or Deposit CPLO directly, 2.Use CPLO to start a Projects, 3. Project will undergo vetting process before launch, 4. After all milestones are met CPOLLO will release 100% of the funds, 5.Milestones must be met in order to release funds for Project, 6.Once Project passes the vetting Crowdsale can then begin',
        image: imgUrl('steps.png'),
        imageAlign: 'right',
        title: 'Learn How',
      },
    ]}
  </Block>
);

const TryOut = () => (
  <Block id="try">
    {[
      {
        content: 'You can check Cpollo platform',
        image: imgUrl('cpollo-blockchain.png'),
        imageAlign: 'left',
        title: 'Try it Out',
      },
    ]}
  </Block>
);

const Description = () => (
  <Block background="dark">
    {[
      {
        content: 'CPOLLO is a platform which is defined as an open and a crowdsourced project which utilizes the power of blockchain technology and decentralization to promote faster, more secure, and more efficient crowdsourcing services. The CPOLLO platform aims to serve as a transparent and unbiased hub for Projects. ',
        image: imgUrl('cpollo.svg'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users.filter(user => user.pinned).map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img src={user.image} alt={user.caption} title={user.caption} />
    </a>
  ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using This?</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
        </div>
      </div>
    );
  }
}

/*class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}*/



module.exports = Index;
