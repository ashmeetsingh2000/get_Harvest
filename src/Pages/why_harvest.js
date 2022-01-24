import React, { useEffect } from 'react'
import style from "../CSS/why_harvest.module.css"
import { NavLink } from "react-router-dom";

function Whyharvest() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className={style.section1}>

                <div className={style.firstdiv}>
                    <div className={style.firstdiv_left}>
                        <p className={style.p1}>Make time work for you</p>
                        <p className={style.p2}>
                            Plan and estimate projects with real data,
                            manage team capacity and workflow, invoice seamlessly,
                            and get paid fast.
                        </p>
                        <button className={style.firstdiv_button}> Start&nbsp;your&nbsp;FreeTrial</button>
                        <p className={style.p3}> Fully functional 30-days trial.No credit card required.</p>
                    </div>

                    <div className={style.firstdiv_right}>
                        <img className={style.firstdivimg} src="https://f.hubspotusercontent10.net/hub/19495563/hubfs/placeholders/product-launch-medium@2x.png?width=500&name=product-launch-medium@2x.png" alt="" />
                    </div>
                </div>

            </div>

            <div className={style.sectionBox}>

                <div className={style.boxRight}>

                    <h1>Simple time tracking your team will actually use</h1>
                    <ul>
                        <li><span>Track time from desktop or mobile.</span></li>
                        <li><span>Integrate time tracking into your existing workflow.</span></li>
                        <li><span>Easy-to-use experience that requires no training.</span></li>
                    </ul>
                    <NavLink exact to="/features" className={style.more_Features}>
                        <span>Learn More <i class="fa fa-arrow-right"></i></span>
                    </NavLink>

                </div>
                <div className={style.boxLeft}>

                    <div className={style.boxLeftText}>
                        <h3>“Having an easy, clean way to track time allows us to focus on the tough engineering problems where we bring value to our clients.”</h3>
                    </div>
                    <div className={style.boxLeftArrow}>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div className={style.boxLeftImg}>
                        <p>Genevieve Laing</p>
                        <img src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/featured-customers/logo-small-cooper-perkins.svg" alt="" />
                    </div>

                </div>

            </div>

            <hr className={style.horizontal_line} />

            <div className={style.sectionContent}>

                <div className={style.sectionContentImage}>
                    <img
                        src="https://f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/why-harvest/visual-projects.png?width=500&name=visual-projects.png" alt="" />
                </div>
                <div className={style.sectionContentText}>
                    <h1>Keep your projects profitable and on track</h1>
                    <ul>
                        <li><span>Get more accurate timesheet and cost data.</span></li>
                        <li><span>Use clear visual reports to compare time vs. budget.</span></li>
                        <li><span>Pinpoint which projects, tasks, and staff are driving up costs.</span></li>
                    </ul>
                    <NavLink exact to="/features" className={style.more_Features}>
                        <span>Learn More <i class="fa fa-arrow-right"></i></span>
                    </NavLink>
                </div>

            </div>

            <hr className={style.horizontal_line} style={{ marginBottom: "50px" }} />

            <div className={style.sectionBox}>

                <div className={style.boxRight}>

                    <h1>Invoice for your time and get paid fast</h1>
                    <ul>
                        <li><span>Bill confidently with accurate timesheets.</span></li>
                        <li><span>Easily turn hours into invoices and send them to your clients.</span></li>
                        <li><span>Get paid fast with PayPal and Stripe integrations.</span></li>
                    </ul>
                    <NavLink exact to="/features" className={style.more_Features}>
                        <span>Learn More <i class="fa fa-arrow-right"></i></span>
                    </NavLink>

                </div>
                <div className={style.boxLeft}>

                    <div className={style.boxLeftText} style={{ backgroundColor: "#21A5A0" }}>
                        <h3>“Our client required very accurate time records, and we needed to be able to generate invoices to charge them for that time. Harvest was just the tool for us.”</h3>
                    </div>
                    <div className={style.boxLeftArrow}>
                        <i style={{ color: "#21A5A0" }} class="fas fa-caret-down"></i>
                    </div>
                    <div className={style.boxLeftImg}>
                        <p style={{ position: "relative", left: "9px" }}> Tim Crossley </p>
                        <img src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/featured-customers/logo-small-crossley-acoustics.svg" alt="" />
                    </div>

                </div>

            </div>

            <hr className={style.horizontal_line} />

            <div className={style.sectionContent}>

                <div className={style.sectionContentImage}>
                    <img
                        src="https://f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/why-harvest/visual-team.png?width=500&name=visual-team.png"
                        alt=""
                    />
                </div>
                <div className={style.sectionContentText}>
                    <h1>Improve operations and plan for the future</h1>
                    <ul>
                        <li><span>Insightfully manage your team’s bandwidth to avoid burnout.</span></li>
                        <li><span>Review past data to improve how you scope and price work.</span></li>
                        <li><span>Know when you can take on new business (or grow your team).</span></li>
                    </ul>
                    <NavLink exact to="/features" className={style.more_Features}>
                        <span>Learn More <i class="fa fa-arrow-right"></i></span>
                    </NavLink>
                </div>

            </div>

            <hr className={style.horizontal_line} style={{ marginBottom: "50px" }} />

            <div className={style.sectionBox}>

                <div className={style.boxRight}>

                    <h1>Create evidence and increase transparency</h1>
                    <ul>
                        <li><span>Create a record of who worked on what, and for how long.</span></li>
                        <li><span>Share confidence-building reports with your clients.</span></li>
                        <li><span>Justify deadlines and staffing to internal stakeholders.</span></li>
                    </ul>
                    <NavLink exact to="/features" className={style.more_Features}>
                        <span>Learn More <i class="fa fa-arrow-right"></i></span>
                    </NavLink>

                </div>
                <div className={style.boxLeft}>

                    <div className={style.boxLeftText} style={{ backgroundColor: "#3D9DC1" }}>
                        <h3>“I feel that I can better explain to clients how we are billing them because we granularly track what we’re doing.”</h3>
                    </div>
                    <div className={style.boxLeftArrow}>
                        <i style={{ color: "#3D9DC1" }} class="fas fa-caret-down"></i>
                    </div>
                    <div className={style.boxLeftImg} style={{ position: "relative", left: "-40px" }}>
                        <p> Mark Robohm</p>
                        <img src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/featured-customers/logo-small-juicyorange.svg" alt="" />
                    </div>

                </div>

            </div>

            <hr className={style.horizontal_line} />

            <div className={style.text}>
                <span className={style.text_span1}>70,000+</span>
                <span className={style.text_span2}>COMPANIES TRACK TIME WITH HARVEST</span>
            </div>

            <div className={style.section_images}>
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-vw.png?noresize&amp;width=59&amp;height=60&amp;name=featured-vw.png" height="60" width="59" alt="Volkswagen" />
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-columbia.png?noresize&amp;width=196&amp;height=60&amp;name=featured-columbia.png" height="60" width="196" alt="Columbia University" />
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-dell.png?noresize&amp;width=59&amp;height=60&amp;name=featured-dell.png" height="60" width="59" alt="Dell" />
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-conde-nast.png?noresize&amp;width=149&amp;height=60&amp;name=featured-conde-nast.png" height="60" width="149" alt="Condé Nast" />
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-mcdonalds.png?noresize&amp;width=59&amp;height=60&amp;name=featured-mcdonalds.png" height="60" width="59" alt="McDonald’s" />
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-aclu.png?noresize&amp;width=72&amp;height=60&amp;name=featured-aclu.png" height="60" width="72" alt="ACLU" />
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-lululemon.png?noresize&amp;width=59&amp;height=60&amp;name=featured-lululemon.png" height="60" width="59" alt="Lululemon" />
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-amnesty-international.png?noresize&amp;width=132&amp;height=60&amp;name=featured-amnesty-international.png" height="60" width="132" alt="Amnesty International" />
            </div>


            <div className={style.footer}>
                <div className={style.footer_container}>

                    <div className={style.footer_left}>
                        <p className={style.p1}>Start tracking time for free</p>
                        <p className={style.p2}>
                            See if Harvest is right for you with a free,
                            fully functional 30-day trial. No credit card
                            required.
                        </p>
                        <button className={style.footer_button}>Start Your Free Trial</button>
                    </div>

                    <div className={style.footer_right}>
                        <img className={style.footer_img} width="500" src="https://f.hubspotusercontent10.net/hub/19495563/hubfs/illustrations/timesheets-medium.png?width=500&amp;name=timesheets-medium.png" alt="" />
                    </div>
                </div>
            </div>

        </>

    )
}

export default Whyharvest
