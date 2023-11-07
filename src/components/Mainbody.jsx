
import reactLogo from '../assets/react.svg'

function Mainbody(mainobj){

    return(
        <>
       <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h2>hello, {mainobj.username}</h2>
        </>
    )

}
export default Mainbody