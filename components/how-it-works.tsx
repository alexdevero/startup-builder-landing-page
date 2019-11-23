import * as React from 'react'

const HowItWorks = () => (
  <section>
    <div className="container">
      <h1>How it Works</h1>

      <p>Startr is a platform that helps you brainstorm, collect, validate, build and scale your startup ideas.</p>

      <div className="row">
        <div className="col-2">
          <div className="row">
            <div className="col-6">
              <h3>1. Brainstorm</h3>

              <p>Brainstorm and collect interesting startup ideas you want to test.</p>
            </div>

            <div className="col-6">
              <h3>2. Validate</h3>

              <p>Set up and track tests for your ideas to find those that work.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <h3>3. Build</h3>

              <p>Plan, outline, build and manage prototypes (MVPs) for your ideas.</p>
            </div>

            <div className="col-6">
              <h3>4. Scale</h3>

              <p>Take your startup from a small scale to a million-dollar company.</p>
            </div>
          </div>
        </div>

        {/* <div className="col-2">
          <img src="" alt=""/>
        </div> */}
      </div>
    </div>
  </section>
)

export default HowItWorks
