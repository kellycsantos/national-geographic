import { useEffect, useRef, useState } from 'react';
import style from './slider.module.scss'
import { items } from '../../constants';
import play from '../../assets/play_arrow.svg'


export default function Slider() {
    let [active, setActive] = useState(0);
    const intervalReferencia = useRef<any | null>(null);



    function changeBackground() {
        var body: any = document.querySelector('body')
        body.style.backgroundImage = `url('${items[0].image}')`;
        intervalReferencia.current = setInterval(() => {
            active < items.length - 1 ? setActive(++active) : setActive(active = 0)
            body.style.backgroundImage = `url('${items[active].image}')`;
            body.style.transition = '1.5s'
        }, 3500)
    }

    function pausar() {
        clearInterval(intervalReferencia.current)
        intervalReferencia.current = null;
    }

    function selectItem(id : number){
        pausar()

        var body: any = document.querySelector('body')
        setActive(id)
        body.style.backgroundImage = `url('${items[id].image}')`;

    }

    useEffect(() => {
        changeBackground()
        return () => {
            if (intervalReferencia.current) {
                clearInterval(intervalReferencia.current);
            }
        };
    }, [])
    return (
        <>
            <section className={style.show}>
                <h1>{items[active].title}</h1>
                <span>
                    <img src={play} alt='play trailer'/>
                <p>Watch Trailer </p>
                <p>{items[active].duration} min</p>        
                </span>
            </section>
            
            <div className={style.slider} >

                {
                    items.map((show, index) =>

                        <section key={show.id} onClick={() => selectItem(index)}  >
                            <h3>{show.id}</h3>
                            <div className={index  == active ? style.active : style.details}>
                                <h4>{show.title}</h4>
                                <p>{show.schedule}</p>
                            </div>
                        </section>

                    )
                }
            </div>

        </>
    )
}