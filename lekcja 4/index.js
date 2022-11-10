function renderH1(){
    // let div = document.createElement("div")
    // div.innerHTML = "<h1>Jestem z jsa</h1>"
    // console.log(div)
    // document.getElementById("h1_container").appendChild(div)
    const liczba=document.getElementById("number_input_1").value
    console.log(liczba)
    for(let i=0;i<liczba;i++){
        let h1=document.createElement("h1")
        h1.innerText=i
        document.getElementById("h1_container").appendChild(h1)
    }
}