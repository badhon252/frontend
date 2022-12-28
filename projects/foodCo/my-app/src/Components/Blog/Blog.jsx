import "../../scss/style.css"
import image145 from "../../image/image-145@2x.png"
import image146 from "../../image/image-146@2x.png"
import image147 from "../../image/image-147@2x.png"

export default function Blog() {
  return (
       <section id="blog" className="fifth-section">
        <div classNameName="container">


            <div className="fifth-header">
                <h5 className="mt-4">Articles</h5>
                <h2 className="my-4">Trensing Stories</h2>
                <article className="my-4">Our team inspects every single Item and even learns your best day product cake
                    preferences- to make sure delivery just
                    thing you like</article>
            </div>
            <div className="fifth-body">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="fifth-content">
                            <img src={image145} alt="" className="img-fluid"/>
                            <p>Chocolate cake is easily best piece</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="fifth-content">
                            <img src={image146} alt="" className="img-fluid"/>
                            <p>The cake shop: best cakes in town</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="fifth-content">
                            <img src={image147} alt="" className="img-fluid"/>
                            <p>A sweet cake menu for a cupcakery</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
