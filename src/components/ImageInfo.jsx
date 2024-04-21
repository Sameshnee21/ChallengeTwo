import { useParams } from "react-router-dom";

function ImageInfo({ data }) {
  const { name } = useParams();

  return (
    <>
      <section className="image-wrapper">
        <div className="image-container">
          {data
            .filter((item) => item.name === name)
            .map((item, index) => (
              <div className="image-info" key={index}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default CardInfo;
