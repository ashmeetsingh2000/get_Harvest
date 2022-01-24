import React, { useEffect } from 'react'
import style from "../CSS/customers.module.css"

function Customers() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className={style.main}>
            <div className={style.section1}>

                <div className={style.firstdiv}>
                    <div className={style.firstdiv_left}>
                        <h1>Don’t take our word for it</h1>
                        <p>Over 70,000 companies make the most of their time with Harvest.</p>
                        <div className={style.firstdiv_leftbuttons}>
                            <a href="#CreativeServicesSection"><div>
                                <span>Creative Services  </span><span><i class="fa fa-arrow-right"></i></span>
                            </div></a>
                            <a href="#WebDevelopmentITSection"><div>
                                <span>Web Development &amp; It  </span><span><i class="fa fa-arrow-right"></i></span>
                            </div></a>
                            <a href="#EngineeringSection"><div>
                                <span>Engineering, Design &amp; Architecture  </span><span><i class="fa fa-arrow-right"></i></span>
                            </div></a>
                            <a href="#ManagementConsultingSection"><div>
                                <span>Management Consulting  </span><span><i class="fa fa-arrow-right"></i></span>
                            </div></a>


                        </div>
                    </div>

                    <div className={style.firstdiv_right}>
                        <img className={style.firstdivimg} src="https://f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/illustrations/team-meeting@2x.png?width=600&name=team-meeting@2x.png" alt="" />
                    </div>
                </div>

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


            {/* Creative Services Section */}
            <div className={style.Services} id="CreativeServicesSection">
                <br />
                <br />
                <br />
                <br />
                <h1>Creative Services</h1>

                <div className={style.CreativeServicesBox}>

                    <div className={style.boxLeft}>
                        <img src="https://f.hubspotusercontent10.net/hubfs/19495563/customers/ueno/ueno-logo.svg" alt="" />
                        <p>&#8221;As soon as we started to hire people, we moved everything over to Harvest… Scaling would have been impossible without a time tracking tool.&#8221;</p>
                        <button><span>Read Story&nbsp;&nbsp;</span><i class="fa fa-arrow-right"></i></button>
                    </div>

                    <div className={style.boxRight}>
                        <img
                            src="https://f.hubspotusercontent10.net/hub/19495563/hubfs/ueno-photo-1@2x%202%20(1).jpg?width=1275&name=ueno-photo-1@2x%202%20(1).jpg"
                            alt=""
                        />
                    </div>

                </div>
                <div className={style.ServicesBoxes}>

                    <div className={style.top}>
                        {/* 1st box */}
                        <div className={style.boxes}>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/customers/ccd-innovation/ccd-logo-1.svg"
                                alt=""
                            />
                            <p>Harvest has helped culinary company CCD innovation step up their operational efficiency.</p>
                            <span>Read Story&nbsp;</span><i class="fa fa-arrow-right"></i>
                        </div>
                        {/* 2nd box */}
                        <div className={style.boxes}>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/customers/vayner-media/vayner-media-logo.svg"
                                alt=""
                            />
                            <p>Consulting agency VaynerMedia uses Harvest to surface patterns and opportunities.</p>
                            <span>Read Story&nbsp;</span><i class="fa fa-arrow-right"></i>
                        </div>
                        {/* 3rd box */}
                        <div className={style.boxes}>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/customers/area-17/area-17-logo.svg"
                                alt=""
                            />
                            <p>Interactive design agency Area 17 checks Harvest reports to keep tabs on their business.</p>
                            <span>Read Story&nbsp;</span><i class="fa fa-arrow-right"></i>
                        </div>
                    </div>

                    <div className={style.down}>
                        {/* 4th box */}
                        <div className={style.boxes}>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/customers/columbia/columbia-logo.svg"
                                alt=""
                            />
                            <p>Columbia's creative team uses Harvest to balance internal stakeholders.</p>
                            <span>Read Story&nbsp;</span><i class="fa fa-arrow-right"></i>
                        </div>
                        {/* 5th box */}
                        <div className={style.boxes}>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/customers/thecharles/the-charles-logo.svg"
                                alt=""
                            />
                            <p>The Charles uses time tracking to reinforce client and employee happiness.</p>
                            <span>Read Story&nbsp;</span><i class="fa fa-arrow-right"></i>
                        </div>
                        {/* 6th box */}
                        <div className={style.boxes}>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/customers/turnstyle/turnstyle-logo.svg"
                                alt=""
                            />
                            <p>Harvest enables design agency Turnstyle to stay mindful of smart business practices.</p>
                            <span>Read Story&nbsp;</span><i class="fa fa-arrow-right"></i>
                        </div>
                    </div>

                </div>

            </div>

            {/* Web Development & IT Section */}
            <div className={style.Services} id="WebDevelopmentITSection">
                <br />
                <br />
                <br />
                <br />
                <h1>Web Development &amp; IT</h1>
                <div className={style.WebServicesBox}>

                    <div className={style.boxLeft}>
                        <img src="https://f.hubspotusercontent10.net/hubfs/19495563/customers/zehner/zehner-logo.svg" alt="" />
                        <p>&#8221;We really focus on work-life balance in remote work… Time tracking reveals if somebody is overburdened and that becomes an immediate conversation.&#8221;</p>
                        <button><span>Read Story&nbsp;&nbsp;</span><i class="fa fa-arrow-right"></i></button>
                    </div>
                    <div className={style.boxRight}>
                        <img
                            src="https://f.hubspotusercontent10.net/hubfs/19495563/customers/zehner/zehner-photo-1@2x.jpg?width=475"
                            alt=""
                        />
                    </div>

                </div>
                <div className={style.ServicesBoxes}>

                    <div className={style.top}>
                        {/* 1st box */}
                        <div className={style.boxes}>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/customers/centric-digital/tras.svg"
                                alt=""
                            />
                            <p>Digital transformation company Centric Digital relies on Harvest’s reports and invoicing.</p>
                            <span>Read Story&nbsp;</span><i class="fa fa-arrow-right"></i>
                        </div>
                        {/* 2nd box */}
                        <div className={style.boxes}>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/customers/hashrocket/hashrocket-logo.svg"
                                alt=""
                            />
                            <p>Design &amp; development agency Hashrocket uses timers to track time throughout their day.</p>
                            <span>Read Story&nbsp;</span><i class="fa fa-arrow-right"></i>
                        </div>
                        {/* 3rd box */}
                        <div className={style.boxes}>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/customers/mutual-mobile/mutual-mobile-logo.svg"
                                alt=""
                            />
                            <p>Harvest has supported mobile development agency Mutual Mobile in their recent growth.</p>
                            <span>Read Story&nbsp;</span><i class="fa fa-arrow-right"></i>
                        </div>
                    </div>

                    <div className={style.down}>
                        {/* 4th box */}
                        <div className={style.boxes}>
                            <img
                                style={{ width: "20%" }}
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/customers/yld/yld-logo-1.svg"
                                alt=""
                            />
                            <p>Engineering consultancy YLD relies on Harvest to plan, staff, and manage their projects.</p>
                            <span>Read Story&nbsp;</span><i class="fa fa-arrow-right"></i>
                        </div>
                        {/* 5th box */}
                        <div className={style.boxes}>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/customers/logo-dovetail.svg"
                                alt=""
                            />
                            <p>Startup studio Dovetail tracks time with Harvest to build trust with clients.</p>
                            <span>Read Story&nbsp;</span><i class="fa fa-arrow-right"></i>
                        </div>
                        {/* 6th box */}
                        <div className={style.boxes}>
                            <img
                                style={{ width: "40%" }}
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/customers/juicyorange/juicyorange-logo-2.svg"
                                alt=""
                            />
                            <p>Harvest helps web design company Juicyorange justify their pricing.</p>
                            <span>Read Story&nbsp;</span><i class="fa fa-arrow-right"></i>
                        </div>
                    </div>

                </div>


            </div>

            {/* Engineering, Design & Architecture Section */}
            <div className={style.Services} id="EngineeringSection">
                <br />
                <br />
                <br />
                <br />
                <h1>Engineering, Design &amp; Architecture</h1>
                <div className={style.EngineeringServicesBox}>

                    <div className={style.boxLeft}>
                        <img src="https://f.hubspotusercontent10.net/hubfs/19495563/cooper-perkins/logo-cooper-perkins.svg" alt="" />
                        <p>&#8221;This morning we were writing an SOW and I thought, ‘This sounds like that other project we did. How much did that cost us?’ And it’s very easy to go into Harvest and find that information.&#8221;</p>
                        <button><span>Read Story&nbsp;&nbsp;</span><i class="fa fa-arrow-right"></i></button>
                    </div>
                    <div className={style.boxRight}>
                        <img
                            src="https://f.hubspotusercontent10.net/hubfs/19495563/cooper-perkins/cooper-perkins-photo-1@2x.jpg?width=475"
                            alt=""
                        />
                    </div>


                </div>
                <div className={style.ServicesBoxes}>

                    <div className={style.top}>
                        {/* 1st box */}
                        <div className={style.boxes}>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/adamick/adamick-logo.svg"
                                alt=""
                            />
                            <p>Harvest helps Adamick Architecture speed up invoicing and increase profitability.</p>
                            <span>Read Story&nbsp;</span><i class="fa fa-arrow-right"></i>
                        </div>
                        {/* 2nd box */}
                        <div className={style.boxes}>
                            <img
                                style={{ width: "60%" }}
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/customers/crossley-acoustics/crossley-acoustics-logo.svg"
                                alt=""
                            />
                            <p>Acoustic design firm Crossley Acoustics uses Harvest to track time while at job sites.</p>
                            <span>Read Story&nbsp;</span><i class="fa fa-arrow-right"></i>
                        </div>
                        {/* 3rd box */}
                        <div className={style.boxes}>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/customers/tekna/tekna-logo.svg"
                                alt=""
                            />
                            <p>Harvest helps product design company Tekna save time by streamlining their process.</p>
                            <span>Read Story&nbsp;</span><i class="fa fa-arrow-right"></i>
                        </div>
                    </div>

                </div>

            </div>
            {/* Management Consulting Section */}
            <div className={style.Services} id="ManagementConsultingSection">
                <br />
                <br />
                <br />
                <br />
                <h1>Management Consulting</h1>
                <div className={style.ManagementServicesBox}>

                    <div className={style.boxLeft}>
                        <img src="https://f.hubspotusercontent10.net/hubfs/19495563/luminary-labs/logo-index-luminarylabs-0fe6b11e1f976e648dc6907ba9a2a677a71ed9013820ed9dba0415aaa4c6bd5a-1.svg" alt="" />
                        <p>&#8221;Harvest was very key to helping me start my company – it allowed us to move from a world of managing a lot of subcontractors to managing a staff quite easily.&#8221;</p>
                        <button><span>Read Story&nbsp;&nbsp;</span><i class="fa fa-arrow-right"></i></button>
                    </div>
                    <div className={style.boxRight}>
                        <img
                            src="https://f.hubspotusercontent10.net/hubfs/19495563/luminary-labs/luminary-labs-photo-1@2x.jpg?width=475"
                            alt=""
                        />

                    </div>


                </div>
                <div className={style.ServicesBoxes}>

                    {/* 1st box */}
                    <div className={style.boxes}>
                        <img
                            src="https://f.hubspotusercontent10.net/hubfs/19495563/customers/clinovations/clinovations-logo-1.svg"
                            alt=""
                        />
                        <p>Healthcare strategists Clinovations streamlined their time tracking with Harvest.</p>
                        <span>Read Story&nbsp;</span><i class="fa fa-arrow-right"></i>
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
        </div>
    )
}

export default Customers
