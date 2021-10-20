import React from 'react'

const Card = ({name, email, id}) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">            
            <img src={'https://robohash.org/${name}?150x150'} alt='robo'></img>
            {/* <img src="https://avataaars.io/?avatar" alt='robo'></img> */}
            <div>               
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card
