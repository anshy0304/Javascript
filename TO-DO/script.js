let inputBox = document.querySelector('.inp');
let addbtn = document.querySelector('.add');
let list = document.querySelector('.list')
let clear_button = document.querySelector('.clear')
function addItem(){
    let input_value = inputBox.value;
    let li = document.createElement("li");
    if(input_value === "") {
        alert("Please Fill Something");
        return;
    }
    let dlt_btn = document.createElement("button");
    dlt_btn.textContent = "X";
    dlt_btn.addEventListener("click", () => {
        li.remove();
    })
    
    li.textContent = input_value;
    li.classList.add("list-item")
    list.appendChild(li);
    li.appendChild(dlt_btn);
    inputBox.value="";
    
    
}

addbtn.addEventListener("click",addItem);
inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addItem();
    }
})
clear_button.addEventListener("click",() => {
        list.innerHTML="";
        return;
    })
