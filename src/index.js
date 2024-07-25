window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js')
import "bootstrap/dist/css/bootstrap.min.css"
import "./css/style.css"
import "@fortawesome/fontawesome-free/js/all.min"

document.querySelectorAll('[data-bs-toogle="tooltip"]').forEach(item => new bootstrap.Tooltip(item))


console.log("اهلا بكم في متجر عربي");
console.log("اهلا بكم في اكاديمية حسوب"); 