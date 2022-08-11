
document.getElementById("inputBtn").addEventListener("click", agregar);


function agregar() {
    const cont = document.getElementById("tareas");
    let input2 = document.getElementById("input1").value;
    const li = document.createElement(`li`);
    li.setAttribute("class", "li");
    //const check = document.createElement(`input`);
    ///check.setAttribute("type", "checkbox");
    //check.setAttribute("class", "checkbox");
    //check.setAttribute("id", "checkbox");
    const text = document.createElement(`span`);
    text.textContent = input2;
    text.setAttribute("class", "textA");
    text.classList.add("textUnchecked")
    text.setAttribute("id", "textA");
    const div1 = document.createElement(`div`);
    const btn1 = document.createElement(`button`);
    btn1.setAttribute("class", "delete");
    btn1.textContent = "DONE";
    const clearValue = document.querySelector(".inputClass");
    clearValue.value = "";



    cont.appendChild(li);
    li.appendChild(check());
    li.appendChild(text);
    li.appendChild(div1);
    div1.appendChild(done());
    div1.appendChild(borrar());


    function borrar() {
        const borrar = document.createElement(`button`);
        borrar.className = "delete1";
        borrar.textContent = "BORRAR";
        borrar.addEventListener("click", borrar1)
        function borrar1(e) {
            if (!check.checked) {
                const item = e.target.parentElement.parentElement;
                cont.removeChild(item);
            }
            else {
                alert(" No se puede borrar tarea  terminada");
            }
        }
        return borrar;
    }


    function done() {
        const done = document.createElement(`button`);
        done.className.add = "done";
        done.textContent = "DONE1";
        done.addEventListener("click", done1);


        function done1() {
            if (!check.checked) {
                check.checked = true;
                text.setAttribute("style", "text-decoration: line-through");
                li.classList.add("checked");
                text.classList.add("textChecked");
                text.classList.remove("textUnchecked");


            }

            else if (check.checked) {

                check.checked = false;
                text.setAttribute("style", "text-decoration: none");
                li.classList.remove("checked");
                text.classList.remove("textChecked");
                text.classList.add("textUnchecked");

            }
        }

        return done;
    }

    //done desde el checkbox ver
    
    function check() {
        const check = document.createElement(`input`);
        check.setAttribute("type", "checkbox");
        check.setAttribute("class", "checkbox");
        check.setAttribute("id", "checkbox");
        //check.setAttribute("onclick", "check2()");
        check.addEventListener("click", check2);


        function check2() {
            if (!check.checked) {
                check.checked = true;
                text.setAttribute("style", "text-decoration: line-through");
                li.classList.add("checked");
                text.classList.add("textChecked");
                text.classList.remove("textUnchecked");


            }
            else if (check.checked) {

                check.checked = false;
                text.setAttribute("style", "text-decoration: none");
                li.classList.remove("checked");
                text.classList.remove("textChecked");
                text.classList.add("textUnchecked");
            }
        }
        return check;

    }
}


document.getElementById("btnEliminarTodo").addEventListener("click", eliminarTodo);
function eliminarTodo() {
    const cont1 = document.getElementById("tareas");
    const borrando = document.querySelectorAll(".checked");


    borrando.forEach(function (elementoborrado) {
        cont1.removeChild(elementoborrado);
    })
}


document.querySelector(".btnListarTodo").addEventListener("click", listarTodo);

function listarTodo() {
    const cont3 = document.getElementById("Listas");
    const input2 = document.querySelectorAll(".textA");
    let input3 = [];
    console.log(input2);

    for (let input of input2) {
        input3.push(input.textContent);
    }

    const li1 = document.createElement(`li`);
    li1.setAttribute("class", "listaTodo");
    const text2 = document.createElement(`span`);
    text2.textContent = input3;
    text2.setAttribute("class", "textListarTodo");
    text2.setAttribute("id", "textListarTodo");
    console.log(text2.textContent);



    cont3.appendChild(li1);
    li1.appendChild(text2);
}



document.querySelector(".btnListarTodo").addEventListener("click", listarTodo);

function listarTodo() {
    const cont3 = document.getElementById("Listas");
    const input2 = document.querySelectorAll(".textA");
    let input3 = [];
    console.log(input2);

    for (let input of input2) {
        input3.push(input.textContent);


    }

    const li1 = document.createElement(`li`);
    li1.setAttribute("class", "listaTodo");
    const text2 = document.createElement(`span`);
    text2.textContent = input3;
    text2.setAttribute("class", "textListarTodo");
    text2.setAttribute("id", "textListarTodo");
    console.log(text2.textContent);



    cont3.appendChild(li1);
    li1.appendChild(text2);
}



document.querySelector(".btnListarCheck").addEventListener("click", listarCheck);
function listarCheck() {
    const cont3 = document.getElementById("Listas");
    const input2 = document.querySelectorAll(".textChecked");
    let input3 = [];
    console.log(input2);

    for (let input of input2) {
        input3.push(input.textContent);

    }

    console.log(input3);

    const li1 = document.createElement(`li`);
    li1.setAttribute("class", "listaTodo");
    const text2 = document.createElement(`span`);
    text2.textContent = input3;
    text2.setAttribute("class", "textListarTodo");
    text2.setAttribute("id", "textListarTodo");
    console.log(text2.textContent);



    cont3.appendChild(li1);
    li1.appendChild(text2);
}

document.querySelector(".btnListarUncheck").addEventListener("click", listarUncheck);
function listarUncheck() {
    const cont3 = document.getElementById("Listas");
    const input2 = document.querySelectorAll(".textUnchecked");
    let input3 = [];
    console.log(input2);

    for (let input of input2) {
        input3.push(input.textContent);

    }

    console.log(input3);

    const li1 = document.createElement(`li`);
    li1.setAttribute("class", "listaTodo");
    const text2 = document.createElement(`span`);
    text2.textContent = input3;
    text2.setAttribute("class", "textListarTodo");
    text2.setAttribute("id", "textListarTodo");
    console.log(text2.textContent);



    cont3.appendChild(li1);
    li1.appendChild(text2);
}
