import style from './Card.module.css'

export default function Card({ src, title }) { // props destructuring

    return (
        <div className={style.col_2}>
            <div className={style.card_header}>
                <img className={style.img_style} src={src} alt={title} />
            </div>

            <div className={style.card_body}>
                <span className={style.span_style}>{title}</span>
            </div>


        </div>
    )
}