function Mainheader(mainobj){
console.log(mainobj)
    return(

        <header>
            <h1> main header</h1>
            <h2>welcome, {mainobj.username}</h2>
            
            <nav>
                <a href="#">about </a><a href="#">contact </a><a href="#">im a link </a>
            </nav>

        </header>
    )
}
export default Mainheader