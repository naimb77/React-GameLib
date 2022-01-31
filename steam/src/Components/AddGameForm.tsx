import React, {  useState } from 'react'
import { OwnGame, Prop } from '../types';

export default function AddGameForm({gameLocalData, setGameLocalData}:Prop) {

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [eMail, setEMail] = useState<string>('');
    const [gameName, setGameName] = useState<string>('');
    const [gameDescription, setGameDescription] = useState<string>('');
    

    const handleSubmit : React.FormEventHandler<HTMLFormElement> = (e) => {
            let prevGame:OwnGame[] = JSON.parse(localStorage.getItem("myGames") || '[]');

            let newGame:OwnGame = {
                id: Date.now().toString().slice(9),
                first_name: firstName,
                last_name: lastName,
                email: eMail,
                game_name: gameName,
                description: gameDescription
            };
            
            localStorage.setItem("myGames", JSON.stringify([...prevGame, newGame]));
            //setGameLocalData((prevD:OwnGame[]) => [...prevD, newGame])
    }

    return (
        <div>
            <h1 style={{ margin: 30, fontSize: 30 }}>Please fill in the form to add your own game</h1>
            <div>
                <form style={{display: 'flex', flexDirection: 'column', margin: 'auto', width: 300}} onSubmit={handleSubmit} placeholder='Add Game'>
                    <label style={{textAlign: 'left'}}>First Name:</label>
                    <input  type="text" required maxLength={80} 
                        onChange={(e) => setFirstName(e.target.value)}/>
                    <label style={{textAlign: 'left'}}>Last Name:</label>
                    <input  type="text" required maxLength={100} 
                        onChange={(e) => setLastName(e.target.value)}/>
                    <label style={{textAlign: 'left'}}>Email:</label>
                    <input  type="text" required
                        onChange={(e) => setEMail(e.target.value)}/>
                    <label style={{textAlign: 'left'}}>Game Name:</label>
                    <input  type="text" required maxLength={100} 
                        onChange={(e) => setGameName(e.target.value)}/>
                    <label style={{textAlign: 'left'}}>Game Description:</label>
                    <input  type="textarea" required maxLength={1000} 
                        onChange={(e) => setGameDescription(e.target.value)}/>

                    {/* <select required>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Dr">Dr</option>
                    </select> */}
                    {/* <label> Platforms </label>
                    <input required type="radio" value="PC"/>
                    <input required type="radio" value="PS5" placeholder='PC'/>

                    <label> Genres </label>
                    <input required type="radio" value="Action"/>
                    <input required type="radio" value="Adventure"/> */}

                    <input style={{marginTop: 20}} type="submit" value="Add Game"/>
                </form>
            </div>
        </div>
    )
}
