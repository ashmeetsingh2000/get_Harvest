import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="above">
                <div className="list1">
                    <ul type="none">
                        <l1><h3>Harvest</h3></l1>
                        <span>
                            <li>Home</li>
                            <li>Why&nbsp;Havest</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Integration</li>
                            <li>Apps</li>
                            <li>Security</li>
                        </span>
                    </ul>
                </div>
                <div className="list2">
                    <ul type="none">
                        <l1><h3>Community</h3></l1>
                        <span>
                            <li>Customer&nbsp;Stories</li>
                            <li>Resources</li>
                            <li>Webinars</li>
                            <li>Help&nbsp;&&nbsp;Support</li>
                            <li>Integrate&nbsp;with Harvest</li>
                            <li>Time&nbsp;well&nbsp;Spent</li>
                            <li>Time&nbsp;in&nbsp;This&nbsp;Time</li>
                        </span>
                    </ul>
                </div>
                <div className="list3">
                    <ul type="none">
                        <l1><h3>Comapny</h3></l1>
                        <span>
                            <li>About&nbsp;Us</li>
                            <li>Blog</li>
                            <li>Press</li>
                            <li>Careers</li>
                            <li>Legal</li>
                            <li>contact&nbsp;Us</li>
                        </span>
                    </ul>
                </div>
                <div className="list4">
                    <ul type="none">
                        <li><h3 style={{ textDecoration: "none", color: "white" }}>We&nbsp;also&nbsp;make:</h3></li>
                        <div className="list4_inner">
                            <div className="list4_inner_left">
                                <h2>Harvest Forecast</h2>
                                <p style={{ color: "#A19CA0" }}>The fast and simple way to scedule your team across projects.</p>
                            </div>
                            <div className="list4_inner_right">
                                <img
                                    id="list4_inner_img"
                                    src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/misc/forecast-screen.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="below">
                <span style={{ color: "#A19CA0" }}>
                    &#xa9;&nbsp;2006-2021&nbsp;Harvest
                </span>
                <span style={{ float: "right", color: "#A19CA0" }}>
                    <i class="fa fa-twitter" aria-hidden="true">&nbsp;Twitter&nbsp;&nbsp;&nbsp;&nbsp;</i>
                    <i class="fa fa-linkedin" aria-hidden="true">&nbsp;Linkedin</i>
                </span>

            </div>
        </div>
    )
}
export default Footer
