const login = async (email, password) => {
  console.log(email, password);
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:3000/api/v1/test/signup",
      data: {
        email,
        password,
      },
    });

    if (res.data.status === "success") {
      window.setTimeout(() => {
        location.assign("/");
      }, 500);
    }
    console.log(res);
  } catch (err) {
    console.log(err);
    alert(err.response.data.message);
  }
};

document.querySelector(".form1").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const cPassword = document.getElementById("cPassword").value;
  if (password === cPassword) {
    login(email, password);
  } else {
    alert("please confirm the password");
  }

  //   console.log(email, password);
});
