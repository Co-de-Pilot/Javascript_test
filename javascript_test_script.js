function download(url, filename) {
  let hungaromet = document.createElement("a"); // CREATE A LINK ELEMENT IN DOM
  hungaromet.href =
    "https://odp.met.hu/weather/weather_reports/synoptic/hungary/10_minutes/csv/";
  hungaromet.click();
  setTimeout(console.log("Halasztás kész."), 2000);
  fetch(url, {
    mode: "no-cors",
    /*
        * ALTERNATIVE MODE {
        mode: 'cors'
        }
        *
        */
  })
    .then((transfer) => {
      return transfer.blob(); // RETURN DATA TRANSFERED AS BLOB
    })
    .then((bytes) => {
      let elm = document.createElement("a"); // CREATE A LINK ELEMENT IN DOM
      elm.href = URL.createObjectURL(bytes); // SET LINK ELEMENTS CONTENTS
      elm.setAttribute("download", filename); // SET ELEMENT CREATED 'ATTRIBUTE' TO DOWNLOAD, FILENAME PARAM AUTOMATICALLY
      elm.click(); // TRIGGER ELEMENT TO DOWNLOAD
      console.log("Letöltés kész.");
    })
    .catch((error) => {
      console.log(error); // OUTPUT ERRORS, SUCH AS CORS WHEN TESTING NON LOCALLY
    });
}

/*
 * @CALL
 * EXAMPLE LOCAL FUNCTION CALL
 */
download(
  "https://odp.met.hu/weather/weather_reports/synoptic/hungary/10_minutes/csv/HABP_10M_SYNOP_LATEST.csv.zip",
  "newtest.zip"
);
