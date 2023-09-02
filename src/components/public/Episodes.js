import React, { useEffect, useState } from 'react'
import Episode from './Episode'
import PaginationEpisode from './PaginationEpisode'
import RickAndMortyService from '../../services/RickAndMorty.service';
import { API_RM } from "../../constants/Api.constants";

const Episodes = () => {

    const [episodio, setEpisodio] = useState([]);
    const [info, setInfo] = useState({});


    useEffect(() => {
        all(API_RM.EPISODE());
    }, [])

    const all = (params)=>{
        RickAndMortyService.getAllEpisode(params)
        .then((data) => {
            setEpisodio(data.results)
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

    const episodeList = episodio.map((j) => <Episode episodios={j} key={j.id} />)

    return (
        <div className="card mb-3 container">
            <div className="row g-0 mt-4 mb-4" >
                {episodeList}
            </div>
            <PaginationEpisode prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} ></PaginationEpisode>
        </div>
    )
}

export default Episodes
