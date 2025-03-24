export default function Header({ nav }) {

    return (
        <header id="site_header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src="./img/dc-logo.png" alt="" />
                    </div>
                    <div className="col-6 menu">
                        <ul>

                            {nav.map(item => (
                                <li key={`nav-${item.id}`}><a className={item.active ? "active" : ""} href={item.link}>{item.title}</a></li>
                            ))}

                            {/* test  */}
                            {nav.map(comic => console.log(comic.id))}
                            {/* <li><a href="">CHARACTERS</a></li>
                            <li><a className={nav.active} href="">{nav.title}</a></li>
                            <li><a href="">MOVIES</a></li>
                            <li><a href="">TV</a></li>
                            <li><a href="">GAMES</a></li>
                            <li><a href="">COLLECTIBLES</a></li>
                            <li><a href="">VIDEOS</a></li>
                            <li><a href="">FANS</a></li>
                            <li><a href="">NEWS</a></li>
                            <li><a href="">SHOP</a></li> */}
                        </ul>
                    </div>
                </div>
            </div>

        </header>
    )
}