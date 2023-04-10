const element = (
  <div className="main-container">
    <div className="body-container">
      <h1 className="heading">Congratulations</h1>
      <div className="card-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="logo-image"
        />
        <h1 className="heading">kiran V</h1>
        <p className="paragraph">
          Vishnu institute of computer and Technology, Bhimavaram
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="logo-image1"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
