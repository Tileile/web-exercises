import { tours } from "../data"
import Tour from "./Tour"
import Title from "./Title"
function Tours() {
  return (
<>
  {/* Tours  section starts */}
  <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
    <div className="section-center featured-center">
      
      {tours.map( (tour) => <Tour key={tour.id} {...tour}/>)}
    
    </div>
  </section>
  {/*  Tours section ends */}
</>

  );
}

export default Tours;
