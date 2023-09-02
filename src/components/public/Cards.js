import React, { useEffect, useState } from 'react'
import Card from './Card'
import RickAndMortyService from '../../services/RickAndMorty.service';
import Pagination from './Pagination';
import { API_RM } from "../../constants/Api.constants";

const Cards = () => {

    const [personajes, setPersonajes] = useState([])
    const [info, setInfo] = useState({});


    useEffect(() => {
        all(API_RM.CHARACTER());
    }, [])

    const all = (params) => {
        RickAndMortyService.getAllCharacters(params)
            .then((data) => {
                setPersonajes(data.results)
                setInfo(data.info)

            })
            .catch((error) => console.log(error));
    }


    const onPrevious = () => {
        all(info.prev);
    }
    const onNext = () => {
        all(info.next);

    }

    const cardList = personajes.map((j) => <Card personaje={j} key={j.id} />)


    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
                    {cardList}

                </div>
            </div>
            <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}></Pagination>
        </div>

    )
}

export default Cards
