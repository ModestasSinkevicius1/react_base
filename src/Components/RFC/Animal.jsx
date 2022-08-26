import randColor from '../../Utilities/random_color.js'

function Animal(props){
    return (
        <>
            <div className="animal">
                <img src={props.img} alt={props.animal + '-animal'} className='image'/>
                <figcaption style={{backgroundColor: randColor()}}>{props.animal}</figcaption>
            </div>
        </>
    );
}

export default Animal;