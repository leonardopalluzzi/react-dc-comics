export default function Footer() {

    return (
        <footer id="site_footer">
            <section id="top_footer">
                <div className="container d-flex">


                    <div className="left_footer d-flex">
                        <dl className="col-4">
                            <dt>DC COMICS</dt>
                            <dd>Characters</dd>
                            <dd>Comics</dd>
                            <dd>Movies</dd>
                            <dd>TV</dd>
                            <dd>Games</dd>
                            <dd>Videos</dd>
                            <dd>News</dd>
                        </dl>
                        <dl className="col-4">
                            <dt>DC</dt>
                            <dd>Terms Of Use</dd>
                            <dd>Privacy policy (New)</dd>
                            <dd>Ad Choices</dd>
                            <dd>Advertising</dd>
                            <dd>Jobs</dd>
                            <dd>Subscriptions</dd>
                            <dd>Talent Workshop</dd>
                            <dd>CPSC Certificates</dd>
                            <dd>Ratings</dd>
                            <dd>Shop Help</dd>
                            <dd>Contac Us</dd>
                        </dl>

                        <dl className="col-4">
                            <dt>SITES</dt>
                            <dd>DC</dd>
                            <dd>MAD Magazine</dd>
                            <dd>DC Kids</dd>
                            <dd>DC Universe</dd>
                            <dd>DC Power Visa</dd>
                        </dl>

                        <dl className="col-4">
                            <dt>SHOP</dt>
                            <dd>Shop DC</dd>
                            <dd>Shop DC Collectibles</dd>
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