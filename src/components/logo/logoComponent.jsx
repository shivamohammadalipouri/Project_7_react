import "./logo.css";

const logoComponent = ({ srcImg }) => {

  return (

    <div className="div-img">
      <img src={srcImg} alt="LOGO" />
    </div>
    
  );
};

export default logoComponent;
