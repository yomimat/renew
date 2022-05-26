//display email input
const ls = localStorage.getItem('eml');
const eml = document.getElementById('emlSpan');
//email input
document.addEventListener("DOMContentLoaded", function() {
    eml.value = ls;
});