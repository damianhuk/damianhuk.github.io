function active(id_modal, id_img, amount) {
    for (var i=1; i<=amount; i++){
        if(document.getElementById("modal" + id_modal + "-item" + i).classList.contains("item-active")){
            document.getElementById("modal" + id_modal + "-item" + i).classList.remove("item-active");
            document.getElementById("modal" + id_modal + "-item" + id_img).classList.add("item-active");
            break;
        }
    }
}

function load(id_modal, id_img, amount) {
    document.getElementById("img-big-" + id_modal).src = 'img/item' + id_modal + '-img' + id_img + '.png';
    document.getElementById("id-img-big-" + id_modal).value = id_img;
    active(id_modal, id_img, amount);
}

function next(id_modal, amount) {
     /*
        id - id zdjęcia aktualnie wyświetlanego
    */
    var  id = document.getElementById("id-img-big-" + id_modal).value;
    if(id < amount) {
        id_next_img = parseInt(id) + 1;
        load(id_modal, id_next_img);
        document.getElementById("modal" + id_modal + "-item" + id).classList.remove("item-active");
        document.getElementById("modal" + id_modal + "-item" + id_next_img).classList.add("item-active");
    }else{
        document.getElementById("img-big-" + id_modal).src = 'img/item' + id_modal + '-img1.png';
        document.getElementById("id-img-big-" + id_modal).value = 1;
        document.getElementById("modal" + id_modal + "-item" + id).classList.remove("item-active");
        document.getElementById("modal" + id_modal + "-item1").classList.add("item-active");
    }
}

function prev(id_modal, amount){
    /*
        id - id zdjęcia aktualnie wyświetlanego
    */
    var id = document.getElementById("id-img-big-" + id_modal).value;
    if(id > 1){
        id_prev_img = parseInt(id) - 1;
        load(id_modal, id_prev_img);
        document.getElementById("modal" + id_modal + "-item" + id).classList.remove("item-active");
        document.getElementById("modal" + id_modal + "-item" + id_prev_img).classList.add("item-active");
    }else{
        document.getElementById("img-big-" + id_modal).src = 'img/item' + id_modal + '-img' + amount + '.png';
        document.getElementById("id-img-big-" + id_modal).value = amount;
        document.getElementById("modal" + id_modal + "-item" + id).classList.remove("item-active");
        document.getElementById("modal" + id_modal + "-item" + amount).classList.add("item-active");
    }
}


