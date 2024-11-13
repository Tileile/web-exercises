import { useState } from 'react';
import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";


const Tours = () => {
  const [toursData, setToursData] = useState(tours);

  function handleDeleteTour(tourId) {
    setToursData((tours) => {
      return tours.filter((tour) => tour.id !== tourId)})
  }
  
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return <Tour key={tour.id} {...tour} onHide={handleDeleteTour} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
