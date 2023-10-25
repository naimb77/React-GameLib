import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { IGame } from '../types';

interface paramTypes {
    id: string;
}

export default function GameDetail() {

    const API_KEY = 'd4967418779f47b3a9c9863397223798';

    // const { id }: paramTypes = useParams();
    const [gameDetail, setGameDetail] = useState<IGame>();

    //https://api.rawg.io/api/games/minecraft?key=d4967418779f47b3a9c9863397223798

    const getGameDetail = async () => {
        await fetch(`https://api.rawg.io/api/games/?key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setGameDetail(data);
            })
            .catch(err => {
                console.error(err);
            })
    }

    useEffect(() => {
        getGameDetail();
    }, [])

    let description = gameDetail?.description.replaceAll("<p>", "").replaceAll("</p>", "").replaceAll("<br>", "").replaceAll("<br />", "");


    return (
        <div>
            <h1 style={{marginTop: 10}}>{gameDetail?.name}</h1>
            <div style={{ marginLeft: 120, marginRight: 120, marginTop: 50, display: 'grid' }}>
                <div style={{}}>
                    <img src={gameDetail?.background_image} alt="detail" style={{ height: 350, width: 750 }} />
                </div>
                <div style={{ textAlign: 'left' }}>
                    <p>Website <svg style={{ width: 20, height: 20 }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                        <a style={{ textDecoration: 'none' }} href={gameDetail?.website} target='blank'>{gameDetail?.website}</a>
                    </p>
                    <div>
                        <p>Stores <svg style={{ width: 20, height: 20 }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        {
                            gameDetail?.stores.map((i) => {
                                return (
                                    <div>
                                        <li>
                                        <a style={{textDecoration: 'none'}} target='blank' href={`https://${i.store.domain}`}>www.{i.store.domain}</a>
                                        </li>
                                    </div>
                                )})
                        }
                        </p>
                    </div>
                    <div>Developers <svg style={{ width: 20, height: 20 }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>

                        {gameDetail?.developers.map((i) => {
                            return (
                                <div>
                                    <li>
                                    <span style={{fontSize: 14}}>{i.name}</span>
                                    </li>
                                </div>
                            )
                        })}
                    </div>
                    <p>Updated <svg style={{ width: 20, height: 20 }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>: {gameDetail?.updated.toString().slice(0, -9)}</p>
                </div>

                <div style={{ gridColumn: 'span 2', textAlign: 'left', fontSize: 13, marginLeft: 22, marginTop: 20}}>
                    <p>{description}</p>
                </div>

                <div style={{ gridColumn: 'span 2', placeSelf: 'start'}}>Genres <svg  style={{ width: 20, height: 20 }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
                {gameDetail?.genres.map((i) => {
                    return (
                        <span style={{
                            backgroundColor: 'gray',
                            borderRadius: 100,
                            padding: 5,
                            margin: 8,
                            lineHeight: 2.5,
                            wordBreak: 'break-all',
                            justifyContent: 'left'
                        }}>
                            {i.name}
                        </span>
                    )
                })}</div>

                <div style={{ gridColumn: 'span 2', textAlign: 'left'}}>Tags <svg style={{ width: 20, height: 20 }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                <div>
                
                {gameDetail?.tags.map((i) => {
                    return (
                        <span style={{
                            backgroundColor: 'gray',
                            borderRadius: 100,
                            padding: 5,
                            margin: 8,
                            lineHeight: 2.5,
                            wordBreak: 'break-all'
                        }}>
                            {i.name}
                        </span>
                    )
                })}
                </div>
                </div>
            </div>
        </div>
    )
}
