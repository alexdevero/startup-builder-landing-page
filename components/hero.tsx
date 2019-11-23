import * as React from 'react'

const Hero = () => (
  <section>
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="content">
              <h1 className="hero__title">Build your startup, the right way</h1>

              <h2 className="hero__subtitle">Before Startr: Building a startup feels chaotic, vague, risky, things slip, it&apos;s tough to see what is viable, and people are stressed. After Startr: Everything&apos;s clear, organized in one place, you&apos;re on top of things, your progress is clear, and you can focus on execution.</h2>

              <a className="btn hero__cta" href="#signUp">Give Startr a Try</a>
            </div>
          </div>

          {/* <div className="col-6">
            <img src="" alt="" />
          </div> */}
        </div>

        <style jsx>
          {`
            .hero__title {}

            .hero__title {}

            .hero__cta {}
          `}
        </style>
      </div>
    </div>
  </section>
)

export default Hero
