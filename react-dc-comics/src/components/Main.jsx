import CardList from './CardList'

export default function Main() {

    return (
        <main id="site_main">
            <div className="container">
                <label className="main_label" htmlFor="">CURRENT SERIES</label>
                <CardList />
            </div>
        </main>
    )
}