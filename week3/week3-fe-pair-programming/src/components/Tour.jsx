function Tour({image, date, title, info, location, duration, cost}) {
  return (<>
    <article className="tour-card">
          <div className="tour-img-container">
            <img
              src={image}
              className="tour-img"
              alt={title}
            />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p> {info} </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map" />
                </span>
                {location}
              </p>
              <p>from €{cost}</p>
              <p>{duration} days</p>
            </div>
          </div>
        </article>
  </>);
}

export default Tour;

/*data mode
    id: 1,
    image: tour1,
    date: "august 26th, 2025",
    title: "Tibet Adventure",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "china",
    duration: 6,
    cost: 2100,
  
    <article className="tour-card">
        <div className="tour-img-container">
          <img
            src="images/tour-1.jpeg"
            className="tour-img"
            alt="Tibet Adventure"
          />
          <p className="tour-date">august 26th, 2025</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>Tibet Adventure</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            vitae tempore voluptatum maxime reprehenderit eum quod
            exercitationem fugit, qui corporis.
          </p>
          <div className="tour-footer">
            <p>
              <span>
                <i className="fas fa-map" />
              </span>
              china
            </p>
            <p>from €2100</p>
            <p>6 days</p>
          </div>
        </div>
      </article>
  
  
    */
