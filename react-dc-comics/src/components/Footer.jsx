export default function Footer({ dcComics, shop, dc, sites }) {

    return (
        <footer id="site_footer">
            <section id="top_footer">
                <div className="container d-flex">


                    <div className="left_footer d-flex">
                        <dl className="col-4">
                            <dt>DC COMICS</dt>

                            {dcComics.map(item => (
                                <dd key={`comic-${item.id}`}><a href={item.link}>{item.title}</a></dd>
                            ))}
                            <dt>SHOP</dt>
                            {shop.map(item => (
                                <dd key={`shop-${item.id}`}><a href={item.link}>{item.title}</a></dd>
                            ))}
                        </dl>
                        <dl className="col-4">
                            <dt>DC</dt>
                            {dc.map(item => (
                                <dd key={`dc-${item.id}`}><a href={item.link}>{item.title}</a></dd>
                            ))}
                        </dl>

                        <dl className="col-4">
                            <dt>SITES</dt>
                            {sites.map(item => (
                                <dd key={`sites-${item.id}`}><a href={item.link}>{item.title}</a></dd>
                            ))}
                        </dl>

                        <dl className="col-4">

                        </dl>
                    </div>

                    <div className="right_footer"></div>


                </div>
            </section>

            <section id="bottom_footer">
                <div className="container d-flex">
                    <button className="btn">SING-UP NOW!</button>
                    <div className="social_icons d-flex">
                        <h4>FOLLOW US</h4>
                        <ul className="d-flex">
                            <li><a href="">
                                <img src="./img/footer-facebook.png" alt="" /></a></li>
                            <li><a href=""><img src="./img/footer-twitter.png" alt="" /></a></li>
                            <li><a href=""><img src="./img/footer-youtube.png" alt="" /></a></li>
                            <li><a href=""><img src="./img/footer-pinterest.png" alt="" /></a></li>
                            <li><a href=""><img src="./img/footer-periscope.png" alt="" /></a></li>
                        </ul>
                    </div>
                </div>
            </section>

        </footer>
    )
}