function num(
  firstName,
  lastName,
  age,
  phone,
  email,
  password,
  confirmPassword,
  address,
  postalCode,
  gender,
  interests,
  termsChecked
) {
  const regex = /^[A-Za-z]+$/;

  if (!firstName) {
    alert("Ism  maydon bo'sh bo'lmasligi kerak.");
  }

  if (firstName.length < 2) {
    alert("Ism kamida 2 ta harfdan iborat bo'lishi kerak.");
  }

  if (!regex.test(firstName)) {
    alert("Ism faqat lotin harflaridan iborat bo'lishi kerak.");
  }

  if (!lastName) {
    alert("Familya maydon bo'sh bo'lmasligi kerak.");
  }

  if (lastName.length < 2) {
    alert("familya kamida 2 ta harfdan iborat bo'lishi kerak.");
  }

  if (!regex.test(lastName)) {
    alert("familya faqat lotin harflaridan iborat bo'lishi kerak.");
  }

  if (!age) {
    alert("Yosh maydon bo'sh bo'lmasligi kerak.");
  }

  if (2025 - age < 18) {
    alert("Yoshingiz 18 dan katta bo‘lishi kerak.");
  }

  const phoneRegex = /^\+(\d{9,15})$/;
  if (!phone) {
    alert("Telefon maydon bo'sh bo'lmasligi kerak.");
  }
  if (!phoneRegex.test(phone)) {
    alert("Telefon raqamini to‘g‘ri kiriting, masalan: +998901234567.");
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) {
    alert("Emile maydon bo'sh bo'lmasligi kerak.");
  }
  if (!emailRegex.test(email)) {
    alert("Emailni to‘g‘ri kiriting.");
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!password) {
    alert("Parol maydoni bo'sh bo'lmasligi kerak.");
  }
  if (!passwordRegex.test(password)) {
    alert(
      "Parol kamida 8 ta belgidan iborat bo‘lishi va katta harf, kichik harf, raqamni o‘z ichiga olishi kerak."
    );
  }
  if (password !== confirmPassword) {
    alert("Parol va tasdiqlash bir xil bo‘lishi kerak.");
  }

  if (!address) {
    alert("Manzil maydoni bo'sh bo'lmasligi kerak.");
  }

  if (address.length < 10) {
    alert("Manzilni to‘g‘ri kiriting. Kamida 10 ta belgi bo‘lishi kerak.");
  }

  const postalCodeRegex = /^\d{5,6}$/;
  if (!postalCode) {
    alert("Pochta indeksini faqat raqamlardan iborat qilib kiriting.");
  }
  if (!postalCodeRegex.test(postalCode)) {
    alert("Pochta indeksini faqat raqamlardan iborat qilib kiriting.");
  }

  if (!gender) {
    alert("Jinsingizni tanlang.");
  }

  if (!interests) {
    alert("Qiziqishlar maydon bo'sh bo'lmasligi kerak.");
  }
  if (interests.length < 5) {
    alert("Qiziqishlaringizni kamida 5 ta belgi bilan yozing.");
  }

  if (!termsChecked) {
    alert("Qoidalarga rozilik bildiring.");
  }

  return true;
}

const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const ageInput = document.querySelector("#age");
const phoneInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const addressInput = document.querySelector("#address");
const postalCodeInput = document.querySelector("#postalCode");
const genderInput = document.querySelector("#gender");
const interestsInput = document.querySelector("#interests");
const termsCheckbox = document.querySelector("#terms");
const submitButton = document.querySelector("#submitButton");

submitButton &&
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const age = ageInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    const address = addressInput.value.trim();
    const postalCode = postalCodeInput.value.trim();
    const gender = genderInput.value;
    const interests = interestsInput.value.trim();
    const termsChecked = termsCheckbox.checked;

    const isValid = num(
      firstName,
      lastName,
      age,
      phone,
      email,
      password,
      confirmPassword,
      address,
      postalCode,
      gender,
      interests,
      termsChecked
    );

    if (!isValid) {
      return;
    }
  });

// ==================================================================

//1-misol
//Formada bir matnli input va bir tugma bo‘lsin. Foydalanuvchi inputga o‘z ismini yozib, tugmani bossa, ismi sahifada alohida div element ichida ko‘rsatiladi.

const nameInput = document.querySelector("#nameInput");
const showNameButton = document.querySelector("#showNameButton");
const resultDiv = document.querySelector("#result");

showNameButton &&
  showNameButton.addEventListener("click", function () {
    const name = nameInput.value.trim();

    if (!name) {
      alert("ismingizni kiriting");
      return;
    }

    resultDiv.innerHTML = `<div>Salom, ${name}</div>`;
  });

//2-misol
// Sahifada ism va familiya yozilgan matnli div bo‘lsin. Yonida "Tahrirlash" tugmasi bo‘lsin. Tugma bosilganda, matn inputga o‘zgaradi va foydalanuvchi yangi qiymat kiritishi mumkin. "Saqlash" tugmasi bosilgandan so‘ng, matn inputdan o‘qilib, yana div ko‘rinishida aks etadi.

const block = document.querySelector(".full-name");
const edit = document.querySelector(".edit");
const save = document.querySelector(".save");

edit &&
  edit.addEventListener("click", function () {
    block.setAttribute("contenteditable", true);
    block.focus();

    edit.style.display = "none";
    save.style.display = "block";
  });

save &&
  save.addEventListener("click", function () {
    block.removeAttribute("contenteditable");

    edit.style.display = "block";
    save.style.display = "none";
  });

//3-misol
//Formada ikki ta parol kiritish maydoni (input) bo‘lsin: "Parol" va "Parolni tasdiqlash". Tugma bosilganda, agar ikkala parol bir-biriga teng bo‘lsa, foydalanuvchiga "Parol mos" degan xabar chiqsin, teng bo‘lmasa, "Parol mos emas" xabari chiqsin.

const passwordForm = document.querySelector("#passwordForm");
const passwordInput3 = document.querySelector("#password3");
const confirmPasswordInput3 = document.querySelector("#confirmPassword3");

passwordForm &&
  passwordForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const password = passwordInput3.value.trim();
    const confirmPassword = confirmPasswordInput3.value.trim();

    if (password == confirmPassword) {
      alert("Parol mos!");
    } else {
      alert("Parol mos emas!");
    }
  });

//4-misol
//Formada rang kiritish maydoni (color input) bo‘lsin. Foydalanuvchi rangni tanlagandan so‘ng, sahifada yangi div yaratiladi va tanlangan rang bilan bo‘yaladi.

const colorInput = document.getElementById("colorInput");
const addColorButton = document.getElementById("addColorButton");
const colorContainer = document.getElementById("colorContainer");

addColorButton &&
  addColorButton.addEventListener("click", () => {
    const selectedColor = colorInput.value;
    const newDiv = document.createElement("div");

    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "inline-block";
    newDiv.style.backgroundColor = selectedColor;

    colorContainer.appendChild(newDiv);
  });

//5-misol
// Sahifada bir matnli input va "Qo‘shish" tugmasi bo‘lsin. Foydalanuvchi inputga biror shahar nomini yozib, tugmani bossa, shahar nomi ro‘yxatga (ul ichida li) qo‘shiladi.

const cityInput = document.getElementById("cityInput");
const addCityButton = document.getElementById("addCityButton");
const cityList = document.getElementById("cityList");
addCityButton &&
  addCityButton.addEventListener("click", () => {
    const cityName = cityInput.value.trim();

    if (cityName) {
      const listItem = document.createElement("li");
      listItem.textContent = cityName;
      cityList.appendChild(listItem);

      cityInput.value = "";
    } else {
      alert("Shahar nomini kiriting!");
    }
  });

//6-misol
//Formada matnli input va "Xabar yuborish" tugmasi bo‘lsin. Tugma bosilgandan so‘ng, inputdagi matn sahifada yangi blokda ko‘rsatiladi va input maydoni tozalanadi.

const messageInput = document.getElementById("messageInput");
const sendMessageButton = document.getElementById("sendMessageButton");
const messageContainer = document.getElementById("messageContainer");
sendMessageButton &&
  sendMessageButton.addEventListener("click", () => {
    const messageText = messageInput.value.trim();

    if (messageText) {
      const messageBlock = document.createElement("div");

      messageBlock.style.border = "1px solid #ccc";
      messageBlock.style.padding = "10px";
      messageBlock.style.margin = "10px 0";
      messageBlock.style.backgroundColor = "#f9f9f9";
      messageBlock.style.borderRadius = "5px";
      messageBlock.style.fontSize = "16px";
      messageBlock.style.color = "#333";

      messageBlock.textContent = messageText;
      messageContainer.appendChild(messageBlock);

      messageInput.value = "";
    } else {
      alert("Xabar kiriting!");
    }
  });

//7-misol
//Formada foydalanuvchi bajariladigan ishlarni kiritadi va Qo‘shish tugmasini bossa, ro‘yxatga yangi ish qo‘shiladi.

const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addButton &&
  addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    const listItem = document.createElement("li");

    listItem.textContent = taskText;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "O‘chirish";
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(listItem);
    });

    listItem.prepend(checkbox);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
  });

//8-misol
//Formada matnli input bo‘lsin. Foydalanuvchi inputga "red", "green", yoki "blue" kabi rang nomini yozsa, sahifaning fon rangi o‘zgaradi.

//9-misol
//Formada ism va familiya kiritish uchun ikkita input bo‘lsin. "Qo‘shish" tugmasi bosilganda, kiritilgan ism va familiya ro‘yxatga qo‘shiladi.

const firstNameInput9 = document.getElementById("firstNameInput9");
const lastNameInput9 = document.getElementById("lastNameInput9");
const addButton9 = document.getElementById("addButton9");
const nameList = document.getElementById("nameList");

addButton9 &&
  addButton9.addEventListener("click", () => {
    const firstName = firstNameInput9.value.trim();
    const lastName = lastNameInput9.value.trim();

    if (firstName && lastName) {
      const listItem = document.createElement("li");
      listItem.textContent = `${firstName} ${lastName}`;
      nameList.appendChild(listItem);

      firstNameInput9.value = "";
      lastNameInput9.value = "";
    } else {
      alert("Iltimos, ism va familiyani kiriting!");
    }
  });

//10-misol
// Formada bir matnli input bo‘lsin. Foydalanuvchi inputga biror so‘z kiritganda, uning uzunligi (harflar soni) sahifada ko‘rsatiladi.

const wordInput = document.getElementById("wordInput");
const wordLength = document.getElementById("wordLength");

wordInput &&
  wordInput.addEventListener("input", () => {
    const word = wordInput.value.trim();
    wordLength.textContent = word.length;
  });

//11-misol
//Sahifada davlatlar ro‘yxati (ul) bo‘lsin. Formada "Saralash" tugmasi bo‘lsin. Tugma bosilganda, davlatlar ro‘yxati alifbo bo‘yicha qayta tartiblanadi.

//12-misol
//Formada bir input va "Tasdiqlash" tugmasi bo‘lsin. Dastlab tugma faol bo‘lmasin (disabled). Inputga biror matn kiritilganda, tugma faollashsin.

const textInput = document.getElementById("textInput");
const confirmButton = document.getElementById("confirmButton");

textInput &&
  textInput.addEventListener("input", function () {
    if (textInput.value.trim() !== "") {
      confirmButton.disabled = false;
    } else {
      confirmButton.disabled = true;
    }
  });

//13-misol
//Formada bir nechta input bo‘lsin (ism, familiya, email). "Tozalash" tugmasi bosilganda, barcha inputlar bo‘shatiladi.

const clearButton = document.getElementById("clearButton");
const firstName = document.getElementById("firstName13");
const lastName = document.getElementById("lastName13");
const email = document.getElementById("email13");

clearButton &&
  clearButton.addEventListener("click", function () {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
  });

//14-misol
// Foydalanuvchi ro‘yxati (ul) va qidiruv inputi bo‘lsin. Foydalanuvchi qidiruv maydoniga biror ism yozganda, faqat shu ismga mos keladigan foydalanuvchi ko‘rsatiladi, qolganlari yashiriladi.

const style = document.createElement("style");
style.innerHTML = `
      .user {
        list-style-type: none;
        padding: 5px;
      }

      .user.hidden {
        display: none;
      }
    `;
document.head.appendChild(style);

const searchInput = document.getElementById("searchInput");
const userList = document.getElementById("userList");
const users = document.querySelectorAll(".user");

searchInput &&
  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    users.forEach(function (user) {
      const userName = user.textContent.toLowerCase();
      if (userName.includes(query)) {
        user.classList.remove("hidden");
      } else {
        user.classList.add("hidden");
      }
    });
  });

//15-misol
// Sahifada matn ko‘rinishida bir div bo‘lsin. "Tahrirlash" tugmasi bosilganda, matn inputga aylansin va foydalanuvchi matnni tahrir qilishi mumkin. "Saqlash" tugmasi bosilganda, inputdagi matn yana div ko‘rinishida aks etsin.

const container = document.getElementById("container");
const textDisplay = document.getElementById("text-display");
const editBtn = document.getElementById("edit-btn");

edit &&
  editBtn.addEventListener("click", function () {
    if (editBtn.textContent === "Tahrirlash") {
      const input = document.createElement("input");
      input.type = "text";
      input.id = "text-input";
      input.value = textDisplay.textContent;
      container.replaceChild(input, textDisplay);

      editBtn.textContent = "Saqlash";
    } else {
      const input = document.getElementById("text-input");
      const newText = document.createElement("div");
      newText.id = "text-display";
      newText.textContent = input.value;
      container.replaceChild(newText, input);

      editBtn.textContent = "Tahrirlash";
    }
  });
