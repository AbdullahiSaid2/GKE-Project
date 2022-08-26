const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const button = document.getElementById("btn-submit"); //put this at the top level of your code
const form = document.getElementById("form"); //put this at the top level of your code
function postData(data) {
  fetch("http://localhost:3306/adduser", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(firstName.value);
  let data = {
    firstName: firstName.value,
    lastName: lastName.value,
  };

  postData(data);
  lastName.value = "";
  firstName.value = "";
});
