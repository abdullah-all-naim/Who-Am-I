
fetch('https://randomuser.me/api/')
.then(response => response.json())
.then(data => {
    const user = data.results[0];

    document.getElementById("first-name").value = `${user.name.title} ${user.name.first}`;
    document.getElementById("last-name").value = `${user.name.last}`;
    document.getElementById("email").value = `${user.email}`;
    document.getElementById("password").value = `${user.login.password}`;
    document.getElementById("phone").value = `${user.phone}`;
    document.getElementById("gender").value = `${user.gender}`;
    document.getElementById("age").value = `${user.dob.age}`;
    document.getElementById("inputAddress2").value = `${user.location.street.name} ${user.location.street.number}`;
    document.getElementById("inputCity").value = `${user.location.city}`;
    document.getElementById("inputState").value = `${user.location.state}`;
    document.getElementById("inputZip").value = `${user.location.postcode}`;
    document.getElementById("user_photo").innerHTML = `<img src="${user.picture.large}">`;

});


