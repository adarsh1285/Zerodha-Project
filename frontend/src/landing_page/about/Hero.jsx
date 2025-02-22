import React from 'react'

function Hero() {
    return (
        <div className="container p-5 mt-3">
            <div className="row">
                <h2 className='text-muted text-center'>We pioneered the discount broking model in India.<br />
                    Now, we are breaking ground with our technology.</h2>
                <hr className='mt-5' />
            </div>
            <div className="row p-5">
                <div className="col-6 my-4">
                    <p>We kick-started operations on the 15th of August, 2010<br /> with the goal of breaking all barriers that traders and<br /> investors face in India in terms of cost, support, and<br /> technology. We named the company Zerodha, a<br /> combination of Zero and "Rodha", the Sanskrit word for <br />barrier.<br /><br />
                        Today, our disruptive pricing models and in-house<br /> technology have made us the biggest stock broker in<br /> India.<br /><br />
                        Over 1+ Crore clients place millions of orders every day<br /> through our powerful ecosystem of investment<br /> platforms, contributing over 15% of all Indian retail<br /> trading volumes.
                    </p>
                </div>
                <div className="col-6 my-4">
                    <p>In addition, we run a number of popular open online<br /> educational and community initiatives to empower retail <br />traders and investors.<br /><br />

                        Rainmatter, our fintech fund and incubator, has invested<br /> in several fintech startups with the goal of growing the <br />Indian capital markets.<br /><br />

                        And yet, we are always up to something new every day.<br /> Catch up on the latest updates on our blog or see what<br /> the media is saying about us.</p>
                </div>
            </div><hr/>
        </div>
    )
}

export default Hero
