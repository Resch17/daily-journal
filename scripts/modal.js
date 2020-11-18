export const ModalDisplay = () => {

  // Get modal elements
  const modal = document.querySelector("#modal");
  const modalBtn = document.querySelector("#newEntry");
  const closeBtn = document.querySelector("#closeModal");
  
  // Listen for click
  modalBtn.addEventListener("click", openModal);
  
  // Function to open modal
  function openModal() {
    modal.style.display = "block";
  }
  
  // Close button event listener
  closeBtn.addEventListener("click", closeModal);
  
  // Listen for click outside modal content
  window.addEventListener("click", clickOutside);
  
  // function to close modal
  function closeModal() {
    modal.style.display = "none";
  }
  
  // outside click function
  function clickOutside(e) {
    if(e.target == modal){
      modal.style.display = "none";
    }
  }  
}