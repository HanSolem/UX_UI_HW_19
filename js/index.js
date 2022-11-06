$("button").hover(function(){
    $(this).css("background-color", "#3c4048");
    }, function(){
    $(this).css("background-color", "#65c8d6");
  });

// Show Modal
const openModalButton = document.getElementById("open-modal");
const modalWindowOverlay = document.getElementById("modal-overlay");

const showModalWindow = () => {
  modalWindowOverlay.style.display = 'flex';
}
openModalButton.addEventListener("click", showModalWindow);

// Hide Modal
const closeModalButton = document.getElementById("close-modal");

const hideModalWindow = () => {
    modalWindowOverlay.style.display = 'none';
}

closeModalButton.addEventListener("click", hideModalWindow);


// Hide On Blur

const hideModalWindowOnBlur = (e) => {

    if(e.target === e.currentTarget) {
      console.log(e.target === e.currentTarget)
        hideModalWindow();
    }
}

modalWindowOverlay.addEventListener("click", hideModalWindowOnBlur)
