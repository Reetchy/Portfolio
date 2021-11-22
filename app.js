// const modal = document.querySelector(".modal");
// const assets = document.querySelectorAll(".gallery img");
// const assets = document.querySelector(".modal-img");
// const imgText = document.querySelector(".modal-content h3, .modal-content h2, .modal-content p,");

// assets.forEach(preview => {
//     preview.addEventListener('click', () => {
//         modal.classlist.add("open");
//     });
// });

var modall = document.querySelector(".modal-content");
var modalPrv = document.querySelectorAll(".gallery-cards");
var ccls = document.querySelector(".backToGrid");

modalPrv.forEach(preview => {
    preview.addEventListener("click", () => {
        modall.classList.add("open");
    })
})

// modalPrv.addEventListener("click", ()=>{
//     modall.classList.add("open");
// }); 


// ccls.addEventListener("click", ()=>{
//     modall.classList.add("close");
// });

// modall.addEventListener("click", (e)=> {
//     if (e.target.classList.contains("backToGrid")){
//         modall.classList.add("close");
//     }
// })

var chevron = document.querySelector(".down");

modalPrv.addEventListener("click", ()=>{
    chevron.classList.add("slideup");
});

