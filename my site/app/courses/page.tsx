import Header from "../(components)/header/header"
import TextCard from "./(components)/textCard"
import ImgCard from "./(components)/imgCard"
function Courses() {
    return(
       <>
       <Header title="Courses"/>
       <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <TextCard title="Undergraduate Programs" />
          <TextCard title="Graduate Programs" />
           <TextCard title="Adult Learning & Degree Completion"/>
           
        </div>
        </section>
        <section className="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <ImgCard source= "/img/course1.png" alt="" title="Web Development"/>
          <ImgCard source="/img/course2.png" alt="" title="Artificial Intelligence" />
          <ImgCard source="/img/course3.png" alt="" title="Data Science" />


           
        </div>
    </section>
       
       </>
    )
  }
  export default Courses