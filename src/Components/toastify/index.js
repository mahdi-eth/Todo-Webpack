export function toastify(){
    myAlert.style.left = "calc(50% - 30rem";
    setTimeout(function () {
      myAlert.style.left = "-100%";
    }, 10000);
    alertBtn.addEventListener("click", () => {
      myAlert.style.left = "-100%";
    });
};