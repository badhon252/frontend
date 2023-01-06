import Classes from './Header.module.css'
export default function HeroSection() {
  return (
    <div className={Classes.heroSection}>

        <img src="https://avatars.githubusercontent.com/u/76884959?v=4" alt="Khalid Hossain" className={Classes.heroImg}/>

        <h1>Khalid Hossain</h1>
        <p>A passionate Frontend Developer Based in Bangladesh.
        </p>
    </div>
  )
}
