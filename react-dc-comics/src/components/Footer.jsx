export default function Footer() {

    return (
        <footer id="site_footer">
            <section id="top_footer">
                <div className="container d-flex">


                    <div className="left_footer d-flex">
                        <dl className="col-4">
                            <dt>DC COMICS</dt>
                            <dd><a href="#">Characters</a></dd>
                            <dd><a href="#">Comics</a></dd>
                            <dd><a href="#">Movies</a></dd>
                            <dd><a href="#">TV</a></dd>
                            <dd><a href="#">Games</a></dd>
                            <dd><a href="#">Videos</a></dd>
                            <dd><a href="#">News</a></dd>
                            <dt>SHOP</dt>
                            <dd><a href="#">Shop DC</a></dd>
                            <dd><a href="#">Shop DC Collectibles</a></dd>
                        </dl>
                        <dl className="col-4">
                            <dt>DC</dt>
                            <dd><a href="#">Terms Of Use</a></dd>
                            <dd><a href="#">Privacy policy (New)</a></dd>
                            <dd><a href="#">Ad Choices</a></dd>
                            <dd><a href="#">Advertising</a></dd>
                            <dd><a href="#">Jobs</a></dd>
                            <dd><a href="#">Subscriptions</a></dd>
                            <dd><a href="#">Talent Workshop</a></dd>
                            <dd><a href="#">CPSC Certificates</a></dd>
                            <dd><a href="#">Ratings</a></dd>
                            <dd><a href="#">Shop Help</a></dd>
                            <dd><a href="#">Contac Us</a></dd>
                        </dl>

                        <dl className="col-4">
                            <dt>SITES</dt>
                            <dd><a href="#">DC</a></dd>
                            <dd><a href="#">MAD Magazine</a></dd>
                            <dd><a href="#">DC Kids</a></dd>
                            <dd><a href="#">DC Universe</a></dd>
                            <dd><a href="#">DC Power Visa</a></dd>
                        </dl>

                        <dl className="col-4">

                        </dl>
                    </div>

                    <div className="right_footer"></div>
                    {/* <img src="./img/dc-logo-bg.png" alt="" /> */}


                </div>
            </section>

            <section id="bottom_footer">
                <div className="container d-flex">
                    <button className="btn">SING-UP NOW!</button>
                    <div className="social_icons d-flex">
                        <h4>FOLLOW US</h4>
                        <ul className="d-flex">
                            <li><a href="">F</a></li>
                            <li><a href="">T</a></li>
                            <li><a href="">Y</a></li>
                            <li><a href="">P</a></li>
                            <li><a href="">PS</a></li>
                        </ul>
                    </div>
                </div>
            </section>

        </footer>
    )
}