import React from 'react'
import { Link } from 'react-router-dom';

function Main() {
    return (
        <section className='main'>
            <p className='itemTitle'>Shop by Category</p>
            <div className='visual inner'>
                <div className='content'>
                    <p className='itemText'>What's New?</p>
                    <div className='itemBox'>
                        <img src='https://media.steelseriescdn.com/filer_public/da/42/da4281af-79e8-460e-bb0b-869568830fac/66024.png' />
                    </div>
                </div>
                <Link to="/Headset">
                    <div className='content'>
                        <p className='itemText'>Headsets</p>
                        <div className='itemBox'>
                            <img src='https://media.steelseriescdn.com/filer_public/05/22/05224136-7ddd-4690-81d7-29429e8fac2d/61528.png' />
                        </div>
                    </div>
                </Link>
                <Link to="/Speaker">
                    <div className='content'>
                        <p className='itemText'>Speakers</p>
                        <div className='itemBox'>
                            <img src='https://media.steelseriescdn.com/filer_public/57/05/57054ab4-9136-405c-bda0-c415a152af12/61547.png' />
                        </div>
                    </div>
                </Link>
                <Link to="/mouse">
                    <div className='content'>
                        <p className='itemText'>Mice</p>
                        <div className='itemBox'>
                            <img src='https://media.steelseriescdn.com/filer_public/57/48/57489509-806b-491e-94b8-426d4f4a58ed/62401.png' />
                        </div>
                    </div>
                </Link>

                <Link to="/Keyboard">
                    <div className='content'>
                        <p className='itemText'>Keyboard</p>
                        <div className='itemBox'>
                            <img src='https://media.steelseriescdn.com/filer_public/10/24/10242562-5f08-45ef-84df-f3724b0937f9/64865.png' />
                        </div>
                    </div>
                </Link>
                <Link to="/Pad">
                    <div className='content'>
                        <p className='itemText'>Mousepads</p>
                        <div className='itemBox'>
                            <img src='https://media.steelseriescdn.com/filer_public/a5/09/a5093131-aeb1-46f5-ae40-7f9211fe9fa9/63511.png' />
                        </div>
                    </div>
                </Link>
                <div className='content'>
                    <p className='itemText'>Controllers</p>
                    <div className='itemBox'>
                        <img src='https://media.steelseriescdn.com/filer_public/e5/2e/e52edbaa-e2ae-4b2d-b6a9-dd2a46a3b089/69076.png' />
                    </div>
                </div>
                <div className='content'>
                    <p className='itemText'>Accessories</p>
                    <div className='itemBox'>
                        <img src='https://media.steelseriescdn.com/filer_public/53/83/5383539b-19c8-473b-90a1-f6eb88577ecf/60141.png' />
                    </div>
                </div>
                <div className='content'>
                    <p className='itemText'>Exclusive & Limitied Editions</p>
                    <div className='itemBox'>
                        <img src='https://media.steelseriescdn.com/filer_public/e7/4a/e74a6505-6429-4a78-9183-d48b925eac92/62403.png' />
                    </div>
                </div>
                <div className='content'>
                    <p className='itemText'>SteelSeries Outlet Deals</p>
                    <div className='itemBox'>
                        <img src='https://media.steelseriescdn.com/filer_public/14/31/1431e29c-8b00-41ff-8285-d87d72a1e9c9/outlet4.png' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main