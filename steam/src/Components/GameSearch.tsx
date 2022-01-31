import React, { MouseEventHandler, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { IGame } from '../types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function GameSearch() {
    const [searchVal, setSearchVal] = useState<string>('');
    const [gameSearched, setGameSearched] = useState<IGame>();
    const [isEmpty, setIsEmpty] = useState<boolean>(false);

    const API_KEY = 'd4967418779f47b3a9c9863397223798';

    const handleSearch: React.MouseEventHandler<HTMLButtonElement> = async () => {
        if (searchVal !== "" || gameSearched?.name.toLowerCase().includes(searchVal)) {
            setIsEmpty(true)
            await fetch(`https://api.rawg.io/api/games/${searchVal}?key=${API_KEY}`)
                .then(response => response.json())
                .then(data => {
                    setGameSearched(data);
                })
                .catch(err => {
                    console.error(err);
                })
        }
        else {
            return console.log("Empty String")
        }

    }
    return (
        <div>
            <h1 style={{ marginTop: 30 }}>Search a game by name</h1>
            <input
                className='searchInput'
                onChange={(e) => { setSearchVal(e.target.value.toLowerCase().replaceAll(" ", "-")) }}
                style={{ marginTop: 20, width: 250, height: 37, outline: 'none' }}
                type="search" placeholder='Search by name...' />
                
            <Button
                onClick={handleSearch}
                style={{ marginBottom: 6 }}
                variant="dark">Search</Button>

            {isEmpty ?
                <Card className="card" key={gameSearched?.id} style={{ backgroundColor: '#333741', marginTop: 50, marginLeft: 400, marginRight: 400, marginBottom: 300 }}>
                    <Card.Img variant="top" src={gameSearched?.background_image} style={{ position: 'relative', height: 400, objectFit: 'fill'}} />
                    <Card.Body>
                        <Card.Title style={{ color: 'black' }}>{gameSearched?.name}</Card.Title>
                        <Link to={`/details/game/${gameSearched?.id}`}>
                            <Button variant="dark">Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
                : null}
        </div>
    )
}
