import React, { useContext, useState } from 'react'
import { MagicCardsContext } from '../../context/context'
import './Cards.css'

const Cards = () => {

const { cards } = useContext( MagicCardsContext );

  return (
    <div className='cards'>
        { cards.map( values => {
            return (
                <div className='card'>
                    <h2> { values.name } - { values.cmc } &nbsp;&nbsp; Poder: { values.power === undefined ? 0 : values.power}</h2>
                    <p><strong>Color:</strong> { values.colorIdentity } - { values.colors } &nbsp; <strong>Tipo:</strong> { values.layout.toUpperCase() } &nbsp;&nbsp; <strong>Rareza:</strong> { values.rarity }</p>
                    <p className='card--mana'><strong>Coste de maná:</strong> { values.manaCost }</p>
                    <p className='card--criature'><strong>Tipo de criatura:</strong> { values.originalType === undefined ? 'No tiene raza' : values.originalType}</p>
                    <p><strong>Subtipo:</strong> { values.subtypes === undefined ? 'No tiene Subtipo' : values.subtypes }</p>
                    <div className='card--info'>
                        <p> { values.originalText }</p>
                        <p><strong>Habilidad:</strong> { values.text } <strong>Daño:</strong> { values.toughness }</p>
                    </div>
                </div>
            )
        }) }
    </div>
  )
}

export default Cards