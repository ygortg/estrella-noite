// Função para abrir o modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

// Função para fechar o modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Fechar o modal ao clicar fora da área de conteúdo
window.onclick = function(event) {
    const modal = document.getElementById('modal1');
    const modal2 = document.getElementById('modal2');    
    const modal3 = document.getElementById('modal3');
    const menuModal = document.getElementById('menuModal');

    if (event.target == modal) {
        modal.style.display = "none";
    }
    else if (event.target == modal2){
        modal2.style.display = "none";
    }
    else if (event.target == modal3){
        modal3.style.display = "none";
    } else if(event.target == menuModal){
        menuModal.style.display = "none";
    }

}


// Função para abrir o modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

// Função para fechar o modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

