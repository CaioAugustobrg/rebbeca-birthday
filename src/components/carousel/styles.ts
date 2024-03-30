import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

// Estilos para o componente Carousel
const StyledCarousel = styled(Carousel)`
  /* Adicione seus estilos personalizados aqui */
  width: 100%;
    margin-right: 10px;
  //padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;

  /* Estilos para os itens do Carousel */
  .react-multi-carousel-item {
    background-color: #f0f0f0;
    height: 280px;
    margin-right: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    cursor: pointer;
    div {
        border-radius: 5px;

    }
  }
`;

export default StyledCarousel;
