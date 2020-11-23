function getParent(btnInfo) {

    var btnSibling = btnInfo.previousElementSibling;

    document.getElementById('content').innerHTML = btnSibling.innerHTML;

    var modal = document.getElementById('modal');
    var modalContent = document.getElementById('modalContent');

    var spanClose = document.getElementById('close');

    modal.style.display = "block";
    //modalContent.classList.toggle('show');

    spanClose.onclick = function() {
        modal.style.display = "none";
    }


}