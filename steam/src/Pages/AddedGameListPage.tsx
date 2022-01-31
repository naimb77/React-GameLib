import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap';
import { OwnGame, Prop } from '../types';

export default function AddedGameListPage({ gameLocalData, setGameLocalData }: Prop) {

    useEffect(() => {
        setGameLocalData(JSON.parse(localStorage.getItem('myGames') || '[]'))
    }, [])


    const handleClick = (game: OwnGame) => () => {
        window.location.reload();
        let games = JSON.parse(localStorage.getItem("myGames") || '[]')
        let filteredGames = games.filter((x: OwnGame) => x.id !== game.id)
        return localStorage.setItem("myGames", (JSON.stringify(filteredGames)))
    }

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Game Name</th>
                        <th>Description</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                {
                    gameLocalData.map((i) => {
                        return (
                            <tbody key={i.id}>
                                <tr>
                                    <td>{i.id}</td>
                                    <td>{i.first_name}</td>
                                    <td>{i.last_name}</td>
                                    <td>{i.email}</td>
                                    <td>{i.game_name}</td>
                                    <td>{i.description}</td>
                                    <td><Button variant="danger" onClick={handleClick(i)}>Remove</Button></td>
                                </tr>
                            </tbody>

                        )
                    })

                }
            </Table>
        </div>
    )
}
