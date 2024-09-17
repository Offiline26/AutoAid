import styled from "styled-components"

export const DivServicos1 = styled.div`

@media (max-width: 480px) {
  .box_servico11 {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10% 0 30%;
    }

    .box_servico12 {
        display: flex;
        flex-direction: column;
        width: 80%;
    }

    #corpo11_servico {
        background-color: #00f2fe;
        color: white;
        text-shadow: 2px 2px #115785;
        width: 100%;
        font-size: 150%;
        border-radius: 20px 0 20px 0;
        text-align: center;
        font-weight: 700;
    }

    #img11_servico {
        width: 100%;
    }

    #corpo12_servico {
        width: 80%;
    }

    #texto11_servico {
        width: 80%;
        text-align: center;
        color: black;
        font-size: 120%;
        font-family: Open Sans;
        font-weight: 700;
        margin: 5% 0 0 10%;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
    }
  }



  @media (min-width: 481px) and (max-width: 1024px) {
    .box_servico11 {
        display: flex;
        flex-direction: row;
        margin: 5% 5% 0;
    }

    .box_servico12 {
        display: flex;
        flex-direction: column;
        width: 43%;
    }

    #corpo11_servico {
        background-color: #00f2fe;
        color: white;
        text-shadow: 2px 2px #115785;
        width: 100%;
        font-size: 150%;
        border-radius: 20px 0 0 0;
        text-align: center;
        font-weight: 700;
    }

    #img11_servico {
        width: 100%;
    }

    #corpo12_servico {
        width: 52%;
    }

    #texto11_servico {
        width: 80%;
        text-align: center;
        color: black;
        font-size: 120%;
        font-family: Open Sans;
        font-weight: 700;
        margin: 5% 0 0 10%;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
    }
  }


  @media (min-width: 1025px) {
    .box_servico11 {
        display: flex;
        flex-direction: row;
        margin: 5% 5% 0;
    }

    .box_servico12 {
        display: flex;
        flex-direction: column;
        width: 43%;
    }

    #corpo11_servico {
        background-color: #00f2fe;
        color: white;
        text-shadow: 2px 2px #115785;
        width: 100%;
        font-size: 180%;
        border-radius: 20px 0 0 0;
        text-align: center;
        font-weight: 700;
    }

    #img11_servico {
        width: 100%;
    }

    #corpo12_servico {
        width: 52%;
    }

    #texto11_servico {
        width: 80%;
        text-align: center;
        color: black;
        font-size: 280%;
        font-family: Open Sans;
        font-weight: 700;
        margin: 5% 0 0 10%;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
    }
  }
`




export const DivServicos2 = styled.div`
@media (max-width: 480px) {
  .box_servico21 {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        margin: 10% 0 20%;
    }

    .box_servico22 {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: 0 0 15%;
    }

    #corpo21_servico {
        background: #4DC6EC;
        border-radius: 0 20px 0 20px;
        text-align: center;
        color: white;
        font-weight: 700;
        font-size: 150%;
        text-shadow: 2px 2px #115785;
    }

    #img21_servico {
        width: 100%;
    }

    #corpo22_servico {
        width: 80%;
    }

    #texto21_servico {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
        text-align: center;
        color: black;
        font-size: 120%;
        font-weight: 700;
        width: 80%;
        margin: 5% 10%;
    }
  }


  @media (min-width: 481px) and (max-width: 1024px) {
    .box_servico21 {
        display: flex;
        flex-direction: row;
        margin: 7.5% 0 5% 5%;
    }

    .box_servico22 {
        display: flex;
        flex-direction: column;
        width: 52%;
        margin: 0;
    }

    #corpo21_servico {
        background: #4DC6EC;
        border-radius: 0 20px 0 0;
        text-align: center;
        color: white;
        font-weight: 700;
        font-size: 150%;
        text-shadow: 2px 2px #115785;
    }

    #img21_servico {
        width: 100%;
    }

    #corpo22_servico {
        width: 43%;
    }

    #texto21_servico {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
        text-align: center;
        color: black;
        font-size: 120%;
        font-weight: 700;
        width: 80%;
        margin: 5% 10%;
    }
  }


  @media (min-width: 1025px) {
    .box_servico21 {
        display: flex;
        flex-direction: row;
        margin: 7.5% 0 5% 5%;
    }

    .box_servico22 {
        display: flex;
        flex-direction: column;
        width: 52%;
        margin: 0;
    }

    #corpo21_servico {
        background: #4DC6EC;
        border-radius: 0 20px 0 0;
        text-align: center;
        color: white;
        font-weight: 700;
        font-size: 180%;
        text-shadow: 2px 2px #115785;
    }

    #img21_servico {
        width: 100%;
    }

    #corpo22_servico {
        width: 43%;
    }

    #texto21_servico {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
        text-align: center;
        color: black;
        font-size: 260%;
        font-weight: 700;
        width: 80%;
        margin: 5% 10%;
    }
  }
`


export const DivServicos3 = styled.div`
@media (max-width: 480px) {
    #texto3_servico {
        text-align: center;
        margin: 10% 0 10% 0;
        color: #76b9f0;
        font-size: 320%;
        font-weight: 700;
    }

    #corpo31_servico {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: linear-gradient(180deg, #0BC7F0 0%, #0B3677 100%);
        border-top-left-radius: 25px;
        border-top-right-radius: 25px
    }

    .box_servico31 {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 5% 0
    }

    .artigo31 {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
        margin: 0 10%;
    }

    #corpo32_servico {
        width: 100%;
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        color: rgb(28, 101, 134);
        text-align: center;
        font-weight: 700;
        font-size: 110%;
    }

    .pneu {
        margin: 3%;
    }

    #texto31_servico {
        width: 100%;
        color: white;
        text-align: center;
        font-size: 120%;
        font-weight: 700;
        margin: 10% 0;
    }

    .artigo32 {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
        margin: 0 10%;
    }

    #corpo33_servico {
        width: 100%;
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        color: rgb(28, 101, 134);
        text-align: center;
        font-weight: 700;
        font-size: 110%;
    }

    .eletrica {
        margin: 3%;
    }

    #texto32_servico {
        width: 100%;
        color: white;
        text-align: center;
        font-size: 120%;
        font-weight: 700;
        margin: 10% 0;

    }

    .artigo33 {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
        margin: 0 10%;
    }

    #corpo34_servico {
        width: 100%;
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        color: rgb(28, 101, 134);
        text-align: center;
        font-weight: 700;
        font-size: 110%;
    }

    #texto33_servico {
        width: 100%;
        color: white;
        text-align: center;
        font-size: 120%;
        font-weight: 700;
        margin: 10% 0;
    }

    .motor {
        margin: 3%;
    }

    .artigo34 {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
        margin: 0 10%;
    }

    #corpo35_servico {
        width: 100%;
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        color: rgb(28, 101, 134);
        text-align: center;
        font-weight: 700;
        font-size: 110%;
    }

    #texto34_servico {
        width: 100%;
        color: white;
        text-align: center;
        font-size: 120%;
        font-weight: 700;
        margin: 10% 0;
    }

    .crescer {
        margin: 3%;
    }
    .box_servico32 {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        margin: 5% 0
    }

    .artigo35 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
  #texto4_servico {
        text-align: center;
        color: white;
        font-size: 30px;
        font-weight: 700;
        text-transform: uppercase;
        margin: 0 0 5% 0;
    }

    #corpo4_servico {
        background: white;
        box-shadow: 6px 8px 4px rgba(0, 0, 0, 0.25);
        border-radius: 33px;
        color: rgb(28, 101, 134);
        width: 80%;

    }

    .bot {
        margin: 2%;
        color: rgb(28, 101, 134);
        text-align: center;
        font-weight: 700;
        font-size: 100%;

    }
  }


  @media (min-width: 481px) and (max-width: 1024px) {
    #texto3_servico {
        text-align: center;
        margin: 10% 0;
        color: #76b9f0;
        font-size: 320%;
        font-weight: 700;
    }

    #corpo31_servico {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: linear-gradient(180deg, #0BC7F0 0%, #0B3677 100%);
        border-top-left-radius: 25px;
        border-top-right-radius: 25px
    }

    .box_servico31 {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin: 5% 0
    }

    .artigo31 {
        display: flex;
        flex-direction: column;
        width: 20%;
        margin: 0 5%;
    }

    #corpo32_servico {
        width: 100%;
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        color: rgb(28, 101, 134);
        text-align: center;
        font-weight: 700;
        font-size: 100%;
        margin: 0 0 10% 0;
    }

    .pneu {
        margin: 3%;
    }

    #texto31_servico {
        width: 100%;
        text-align: left;
        color: white;
        font-size: 100%;
        font-weight: 700;
    }

    .artigo32 {
        display: flex;
        flex-direction: column;
        width: 20%;
        margin: 0 5%;
    }

    #corpo33_servico {
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        color: rgb(28, 101, 134);
        text-align: center;
        font-weight: 700;
        font-size: 100%;
        margin: 0 0 10% 0;
    }

    .eletrica {
        margin: 3%;
    }

    #texto32_servico {
        width: 130%;
        text-align: left;
        color: white;
        font-size: 100%;
        font-weight: 700;
    }

    .artigo33 {
        display: flex;
        flex-direction: column;
        width: 20%;
        margin: 0 5%;
    }

    #corpo34_servico {
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        color: rgb(28, 101, 134);
        text-align: center;
        font-weight: 700;
        font-size: 100%;
        margin: 0 0 10% 0;
    }

    #texto33_servico {
        width: 130%;
        text-align: left;
        color: white;
        font-size: 100%;
        font-weight: 700;
    }

    .motor {
        margin: 3%;
    }

    .artigo34 {
        display: flex;
        flex-direction: column;
        width: 20%;
        margin: 0 5%;
    }

    #corpo35_servico {
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        color: rgb(28, 101, 134);
        text-align: center;
        font-weight: 700;
        font-size: 100%;
        margin: 0 0 10% 0;
    }

    #texto34_servico {
        width: 100%;
        text-align: left;
        color: white;
        font-size: 100%;
        font-weight: 700;
    }

    .crescer {
        margin: 3%;
    }
    .box_servico32 {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        margin: 5% 0
    }

    .artigo35 {
        display: flex;
        flex-direction: column;
        align-items: center;
    } 
    #texto4_servico {
        text-align: center;
        color: white;
        font-size: 30px;
        font-weight: 700;
        text-transform: uppercase;
        margin: 0 0 5% 0;
        width: 90%;
    }

    #corpo4_servico {
        background: white;
        box-shadow: 6px 8px 4px rgba(0, 0, 0, 0.25);
        border-radius: 33px;
        width: 80%;
        color: rgb(28, 101, 134);
    }

    .bot {
        margin: 2%;
        color: rgb(28, 101, 134);
        text-align: center;
        font-weight: 700;
        font-size: 100%;

    }
  }


  @media (min-width: 1025px) {
    #texto3_servico {
        text-align: center;
        margin: 10% 0 0 0;
        color: #76b9f0;
        font-size: 320%;
        font-weight: 700;
    }

    #corpo31_servico {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: linear-gradient(180deg, #0BC7F0 0%, #0B3677 100%);
        border-top-left-radius: 25px;
        border-top-right-radius: 25px
    }

    .box_servico31 {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin: 5% 0
    }

    .artigo31 {
        display: flex;
        flex-direction: column;
        width: 20%;
        margin: 0 5%;
    }

    #corpo32_servico {
        width: 100%;
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        color: rgb(28, 101, 134);
        text-align: center;
        font-weight: 700;
        font-size: 110%;
        margin: 0 0 10% 0;
    }

    .pneu {
        margin: 3%;
    }

    #texto31_servico {
        width: 100%;
        text-align: left;
        color: white;
        font-size: 100%;
        font-weight: 700;
    }

    .artigo32 {
        display: flex;
        flex-direction: column;
        width: 20%;
        margin: 0 5%;
    }

    #corpo33_servico {
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        color: rgb(28, 101, 134);
        text-align: center;
        font-weight: 700;
        font-size: 110%;
        margin: 0 0 10% 0;
    }

    .eletrica {
        margin: 3%;
    }

    #texto32_servico {
        width: 130%;
        text-align: left;
        color: white;
        font-size: 100%;
        font-weight: 700;
    }

    .artigo33 {
        display: flex;
        flex-direction: column;
        width: 20%;
        margin: 0 5%;
    }

    #corpo34_servico {
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        color: rgb(28, 101, 134);
        text-align: center;
        font-weight: 700;
        font-size: 110%;
        margin: 0 0 10% 0;
    }

    #texto33_servico {
        width: 130%;
        text-align: left;
        color: white;
        font-size: 100%;
        font-weight: 700;
    }

    .motor {
        margin: 3%;
    }

    .artigo34 {
        display: flex;
        flex-direction: column;
        width: 20%;
        margin: 0 5%;
    }

    #corpo35_servico {
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        color: rgb(28, 101, 134);
        text-align: center;
        font-weight: 700;
        font-size: 110%;
        margin: 0 0 10% 0;
    }

    #texto34_servico {
        width: 130%;
        text-align: left;
        color: white;
        font-size: 100%;
        font-weight: 700;
    }

    .crescer {
        margin: 3%;
    }
    .box_servico32 {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        margin: 5% 0
    }

    .artigo35 {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
  #texto4_servico {
        text-align: center;
        color: white;
        font-size: 30px;
        font-weight: 700;
        text-transform: uppercase;
        margin: 0 0 5% 0;
    }

    #corpo4_servico {
        background: white;
        box-shadow: 6px 8px 4px rgba(0, 0, 0, 0.25);
        border-radius: 33px;
        color: rgb(28, 101, 134);
    }

    .bot {
        margin: 2%;
        color: rgb(28, 101, 134);
        text-align: center;
        font-weight: 700;
        font-size: 100%;

    }
  }
`