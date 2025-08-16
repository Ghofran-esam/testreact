import { Fragment } from "react";
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/footer";
import Myphoto from "./assets/1.jpg"


function App(){
return <>
<img src={Myphoto}/>
<Navbar/>
<Footer/>
</>
}
export default App;