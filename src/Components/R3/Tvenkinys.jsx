import Daiktas from "./Daiktas";


//Task 2
function Tvenkinys(props){
    return(
        <div className="tvenkinys">
            <Daiktas array2={props.array} showIndex={true}/>
            <Daiktas array2={props.array} showIndex={false}/>
        </div>
    );
}

export default Tvenkinys;