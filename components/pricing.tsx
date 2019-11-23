import * as React from 'react'

const Pricing = () => {
  const [billedAnnually, setBilledAnnually] = React.useState(false)

  return (
    <section>
      <div className="container">
        <h1>Pricing</h1>

        <div className="row">
          <div className="col-3">
            <div className="pricing-card">
              <div className="pricing-card__header">
                <h2>&#36;29<span className="price-label"> per month</span></h2>
              </div>

              <div className="pricing-card__body">
                <h2>Maker</h2>

                <p>Best for individual wanting to start their first startup.</p>

                <ul>
                  <li>1 project</li>
                  <li>Ideas board</li>
                  <li>Build board</li>
                  <li>Scale board</li>
                </ul>
              </div>

              <div className="pricing-card__footer">
                <button>Start with Maker</button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="pricing-card">
              <div className="pricing-card__header">
                <h2>&#36;49<span className="price-label"> per month</span></h2>
              </div>

              <div className="pricing-card__body">
                <h2>Founder</h2>

                <p>Best for veteran startup makers and entrepreneurs who want more.</p>

                <ul>
                  <li>5 projects</li>
                  <li>10 users</li>
                  <li>Ideas board</li>
                  <li>Build board</li>
                  <li>Scale board</li>
                  <li>Integrations</li>
                </ul>
              </div>

              <div className="pricing-card__footer">
                <button>Start with Founder</button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="pricing-card">
              <div className="pricing-card__header">
                <h2>&#36;99<span className="price-label"> per month</span></h2>
              </div>

              <div className="pricing-card__body">
                <h2>Accelerator</h2>

                <p>Best for startup makers and entrepreneurs building their empire.</p>

                <ul>
                  <li>5 projects</li>
                  <li>Unlimited users</li>
                  <li>Ideas board</li>
                  <li>Build board</li>
                  <li>Scale board</li>
                  <li>Integrations</li>
                  <li>Progress dashboard</li>
                  <li>Portfolio management</li>
                </ul>
              </div>

              <div className="pricing-card__footer">
                <button>Start with Accelerator</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
