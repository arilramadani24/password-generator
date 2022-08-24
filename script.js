// Membuat function untuk menampilkan password
function togglePassword() {
  const iPassword = document.querySelector("#password");
  if (iPassword.type === "password") {
    iPassword.type = "text";
  } else {
    iPassword.type = "password";
  }
}

// Mengambil elemen input password
let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let save = document.getElementById("saveButton");

// Membuat function generator password
const generatePassword = (len) => {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "0123456789";
  const symbol = "!@#$%^&*()_+-={}[]';:/?.,<>~`|";

  const data = lowerAlphabet + upperAlphabet + number + symbol;
  let generator = "";
  for (let i = 0; i < len; i++) {
    generator += data[Math.floor(Math.random() * data.length)];
  }

  return generator;
};

const getPassword = () => {
  const newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
};

const savePassword = () => {
  document.title = password.value;
  save.setAttribute(
    "href",
    "data:text/plain;charset=utf-8" +
      encodeURIComponent(`password saya : ${document.title}`)
  );
  save.setAttribute("download", "MyPasswordGeneratorLOG.txt");
};
