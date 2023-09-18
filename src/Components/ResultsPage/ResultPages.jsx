import React from 'react'

function ResultPages() {



  return (
    <>
      <form action="">
        <h3>Start A New Search</h3>
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

export default ResultPages;




