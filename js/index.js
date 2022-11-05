
console.log("Your index file is working correctly!");
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener("click", () => {
    modal_container.classList.add('show')
});
close.addEventListener("click", () => {
    modal_container.classList.remove('show')
});

$("button").hover(function(){
    $(this).css("background-color", "#3c4048");
    }, function(){
    $(this).css("background-color", "#65c8d6");
  });

