import React from 'react'

function InfoPages() {



  return (
    <>
      <form action="">
        <h1>InfoPages</h1>
        <label>
          ShelterHub Name: {" "}
          <input name="shname" />
        </label>{" "}
        <br />
        <label>
          ShelterHub Adress:
          <input name="shaddress" />
        </label>
        <br />
        <label>
          ShelterHub City:
          <input name="shcity" />
        </label>
        <br />
        <label>
          ShelterHub State:
          <input name="shstate" />
        </label>
        <br />
        <label>
          ShelterHub Zip Code:
          <input name="shzipcode" />
        </label>
        <br />
        <label>
          ShelterHub Location:
          <input name="shlocation" />
        </label>
        <br />
        <label>
          ShelterHub Phone:
          <input name="shphone_number" />
        </label>
        <br />
      </form>
    </>
  );
}

export default InfoPages




{/* 

const callParam = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "aa8edd7191mshee328997db07344p1af3f5jsna738891782b5",
      "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
    },
  };

  fetch("https://crypto-news16.p.rapidapi.com/news/coinjournal", options)
    .then((response) => response.json())
    .then((getttingData) => {
      for (i = 0; i < getttingData.length; i++) {
        let element = getttingData[i];
        const article = document.querySelector("article");
        article.innerHTML = ` <h2>${element.title}</h2> <p> ${element.description} </p> `;
      }
    })
      
    .catch((error) => {
      // If response.json() Promise is unsuccessful, do this:
      console.log(error)
    });
}
button.addEventListener("click", callParam); */}
