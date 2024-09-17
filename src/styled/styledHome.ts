import styled from "styled-components";

export const DivAllNav = styled.div`

/*Mobile*/
@media (max-width: 480px) {
  .cabecalho1 {
    display: flex;
    flex-direction: column;
  }

  .titulo1 {
    display: flex;
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 250%;
    text-shadow: 0.5vh 0.5vh rgb(58, 58, 58);
    justify-content: center;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 0;
    background-color: #115785;
    text-align: center;
    color: white;
    font-size: 40%;
    height: 25%;
  }

  .opcao {
    width: 100%;
    background-color: rgb(60, 139, 150);
    font-weight: 700;
  }
}



  /*Tablet*/
@media (min-width: 481px) and (max-width: 1024px) {
  .cabecalho1 {
    display: flex;
    flex-direction: column;
  }

  .titulo1 {
    display: flex;
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 250%;
    text-shadow: 0.5vh 0.5vh rgb(58, 58, 58);
    justify-content: center;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 0;
    background-color: #115785;
    text-align: center;
    color: white;
    font-size: 40%;
    height: 25%;
  }

  .opcao {
    width: 100%;
    background-color: rgb(60, 139, 150);
    font-weight: 700;
  }
}


  /*Desktop*/
  @media (min-width: 1025px) {
  .cabecalho1 {
    display: flex;
    flex-direction: column;
  }

  .titulo1 {
    display: flex;
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 400%;
    text-shadow: 0.5vh 0.5vh rgb(58, 58, 58);
    justify-content: center;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 0;
    background-color: #115785;
    text-align: center;
    color: white;
    font-size: 40%;
    height: 25%;
  }

  .opcao {
    width: 100%;
    font-size: 120%;
    background-color: rgb(60, 139, 150);
    font-weight: 700;
  }
}
`





export const DivHome1 = styled.div`

@media (max-width: 480px) {
  .box_home1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  #corpo11_home {
    display: flex;
    flex-direction: row;
    margin: 0 5%;
  }

  .imgjoia {
    width: 50%;
    border-radius: 20px 0 0 20px;
  }

  .id_home {
    font-size: 80%;
  }

  #corpo12_home {
    background-color: rgb(0, 140, 255);
    color: white;
    text-shadow: 1.5px 1.5px #3a4354;
    border-radius: 0 20px 20px 0;
    justify-content: end;
  }

  .id_home {
    margin-left: 2%;
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
  .box_home1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  #corpo11_home {
    display: flex;
    flex-direction: row;
    margin: 0 5%;
  }

  .imgjoia {
    width: 45%;
    border-radius: 20px 0 0 20px;
  }

  .id_home {
    font-size: 80%;
  }

  #corpo12_home {
    background-color: rgb(0, 140, 255);
    color: white;
    text-shadow: 1.5px 1.5px #3a4354;
    border-radius: 0 20px 20px 0;
    justify-content: end;
  }

  .id_home {
    margin-left: 2%;
  }
}

@media (min-width: 1025px) {
  .box_home1 {
    display: grid;
    grid-template-rows: 1fr 4fr;
    margin: 10vh 0 0 0;

    grid-template-areas:
      "texto  texto"
      "imagem imagem";
  }

  .titulo1_home {
    grid-area: texto;
    font-size: 3vh;
    margin: 0vh 0vh 0vh 15vh;
    font-family: "Open Sans", system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue",
      sans-serif;
  }

  #corpo11_home {
    display: flex;
    grid-area: imagem;
    justify-self: center;
  }

  .imgjoia {
    border-radius: 3vh 0 0 3vh;
    width: 70%;
  }

  #corpo12_home {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    background-color: rgb(0, 140, 255);
    color: white;
    text-shadow: 0.25vh 0.25vh #3a4354;
    border-radius: 0 3vh 3vh 0;
    
  }

  .id_home {
    margin: 6.5% 3% 6.5% 3%;
    font-size: 3.5vh;
  }
}
`



export const DivHome2 = styled.div`

@media (max-width: 480px) {
  .box_home2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8%;
  }

  #titulo2_home {
    color: #4facfe;
    font-size: 150%;
    text-shadow: 1px 1px #3a4354;
  }

  .img_motoristo {
    width: 80%;
    margin: 5% 10% 0;
    border-radius: 20px 20px 0 0;
    border: 3px solid #3a4354;
  }

  .class_home {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    text-align: center;
    margin: 3% 12%;
  }

  .img_reuniao {
    width: 80%;
    margin: 0% 10% 5%;
    border-radius: 0 0 20px 20px;
    border: 3px solid #3a4354;
  }

  #corpo22_home {
    text-align: center;
    margin: 0 5% 5%;
  }
}



@media (min-width: 481px) and (max-width: 1024px) {
  .box_home2 {
    display: flex;
    flex-direction: column;
    margin-top: 8%;
  }

  #titulo2_home {
    color: #4facfe;
    font-size: 150%;
    text-shadow: 1px 1px #3a4354;
  }

  .img_motoristo {
    width: 80%;
    margin: 5% 10% 0;
    border-radius: 20px 20px 0 0;
    border: 3px solid #3a4354;
  }

  .class_home {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    text-align: center;
    margin: 3% 12%;
  }

  .img_reuniao {
    width: 80%;
    margin: 0% 10% 5%;
    border-radius: 0 0 20px 20px;
    border: 3px solid #3a4354;
  }

  #corpo22_home {
    text-align: center;
    margin: 0 5% 5%;
  }
}

@media (min-width: 1025px) and (max-width: 1600px){
  .box_home2 {
    display: grid;
    grid-template-rows: 15vh 30vh 10vh;
    margin: 20vh 0 5vh 15vh;
    grid-template-areas:
      "texto1  texto1  texto1"
      "tome    tome    tome"
      "texto3  texto3  texto3";
  }

  #titulo2_home {
    grid-area: texto1;
    color: #4facfe;
    text-shadow: 0.25vh 0.25vh #3a4354;
    margin: 0 0 0 25vh;

    font-size: 7vh;
    font-family: "Open Sans", system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue",
      sans-serif;
  }

  #corpo21_home {
    grid-area: tome;
    display: grid;
    margin: 0 20vh 0 0;
    grid-template-rows: 30vh;
    grid-template-areas: "imagemm texto2 imagemr";
    font-size: 105%;
  }

  .class_home {
    grid-area: texto2;
    text-align: center;
    margin: 3vh 2vh 0;
    font-size: 100%;
  }

  .img_motoristo {
    grid-area: imagemm;
    height: 85%;
  }

  .img_reuniao {
    grid-area: imagemr;
    height: 85%;
  }

  #corpo22_home {
    grid-area: texto3;
    text-align: center;
    font-size: 3vh;
    margin: 0 15vh 0 0;
  }
}

@media (min-width: 1601px) {
  .box_home2 {
    display: grid;
    grid-template-rows: 15vh 30vh 10vh;
    margin: 20vh 0 5vh 15vh;
    grid-template-areas:
      "texto1  texto1  texto1"
      "tome    tome    tome"
      "texto3  texto3  texto3";
  }

  #titulo2_home {
    grid-area: texto1;
    color: #4facfe;
    text-shadow: 0.25vh 0.25vh #3a4354;
    margin: 0 0 0 25vh;

    font-size: 7vh;
    font-family: "Open Sans", system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue",
      sans-serif;
  }

  #corpo21_home {
    grid-area: tome;
    display: grid;
    margin: 0 20vh 0 0;
    grid-template-rows: 30vh;
    grid-template-areas: "imagemm texto2 imagemr";
    font-size: 100%;
  }

  .class_home {
    grid-area: texto2;
    text-align: center;
    margin: 3vh 2vh 0;
    font-size: 150%;
  }

  .img_motoristo {
    grid-area: imagemm;
    height: 85%;
  }

  .img_reuniao {
    grid-area: imagemr;
    height: 85%;
  }

  #corpo22_home {
    grid-area: texto3;
    text-align: center;
    font-size: 3vh;
    margin: 0 15vh 0 0;
  }
}
`



export const DivHome3 = styled.div`

@media (max-width: 480px){
  .box_home3 {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1%;
    background: #adadad;
    border-radius: 20px 20px 0 0;
    font-family: "Open Sans", system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue",
      sans-serif;
    font-size: 120%;
  }

  .coisa_boba {
    text-align: center;
    margin: 10% 5%;
    font-size: 200%;
    color: #3a4354;
    text-shadow: 1px 1px black;
  }

  #corpo31_home {
    width: 50%;
    background-color: white;
    margin: 5% 40% 0 10%;
    text-align: center;
    border-radius: 20px;
    border: 5px solid #d1d1d1;
    font-weight: 500;
  }

  #corpo32_home {
    width: 50%;
    background-color: white;
    margin: 5% 10% 0 40%;
    text-align: center;
    border-radius: 20px;
    border: 5px solid #d1d1d1;
    font-weight: 500;
  }

  #corpo33_home {
    width: 50%;
    background-color: white;
    margin: 5% 40% 0 10%;
    text-align: center;
    border-radius: 20px;
    border: 5px solid #d1d1d1;
    font-weight: 500;
  }

  #corpo34_home {
    width: 50%;
    background-color: white;
    margin: 5% 10% 0 40%;
    text-align: center;
    border-radius: 20px;
    border: 5px solid #d1d1d1;
    font-weight: 500;
  }

  #corpo35_home {
    width: 50%;
    background-color: white;
    margin: 5% 40% 20% 10%;
    text-align: center;
    border-radius: 20px;
    border: 5px solid #d1d1d1;
    font-weight: 500;

  }
}


@media (min-width: 481px) and (max-width: 1024px) {
    .box_home3 {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1%;
    background: #adadad;
    border-radius: 20px 20px 0 0;
    font-family: "Open Sans", system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue",
        sans-serif;
    font-size: 120%;
    }

    #corpo31_home {
    width: 50%;
    background-color: white;
    margin: 15% 40% 0 10%;
    text-align: center;
    border-radius: 20px;
    border: 5px solid #d1d1d1;
    }

    #corpo32_home {
    width: 50%;
    background-color: white;
    margin: 5% 10% 0 40%;
    text-align: center;
    border-radius: 20px;
    border: 5px solid #d1d1d1
    }

    #corpo33_home {
    width: 50%;
    background-color: white;
    margin: 5% 40% 0 10%;
    text-align: center;
    border-radius: 20px;
    border: 5px solid #d1d1d1
    }

    #corpo34_home {
    width: 50%;
    background-color: white;
    margin: 5% 10% 0 40%;
    text-align: center;
    border-radius: 20px;
    border: 5px solid #d1d1d1
    }

    #corpo35_home {
    width: 50%;
    background-color: white;
    margin: 5% 40% 10% 10%;
    text-align: center;
    border-radius: 20px;
    border: 5px solid #d1d1d1
    }
}


@media (min-width: 1025px) {
    .box_home3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-auto-rows: 35vh;
    width: 100%;
    margin-top: 1%;
    background: #adadad;
    border-radius: 2.5vh 2.5vh 0 0;
    font-family: "Open Sans", system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue",
        sans-serif;
    font-size: 1.75vh;
    }

    #corpo31_home {
    margin: 5vh 2vh 15vh 2vh;
    background: white;
    box-shadow: 0.8vh 0.6vh 0.4vh rgba(0, 0, 0, 0.25);
    border-radius: 3vh;
    border: 0.5vh #d1d1d1 solid;
    }

    #corpo32_home {
    margin: 15vh 2vh 5vh;
    background: white;
    box-shadow: 0.8vh 0.6vh 0.4vh rgba(0, 0, 0, 0.25);
    border-radius: 3vh;
    border: 0.5vh #d1d1d1 solid;
    }

    #corpo33_home {
    margin: 5vh 2vh 15vh 2vh;
    background: white;
    box-shadow: 0.8vh 0.6vh 0.4vh rgba(0, 0, 0, 0.25);
    border-radius: 3vh;
    border: 0.5vh #d1d1d1 solid;
    }

    #corpo34_home {
    margin: 15vh 2vh 5vh;
    background: white;
    box-shadow: 0.8vh 0.6vh 0.4vh rgba(0, 0, 0, 0.25);
    border-radius: 3vh;
    border: 0.5vh #d1d1d1 solid;
    }

    #corpo35_home {
    margin: 5vh 2vh 15vh 2vh;
    background: white;
    box-shadow: 0.8vh 0.6vh 0.4vh rgba(0, 0, 0, 0.25);
    border-radius: 3vh;
    border: 0.5vh #d1d1d1 solid;
    }

    .textinho {
    text-align: center;
    color: #3a4354;
    font-size: 100%;
    font-weight: 700;
    justify-self: center;
    align-self: center;
    }
}
`