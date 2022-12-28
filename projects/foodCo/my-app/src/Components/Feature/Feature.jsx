import "../../scss/style.css"
import rectangle37992 from "../../image/rectangle-37992@2x.png"
import rectangle3799 from "../../image/rectangle-3799@2x.png"
import rectangle37991 from "../../image/rectangle-37991@2x.png"

export default function Feature() {
  return (
      <section className="third-section container" id="feature">
        <h5 className="mt-4">Who We are</h5>
        <h2 className="my-4">Creating Events to Remember</h2>
        <article className="my-4">
            At White Table Catering, we are passionate about creating <br/> meaningful celebrations and memorable
            occasions.
        </article>
        <div className="foot_items my-5">
            <div className="row">
                <div className="col-lg-4">
                    <img src={rectangle37992} className="img-fluid" alt=""/>
                    <article className="px-3 py-5">
                        On branch level, you can specify which items and options to show as well as you can specify
                        their
                        prices.
                    </article>
                    <button className="btn btn-outline-dark">Explore</button>
                </div>
                <div className="col-lg-4">
                    <img src={rectangle3799} className="img-fluid" alt=""/>
                    <article className="px-3 py-5">
                        Add your branches and their locations so your customers can find them for pickup orders.
                    </article>
                    <button className="btn ">Explore</button>
                </div>
                <div className="col-lg-4">
                    <img src={rectangle37991} className="img-fluid" alt=""/>
                    <article className="px-3 py-5">
                        Link each branch with the zones it delivers to and define delivery fees and minimum order
                        for
                        each zone.
                    </article>
                    <button className="btn">Explore</button>
                </div>
            </div>
        </div>
    </section>
  )
}
