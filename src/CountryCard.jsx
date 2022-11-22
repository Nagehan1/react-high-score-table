import React from 'react'
import allCountryScores from './Scores'
import Card from 'react-bootstrap/Card';
import Players from './Players';
function CountryCard() {
  return (
    <div>
        
        <div style={{border:"1px solid black"}}>
        <div>
        {allCountryScores.map((country)=>{
            return(
                <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>High Scores: {country.name}</Card.Title>
       <Players names={country.scores}/>
      </Card.Body>
    </Card>)
     })}
     </div>
     </div>
    </div>
  )
}

export default CountryCard