import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    /* font-family: 'Abril Fatface', cursive; */
font-family: 'Montserrat', sans-serif;
}
html{
    &::-webkit-scrollbar{
        width:0.5rem;
    }
      &::-webkit-scrollbar-thumb{
background-color:darkgray;         border-radius:1rem;

   } 

&::-webkit-scrollbar-track{
background:white;           

 }
  
}
h2{
    font-size:2rem;
    font-family: 'Abril Fatface', cursive;
    font-weight:lighter; color:#333;

}
h3{
 font-size:1.3rem ;
 padding:1.3rem 0rem;
 color:#333;
}
p{
    font-size:1.2rem;
    line-height:200%;
    color:#696969
}
a{
    text-decoration:none;
    color:#333;

}
img{
    display:block;
}
input{
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
}
`;

export default GlobalStyle;
