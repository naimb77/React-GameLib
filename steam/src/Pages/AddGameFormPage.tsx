import React from 'react'
import AddGameForm from '../Components/AddGameForm'
import { Prop } from '../types';

export default function AddGameFormPage({gameLocalData, setGameLocalData}:Prop) {
    return (
        <div>
            <AddGameForm gameLocalData={gameLocalData} setGameLocalData={setGameLocalData}/>
        </div>
    )
}
