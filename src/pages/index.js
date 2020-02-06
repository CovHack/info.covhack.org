import { Link, graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/fire_point.png'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import useSiteMetadata from '../components/SiteMetadata'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {

    return (
      <Layout>
        <Helmet title='CovHack2020 - Day of Event' />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main special">
            <header className="major">
              <h2>Welcome!</h2>
              <p>
              </p>
            </header>

            <footer className="major">
              <ul className="actions">
                <li>
                  <a href="https://covhack2020.slack.com/" className="button special">
                    Join the Slack!
                  </a>
                </li>
                <li>
                  <a href="https://hardware.mlh.io/" className="button special">
                    Borrow Hardware
                  </a>
                </li>
                <li>
                  <a href="https://hack.mlh.io/" className="button special">
                    MLH Info
                  </a>
                </li>
              </ul>
            </footer>
            <br />
          </section>

          <section id="schedule" className="main">
            <header className="major">
              <h2>Schedule</h2>
              <p>
              </p>
            </header>
          </section>

          <section id="food" className="main">
            <header className="major">
              <h2>Food</h2>
              <p>
              </p>
            </header>
          </section>

          <section id="connectivity" className="main">
            <header className="major">
              <h2><span className="icon fa-wifi"></span> Connectivity</h2>
              <p>
                There are a few options for getting internet access at the event.
                As always, if you need help with anything please talk to a
                member of the team.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span class="icon fa-lock"></span>
                <h2>PHOENIX-NET</h2>
                WPA2-Enterprise: Your Coventry credentials!
                <br />< br/>
                For Coventry Students, you should already be on it!
              </li>
              <li className="style2">
                <span class="icon fa-lock"></span>
                <h2>eduroam</h2>
                WPA2-Enterprise: Your university credentials!
                <br /><br />
                Usable for the majority of european university students!
              </li>
              <li className="style3">
                <span className="icon fa-eye"></span>
                <h2>CovHack-Net-2GHZ</h2>
                WPA2-PSK: covhackftw<br /><br />
                <i>2.4GHz network suitable for connecting IoT devices</i>
              </li>
              <li className="style4">
                <span className="icon fa-eye"></span>
                <h2>CovHack-Net-5GHZ</h2>
                WPA2-PSK: covhackftw<br /><br />
                <i>5GHz Network for those who need it!</i>
              </li>
            </ul>
            <footer className="major">
              <p>
                We recommend you use <code>PHOENIX-NET</code> or <code>eduroam</code> as they offer the
                most security and best signal strength around the venue.
                
                The CovHack specific networks are meant to offer network access
                for IoT projects and those without eduroam, and all devices on
                them are on the same VLAN.
              </p>
            </footer>
          </section>

          <section id="help" className="main">
           <header className="major">
              <h2>Help</h2>
              <p>
              </p>
            </header>
          </section>

          <section id="submissions" className="main">
            <header className="major">
              <h2>Submissions</h2>
              <p>
                To handle project submissions this weekend, we are using Devpost.
                Submissions close at 11am, but you can continue hacking til 12.
                (Just a logistical thing!)
              </p>
              <p>
                We are judging projects based on how much you <b>learnt, built
                and shared</b>. We really want to know what you learnt during
                your project and really want you to share it with us!
              </p>
              <p>
                Everyone will get to demo their project in ECG-24. We realise
                it can be quite nerve wracking to demo like this, but it's
                a really good way of improving your public speaking!
              </p>
              <p>
                Tips for demoing:
                <ul>
                  <li>Skip the slide deck, you only have a few minutes to demo.</li>
                  <li>Tell us what was hard to do, how you resolved the issue, etc.</li>
                  <li>A good devpost submission makes it easier for the judges to reference back</li>
                </ul>
              </p>
              <p>
                Clarity on rules can be found <a href="https://github.com/MLH/mlh-hackathon-rules/blob/master/Rules.md">
                  here</a>.
                Please don't submit anything that would violate our code of conduct!
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a href="https://covhack2020.devpost.com/" className="button special">
                    Submit your project!
                  </a>
                </li>
              </ul>
            </footer>
          </section>

          <section id="has" className="main">
            <header className="major">
              <h2>Health and Safety</h2>
              <h3>Code of Conduct</h3>
              <p>
                As we are a MLH member event, we are following the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct.</a>
              </p>
              <p>
                Essentially, just be nice to each other! Don't harass anyone,
                stop if told to, don't make a sexualized atmosphere, etc.
              </p>
              <p>
                To report an incident to MLH you can use the following contact information:
                <ul>
                  <li>
                    Phone: +44 800 808 5675
                  </li>
                  <li>
                    Email: <a href="mailto:incidents@mlh.io">incidents@mlh.io</a>
                  </li>
                </ul>
              </p>
            </header>
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h3>Fires</h3>
                  <p>
                    We aren't expecting fires, so if you here the fire alarm
                    go off, head to the assembly point.
                  </p>
                </header>
              </div>
              <span class="image">
                <img src={pic01} alt="Assembly Point" />
              </span>
            </div>
            <header className="major">
              <h3>General rules</h3>
              <p>
                <ul>
                  <li>Don’t smoke near the building</li>
                  <li>Sign in when you enter/leave the building. So we know who is in the building if we have to evacuate.</li>
                  <li>Do not try to get in doors that do not open</li>
                  <li>No soldering</li>
                  <li>Let us know of any medical conditions that we may need to know about! This allows us to respond better!</li>
                  <li>Don't mess with our infrastructure with out talking to us.
                    We're fine with creative hacks, just don't go knocking the wifi offline, etc:</li>
                </ul>
              </p>
            </header>
          </section>

          <section id="sponsors" className="main">
            <header className="major">
              <h2>Sponsors</h2>
              <p>
                The event wouldn't be possible without our partners and sponsors! 
              </p>
            </header>
          </section>

          <section id="misc" className="main">
            <header className="major">
              <h2>Misc</h2>
              <p>
              </p>
            </header>
          </section>
    

          <section id="contact" className="main">
            <header className="major">
              <h2>Contact</h2>
              <p>
                If you need to get hold of an organiser, the core team are wearing CovHack hoodies while the volunteers
                all have CovHack t-shirts. Both have rainbow lanyards.
              </p>
              <p>
                The team can be reached at hello@covhack.org
              </p>
            </header>
          </section>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    markdownRemark {
      html
    }
  }
`

export default Index
