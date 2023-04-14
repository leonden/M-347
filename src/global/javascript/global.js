function copyrightDate() {
  const footer = document.querySelector("footer");

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  console.log(footer.firstChild);
  console.log(currentYear);

  footer.firstChild.nodeValue = `© ${currentYear} | Leon Hochwimmer`;
}

copyrightDate();
