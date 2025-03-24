import Card from './Card/Card'
import data from '../data/dc-comics-2/comics'
import { useState, useEffect } from "react";

export default function CardList() {
    const [valori, setValori] = useState(['graphic novel', 'comic book', ""])
    const [userValue, setUserValue] = useState("")
    const [filterValue, setFilter] = useState(valori)

    useEffect(() => {
        setFilter(valori.filter(item => item == userValue))
    }, [userValue])

    const filteredData = data.filter(item =>
        item.type.includes(filterValue)
    )

    console.log(filteredData);

    return (
        <div>

            <div className="container">
                <select onChange={(e) => setUserValue(e.target.value)} name="filter" id="filter">
                    <option value="">select an option</option>
                    <option value="graphic novel">graphic novel</option>
                    <option value="comic book">comic book</option>
                </select>
            </div>
            <div className="row">

                {
                    console.log(data)

                }

                {filteredData.map(comic => <Card key={`card-${comic.id}`} src={comic.thumb} title={comic.series} />
                )}

            </div>
        </div>
    )
}