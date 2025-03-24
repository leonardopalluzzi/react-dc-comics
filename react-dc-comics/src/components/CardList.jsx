import Card from './Card/Card'
import data from '../data/dc-comics-2/comics'
import { useState, useEffect } from "react";

export default function CardList() {
    //series filter
    const [series, setSeries] = useState("") //user input

    //artists filter
    const [artist, setArtist] = useState("") //user input

    //writers filter
    const [writer, setWriter] = useState("") //user input

    //title filter
    const [title, setTitle] = useState("") //user input

    //type filter
    const [type, setType] = useState("")


    //filter sum array
    const [filterValue, setFilter] = useState(type)

    // useEffect(() => {
    //     setFilter([type, title, writer, artist, series])
    // }, [type, title, writer, artist, series])

    //console.log(filterValue);



    const filteredData = data.filter(item => {
        return (
            item.type.includes(type)
            &&
            item.title.toLowerCase().includes(title)
            &&
            item.series.toLowerCase().includes(series.toLowerCase())
            &&
            series.toLowerCase().includes(series.toLowerCase())
            &&
            item.artists.some(currentArtist => {
                return (
                    currentArtist.toLocaleLowerCase().includes(artist.toLocaleLowerCase())
                )
            })
            &&
            item.writers.some(currentWriters => {
                return (
                    currentWriters.toLocaleLowerCase().includes(writer.toLocaleLowerCase())
                )
            })
        )
    })

    console.log(filteredData);

    return (
        <div>

            <div className="container filters">

                {/* title filter  */}
                <input placeholder='title' onChange={(e) => setTitle(e.target.value)} value={title} type="text" />

                {/* series filter  */}
                <input placeholder='series' onChange={(e) => setSeries(e.target.value)} value={series} type="text" />

                {/* artist filter  */}
                <input placeholder='artist' onChange={(e) => setArtist(e.target.value)} value={artist} type="text" />

                {/* writer filter  */}
                <input placeholder='writer' onChange={(e) => setWriter(e.target.value)} value={writer} type="text" />

                {/* type filter  */}
                <select onChange={(e) => setType(e.target.value)} name="filter_name" id="filter">
                    <option value="">select an type</option>
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