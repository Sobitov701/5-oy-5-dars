// function num(
//   firstName,
//   lastName,
//   age,
//   phone,
//   email,
//   password,
//   confirmPassword,
//   address,
//   postalCode,
//   gender,
//   interests,
//   termsChecked
// ) {
//   const regex = /^[A-Za-z]+$/;

//   if (!firstName) {
//     alert("Ism  maydon bo'sh bo'lmasligi kerak.");
//   }

//   if (firstName.length < 2) {
//     alert("Ism kamida 2 ta harfdan iborat bo'lishi kerak.");
//   }

//   if (!regex.test(firstName)) {
//     alert("Ism faqat lotin harflaridan iborat bo'lishi kerak.");
//   }

//   if (!lastName) {
//     alert("Familya maydon bo'sh bo'lmasligi kerak.");
//   }

//   if (lastName.length < 2) {
//     alert("familya kamida 2 ta harfdan iborat bo'lishi kerak.");
//   }

//   if (!regex.test(lastName)) {
//     alert("familya faqat lotin harflaridan iborat bo'lishi kerak.");
//   }

//   if (!age) {
//     alert("Yosh maydon bo'sh bo'lmasligi kerak.");
//   }

//   if (2025 - age < 18) {
//     alert("Yoshingiz 18 dan katta bo‘lishi kerak.");
//   }

//   const phoneRegex = /^\+(\d{9,15})$/;
//   if (!phone) {
//     alert("Telefon maydon bo'sh bo'lmasligi kerak.");
//   }
//   if (!phoneRegex.test(phone)) {
//     alert("Telefon raqamini to‘g‘ri kiriting, masalan: +998901234567.");
//   }

//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   if (!email) {
//     alert("Emile maydon bo'sh bo'lmasligi kerak.");
//   }
//   if (!emailRegex.test(email)) {
//     alert("Emailni to‘g‘ri kiriting.");
//   }

//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
//   if (!password) {
//     alert("Parol maydoni bo'sh bo'lmasligi kerak.");
//   }
//   if (!passwordRegex.test(password)) {
//     alert(
//       "Parol kamida 8 ta belgidan iborat bo‘lishi va katta harf, kichik harf, raqamni o‘z ichiga olishi kerak."
//     );
//   }
//   if (password !== confirmPassword) {
//     alert("Parol va tasdiqlash bir xil bo‘lishi kerak.");
//   }

//   if (!address) {
//     alert("Manzil maydoni bo'sh bo'lmasligi kerak.");
//   }

//   if (address.length < 10) {
//     alert("Manzilni to‘g‘ri kiriting. Kamida 10 ta belgi bo‘lishi kerak.");
//   }

//   const postalCodeRegex = /^\d{5,6}$/;
//   if (!postalCode) {
//     alert("Pochta indeksini faqat raqamlardan iborat qilib kiriting.");
//   }
//   if (!postalCodeRegex.test(postalCode)) {
//     alert("Pochta indeksini faqat raqamlardan iborat qilib kiriting.");
//   }

//   if (!gender) {
//     alert("Jinsingizni tanlang.");
//   }

//   if (!interests) {
//     alert("Qiziqishlar maydon bo'sh bo'lmasligi kerak.");
//   }
//   if (interests.length < 5) {
//     alert("Qiziqishlaringizni kamida 5 ta belgi bilan yozing.");
//   }

//   if (!termsChecked) {
//     alert("Qoidalarga rozilik bildiring.");
//   }

//   return true;
// }

// const firstNameInput = document.querySelector("#firstName");
// const lastNameInput = document.querySelector("#lastName");
// const ageInput = document.querySelector("#age");
// const phoneInput = document.querySelector("#phone");
// const emailInput = document.querySelector("#email");
// const passwordInput = document.querySelector("#password");
// const confirmPasswordInput = document.querySelector("#confirmPassword");
// const addressInput = document.querySelector("#address");
// const postalCodeInput = document.querySelector("#postalCode");
// const genderInput = document.querySelector("#gender");
// const interestsInput = document.querySelector("#interests");
// const termsCheckbox = document.querySelector("#terms");
// const submitButton = document.querySelector("#submitButton");

// submitButton &&
//   submitButton.addEventListener("click", function (event) {
//     event.preventDefault();

//     const firstName = firstNameInput.value.trim();
//     const lastName = lastNameInput.value.trim();
//     const age = ageInput.value.trim();
//     const phone = phoneInput.value.trim();
//     const email = emailInput.value.trim();
//     const password = passwordInput.value.trim();
//     const confirmPassword = confirmPasswordInput.value.trim();
//     const address = addressInput.value.trim();
//     const postalCode = postalCodeInput.value.trim();
//     const gender = genderInput.value;
//     const interests = interestsInput.value.trim();
//     const termsChecked = termsCheckbox.checked;

//     const isValid = num(
//       firstName,
//       lastName,
//       age,
//       phone,
//       email,
//       password,
//       confirmPassword,
//       address,
//       postalCode,
//       gender,
//       interests,
//       termsChecked
//     );

//     if (!isValid) {
//       return;
//     }
//   });

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
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");

passwordForm &&
  passwordForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (password == confirmPassword) {
      alert("Parol mos!");
    } else {
      alert("Parol mos emas!");
    }
  });

//4-misol
//Formada rang kiritish maydoni (color input) bo‘lsin. Foydalanuvchi rangni tanlagandan so‘ng, sahifada yangi div yaratiladi va tanlangan rang bilan bo‘yaladi.

//5-misol
//Foydalanuvchi formadagi Element turi (masalan, <div>, <p>) va Element mazmuni maydonlariga ma’lumot kiritsa, Yaratish tugmasi bosilganda shu element sahifada paydo bo‘lsin.

//6-misol
//Foydalanuvchi formadagi Rasm URL maydoniga rasm linkini kiritib, Qo‘shish tugmasini bossin.

const button = document.getElementById("button");
const imageUrlInput = document.getElementById("imageUrl");
const outputDiv = document.getElementById("output");

button &&
  button.addEventListener("click", () => {
    const imageUrl = imageUrlInput.value.trim();
  });

//7-misol
//Formada foydalanuvchi bajariladigan ishlarni kiritadi va Qo‘shish tugmasini bossa, ro‘yxatga yangi ish qo‘shiladi.

const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

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
//Formada foydalanuvchi o‘z ismi va jinsini tanlashi kerak.

//9-misol
//Formada ikkita son kiritish maydoni (Son 1, Son 2) va Operatsiya (masalan, qo‘shish, ayirish) tanlash uchun select bo‘lsin.

//10-misol
// Foydalanuvchi formadagi Mahsulot nomi, Narxi va Soni maydonlarini to‘ldirib, Qo‘shish tugmasini bossa, savatchaga mahsulot qo‘shiladi.
