import "./hero.css";

const Hero = ({ title, subtitle }) => {
  return (
    <section className="hero">
      <h2>{title}</h2>
      <img
        src={"https://image.zmenu.com/menupic/3250/w_20210819034524834545.jpg"}
        alt="Hero Image"
      />
    </section>
  );
};

export default Hero;
