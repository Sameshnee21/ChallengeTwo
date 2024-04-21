import { Link } from "react-router-dom";

function ImageComponent({ data }) {
  return (
    <>
      <section className="wrapper">
        <div className="container">
          {data.map((item, index) => (
            <div className="image" key={index}>
              <h3>{item.name}</h3>
              <p>{item.title}</p>
              <Link to={`/info/${item.name}/`}>View Discription</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default ImageComponent;
