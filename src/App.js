import {useState} from 'react';
import {data} from './data';
import './App.css';

function App() {

    const [flower, setFlower] =  useState(0);

    const [showText, setShowText] =useState(false);

    const {id, name, description, species, image, showMore} = data[flower];

    const previouseFlower = () => {
        setFlower ((flower => {
            flower --;
            if (flower < 0) {return data.length -1;}
            return flower;
        }))
    }
    const nextFlower = () => {
        setFlower ((flower => {
                flower ++;
                if (flower > data.length -1) {flower=0;}
                return flower;
        }))
    }

    const showTextClick = (flower) => {
        flower.showMore= !flower.showMore
        setShowText(!showText)
    }

    return (
        <div>
            <div className='container'>
                <h1>Top 5 beautiful flowers</h1>
            </div>
            <div className='container'> 
            < div className="block">
                <img src={image} width='400px' alt='plant' className="pic" />   
                <div className='container'>  
                <button className="btn" onClick={previouseFlower}>Previous</button>
                <button className="btn" onClick={nextFlower}>Next</button>  
                </div>
            </div>
            </div>
            <div className='container'>
                <h2>{id} - {name}</h2>
            </div>
            <div className='container'>
                <h3>Species: {species}</h3>
            </div>
            <div className='container'>
                <p>{showMore ? description : description.substring(0,200) + '...'}
                <button className="show" onClick={() => showTextClick(data[flower])}> {showMore ? 'show less' : 'show more'} </button>
                </p>
            </div>
        </div>
        
    )
}

export default App;