import React, { useState, useEffect } from 'react'
import style from "../CSS/harvest_home.module.css"
import { NavLink } from "react-router-dom";

function HarvestHome() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [Customer1, setCustomer1] = useState(true);
    const [Customer2, setCustomer2] = useState(false);
    const [Customer3, setCustomer3] = useState(false);
    const [Customer4, setCustomer4] = useState(false);
    return (
        <>
            <div className={style.header}>
                <div className={style.content}>
                    <h1>Unlock the potential of time tracking</h1>
                    <p className={style.content_p1}>Harvest is modern time tracking software – for less</p>
                    <p className={style.content_p2}>effort, more joy, and improved profitability.</p>
                    <div className={style.content_button}>
                        <button className={style.content_button1}> Start Your Free Trial</button>
                        <button className={style.content_button2}> Learn More</button>
                    </div>
                    <p className={style.content_p3}>Fully functional 30-day trial. No credit card required.</p>
                </div>
            </div>

            <div className={style.section_one}>
                <img src="https://f.hubspotusercontent10.net/hub/19495563/hubfs/homepage-hero.png?width=850&amp;name=homepage-hero.png" alt="Time tracking software and time tracking app screenshot" />
            </div>

            <div className={style.text}>
                <span className={style.text_span1}>70,000+</span>
                <span className={style.text_span2}>COMPANIES TRACK TIME WITH HARVEST</span>
            </div>

            <div className={style.section_two}>
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-vw.png?noresize&amp;width=59&amp;height=60&amp;name=featured-vw.png" height="60" width="59" alt="Volkswagen" />
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-columbia.png?noresize&amp;width=196&amp;height=60&amp;name=featured-columbia.png" height="60" width="196" alt="Columbia University" />
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-dell.png?noresize&amp;width=59&amp;height=60&amp;name=featured-dell.png" height="60" width="59" alt="Dell" />
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-conde-nast.png?noresize&amp;width=149&amp;height=60&amp;name=featured-conde-nast.png" height="60" width="149" alt="Condé Nast" />
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-mcdonalds.png?noresize&amp;width=59&amp;height=60&amp;name=featured-mcdonalds.png" height="60" width="59" alt="McDonald’s" />
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-aclu.png?noresize&amp;width=72&amp;height=60&amp;name=featured-aclu.png" height="60" width="72" alt="ACLU" />
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-lululemon.png?noresize&amp;width=59&amp;height=60&amp;name=featured-lululemon.png" height="60" width="59" alt="Lululemon" />
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-amnesty-international.png?noresize&amp;width=132&amp;height=60&amp;name=featured-amnesty-international.png" height="60" width="132" alt="Amnesty International" />
            </div>

            <hr className={style.horizontal_line} />

            <div className={style.section_three}>
                <h3>FEATURES</h3>
                <h1>Everything to keep your team ticking</h1>
                <p>Harvest is so much more than just a simple time tracking software. We help you take the</p>
                <p>pulse of your business and achieve your goals.</p>

                <div className={style.features}>
                    <div className={style.feature1}>
                        <img
                            src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/homepage/icon-features-time.svg"
                            alt=""
                        />
                        <h2>Track Time</h2>
                        <p>Intuitive, lightweight time tracking that’s easy to learn and use.</p>
                        <span>Learn More</span>
                    </div>
                    <div className={style.feature2}>
                        <img
                            src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/homepage/icon-features-report.svg"
                            alt=""
                        />
                        <h2>Report & Analyze</h2>
                        <p>Gain insight and take action with easy to access visual reporting.</p>
                        <span>Learn More</span>
                    </div>
                    <div className={style.feature3}>
                        <img
                            src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/homepage/icon-features-pay.svg"
                            alt=""
                        />
                        <h2>Invoice & Get Paid</h2>
                        <p>Automatically transform time spent to revenue with native invoicing.</p>
                        <span>Learn More</span>
                    </div>
                    <div className={style.feature4}>
                        <img
                            src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/homepage/icon-features-integrate.svg"
                            alt=""
                        />
                        <h2>Integrate Workflows</h2>
                        <p>Harvest works with the tools and workflows your team knows and loves.</p>
                        <span>Learn More</span>
                    </div>
                </div>
                <NavLink exact to="/features" className={style.more_Features}>
                    <span>Browse All Features <i class="fa fa-arrow-right"></i></span>
                </NavLink>

            </div>

            <div className={style.sectionFour}>

                <div className={style.container}>
                    <div style={{ marginBottom: "30px" }}>
                        <h3>CUSTOMER SPOTLIGHT</h3>
                        <h1>Time tracking that helps businesses thrive</h1>
                        <p>From consultancies to internal departments, and across industries, we help growth-
                            minded organizations make the most of time.</p>
                    </div>

                    <div className={style.customers}>

                        {
                            Customer1 ?
                                <div className={style.customersdetails1}>
                                    <div className={style.image}>
                                        <img src="https://f.hubspotusercontent10.net/hub/19495563/hubfs/placeholders/placeholder-customers-home.jpg?width=385&height=295&name=placeholder-customers-home.jpg" alt="" />
                                    </div>
                                    <div className={style.details}>
                                        <p>&#8220;As soon as we started to hire people, we moved everything over to Harvest… Scaling would have been impossible without a time tracking tool.&#8221;</p>
                                        <span>Haraldur Thorleifsson, Ueno</span>
                                    </div>
                                </div>
                                : null
                        }
                        {
                            Customer2 ?
                                <div className={style.customersdetails2}>
                                    <div className={style.image}>
                                        <img src="https://f.hubspotusercontent10.net/hub/19495563/hubfs/homepage/zehner-1.jpg?width=385&height=295&name=zehner-1.jpg" alt="" />
                                    </div>
                                    <div className={style.details}>
                                        <p>&#8220;We really focus on work-life balance in remote work… Time tracking reveals if somebody is overburdened and that becomes an immediate conversation.&#8221;</p>
                                        <span>Noah Gedrich, Zehner</span>
                                    </div>
                                </div>
                                : null
                        }
                        {
                            Customer3 ?
                                <div className={style.customersdetails3}>
                                    <div className={style.image}>
                                        <img src="https://f.hubspotusercontent10.net/hub/19495563/hubfs/homepage/cooper-1.jpg?width=385&name=cooper-1.jpg" alt="" />
                                    </div>
                                    <div className={style.details}>
                                        <p>&#8220;Having an easy, clean way to track time allows us to focus on the tough engineering problems where we bring value to our clients.&#8221;</p>
                                        <span>Genevieve Laing, Cooper Perkins</span>
                                    </div>
                                </div>
                                : null
                        }
                        {
                            Customer4 ?
                                <div className={style.customersdetails4}>
                                    <div className={style.image}>
                                        <img src="https://f.hubspotusercontent10.net/hub/19495563/hubfs/homepage/luminary-1.jpg?width=385&name=luminary-1.jpg" alt="" />
                                    </div>
                                    <div className={style.details}>
                                        <p>&#8220;Harvest was key to helping me start my company – it allowed us to move from managing a lot of subcontractors to managing a staff quite easily.&#8221;</p>
                                        <span>Sara Holoubek, Luminary Labs</span>
                                    </div>
                                </div>
                                : null
                        }

                        <div className={style.buttons}>
                            <div className={!Customer1 ? style.buttondiv : style.buttondivactive}
                                onClick={() => {
                                    setCustomer1(true)
                                    setCustomer2(false)
                                    setCustomer3(false)
                                    setCustomer4(false)
                                }}
                            >
                                <h2>Creatice Services</h2>
                            </div>
                            <div className={!Customer2 ? style.buttondiv : style.buttondivactive}
                                onClick={() => {
                                    setCustomer1(false)
                                    setCustomer2(true)
                                    setCustomer3(false)
                                    setCustomer4(false)
                                }}
                            >
                                <h2>Web Development &#38; IT</h2>
                            </div>
                            <div className={!Customer3 ? style.buttondiv : style.buttondivactive}
                                onClick={() => {
                                    setCustomer1(false)
                                    setCustomer2(false)
                                    setCustomer3(true)
                                    setCustomer4(false)
                                }}
                            >
                                <h2> Engineering &#38; Design</h2>
                            </div>
                            <div className={!Customer4 ? style.buttondiv : style.buttondivactive}
                                onClick={() => {
                                    setCustomer1(false)
                                    setCustomer2(false)
                                    setCustomer3(false)
                                    setCustomer4(true)
                                }}
                            >
                                <h2>Management Consulting</h2>
                            </div>
                        </div>
                    </div>

                    <NavLink exact to="/customers" className={style.more_customers}>
                        <span>Meet Our Customers <i class="fa fa-arrow-right"></i></span>
                    </NavLink>
                </div>

            </div>

            <div className={style.sectionfive}>
                <div className={style.sectionfiveText}>
                    <h3>LEARNING RESOURCES</h3>
                    <h1>Supporting you along the way</h1>
                </div>

                <div className={style.boxContainer}>

                    <div className={style.sectionfiveBOX}>
                        <div className={style.icon}>
                            <img src="//f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/homepage/icon-resources-guides.svg" width="70" alt="" />
                        </div>
                        <div className={style.Boxcontent}>
                            <span>Guides &amp; Templates</span>
                            <p>Learn how to introduce your team to time tracking and make the most of Harvest.</p>
                        </div>
                    </div>

                    <div className={style.sectionfiveBOX}>
                        <div className={style.icon}>
                            <img src="//f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/homepage/icon-resources-webinars.svg" width="70" alt="" />
                        </div>
                        <div className={style.Boxcontent}>
                            <span>Webinars</span>
                            <p>Watch a quick intro to Harvest or sign up for a live session with one of our Experts.</p>
                        </div>
                    </div>

                    <div className={style.sectionfiveBOX}>
                        <div className={style.icon}>
                            <img src="//f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/homepage/icon-resources-help.svg" width="70" alt="" />
                        </div>
                        <div className={style.Boxcontent}>
                            <span>Help Center</span>
                            <p>Find the answers to all your questions or get in touch with one of our friendly Experts.</p>
                        </div>
                    </div>
                </div>

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

export default HarvestHome
