import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";
import "./Main.scss";

const MainPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [card, setCard] = useState(null);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCard({
        image: "images/image_k1.jpeg",
        title: "Кроссовки",
        description: "Единственные кроссовки в этом пространстве",
        price: "5 990 ₽",
      });
      setIsLoad(false);
    }, 2000);
  }, []);

  return (
    <div className="main">
      <div className="main__container">
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Пример карточки
        </h2>

        {isLoad ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "50vh",
              fontSize: "24px",
            }}
          >
            Загрузка карточки...
          </div>
        ) : (
          <Card
            image={card.image}
            title={card.title}
            description={card.description}
            price={card.price}
          />
        )}
      </div>
    </div>
  );
};

export default MainPage;
