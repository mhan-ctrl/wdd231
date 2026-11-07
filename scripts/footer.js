const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified")
currentyear.textContent = new Date().getFullYear()
lastmodified.textContent = `Last Modified: ${document.lastModified}`;