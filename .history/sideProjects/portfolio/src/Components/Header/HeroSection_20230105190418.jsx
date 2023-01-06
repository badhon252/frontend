import Classes from './Header.module.css'
import Badhon from "../../img/badhon"
export default function HeroSection() {
  return (
    <div className={Classes.heroSection}>

        <img src={Badhon} className={Classes.heroImg}/>

        <h1>Khalid Hossain</h1>
        <p>A passionate Frontend Developer Based in Bangladesh.
        </p>
    </div>
  )
}
