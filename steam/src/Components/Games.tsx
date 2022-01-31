import React, { useEffect, useState } from 'react'
import { IPlatform, IGames, Genre } from '../types';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


export default function Games() {

    const API_KEY = 'd4967418779f47b3a9c9863397223798';

    const [platformList, setPlatformList] = useState<IPlatform[]>([]);
    const [gameList, setGameList] = useState<IGames[]>([]);
    const [genreList, setGenreList] = useState<Genre[]>([]);

    const [platform, setPlatform] = useState<string>('');
    const [genre, setGenre] = useState<string>('');
    const [pageNumber, setPageNumber] = useState<number>(1);

    const [loading, setLoading] = useState<boolean>(false);

    const getPlatforms = async () => {
        await fetch(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setPlatformList(data.results)
            })
            .catch(err => {
                console.error(err);
            });
    }

    const getGenres = async () => {
        await fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setGenreList(data.results)
            })
            .catch(err => {
                console.error(err);
            });
    }

    let d: IGames[] = []
    const getGames = async () => {
        setLoading(false)
        for (let index = 0; index <= 2; index++) {
            await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page=${pageNumber + index}`)
                .then(response => response.json())
                .then(data => d.push(data.results))
                .catch(err => {
                    console.error(err);
                })
        }
        let flat = d.flat(3);

        setGameList(flat);
        setLoading(true)
    }

    const hasPlatform = (game: any) => {
        // (i: any) => i.platforms.some((p: any) => p.platform.name === platform)
        if (platform === "") return true;
        
        return game.platforms.some((p: any) => p.platform.name === platform);
    }

    const hasGenre = (game: any) => {
        // (i: any) => i.platforms.some((p: any) => p.platform.name === platform)
        if (genre === "") return true;
        
        return game.genres.some((g: any) => g.name === genre);
    }

    useEffect(() => {
        getPlatforms();
        getGenres();
        getGames();
    }, [pageNumber])

    return (
        <div >
            {loading ?
                <div>
                    <div style={{ marginTop: 30 }}>
                        <select style={{ borderRadius: 5, backgroundColor: 'lightgray', fontWeight: 500, padding: 4 }} defaultValue={'DEFAULT'} onChange={(e) => { { setPlatform(e.currentTarget.value)}}}>
                            <option style={{ fontWeight: 10 }} value="" selected>Choose a platform</option>
                            {
                                platformList.map((platform) => {
                                    return (
                                        <option style={{ backgroundColor: 'lightgray' }} key={platform.id}>{platform.name}</option>
                                    )})
                            }
                        </select>
                        <select style={{ marginLeft: 10, borderRadius: 5, backgroundColor: 'lightgray', fontWeight: 500, padding: 4 }} defaultValue={'DEFAULT'} onChange={(e) => { { setGenre(e.currentTarget.value) }}}>
                            <option style={{ fontWeight: 10 }} value="" selected>Choose a genre</option>
                            {
                                genreList.map((genre) => {
                                    return (
                                        <option style={{ backgroundColor: 'lightgray' }} key={genre.id}>{genre.name}</option>
                                    )})
                            }
                        </select>
                    </div>

                    <div className="allCards">
                        {
                            // gameList.filter(game => hasPlatform() && hasGenre())
                            gameList   
                                .filter(hasPlatform)
                                .filter(hasGenre)
                                .map((games: IGames, index: number) => {
                                return (
                                    <div>
                                        <Card className="card" style={{backgroundColor: '#282c34'}}>
                                            <Card.Img variant="top" src={games.background_image} style={{ position: 'relative', height: 400, objectFit: 'fill' }} />
                                            <Card.Body>
                                                <Card.Title style={{color: 'black'}}>{games.name}</Card.Title>
                                                <Link to={`/details/game/${games.id}`}>
                                                    <Button variant="dark">Details</Button>
                                                 </Link>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )})
                        }
                    </div>
                </div>
                : <div className="loader-wrapper">
                    <div className="loader"></div>
                </div>}
        </div>

    )
}
