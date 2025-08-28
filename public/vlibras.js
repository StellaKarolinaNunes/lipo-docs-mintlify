document.addEventListener("DOMContentLoaded", () => {
  const div = document.createElement("div");
  div.setAttribute("vw", "");
  div.classList.add("enabled");
  div.innerHTML = `
    <div vw-access-button class="active"></div>
    <div vw-plugin-wrapper></div>
  `;
  document.body.appendChild(div);

  const script = document.createElement("script");
  script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
  script.onload = () => {
    new window.VLibras.Widget("https://vlibras.gov.br/app");
  };
  document.body.appendChild(script);
});
