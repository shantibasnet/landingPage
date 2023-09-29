
import "./advertisement.css";

const Advertisement = (props) => {
  const { show, setShow } = props;
  if (show) {
    return (
      <div className="advertisement" onClick={() => setShow(false)}>
        <div className="model">
          <img
            src="https://s3-prod.adage.com/s3fs-public/styles/width_660/public/20210602_Wendys_Insitu_1.jpg"
            alt="Advertisement"
            height="400px"
          />
        </div>
      </div>
    );
  } else <></>;
};


export default Advertisement;
