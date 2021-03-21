function show1(){
    let inputBentuk = document.getElementById("inputBentuk").value;
    let inputUkuran = document.getElementById("inputUkuran").value;
    let data = [];

    for (let i=1; i <= inputUkuran;i++){
        let text = "";
        for (let j=1;j <= inputUkuran;j++){
           if (j % 2 == 0){
            text += "*";
           } else {
               text += "*"
           }
        }
        data.push(text);
    }
    let numberList = data.map((el) => {
       return `<h2>${el}</h2>`;
    }
)
inputUkuran++;
document.getElementById("output").innerHTML = numberList.join("")
}

function show2(){
    let inputBentuk = document.getElementById("inputBentuk").value;
    let data = [];
    let starBig = "*"
    for (let i=1; i <= inputBentuk; i++){
        for (let j=1; j< inputBentuk;j++){
            starBig += "*"
        }
        starBig = "\n"
    }
    data.push(starBig);
    let numberList = data.map((el) => {
        return `<h2>${el}</h2>`
    }
    )
    inputBentuk++;
    document.getElementById("output").innerHTML = numberList.join("")
}

function show3(){
    let inputBentuk = document.getElementById("inputBentuk").value;
    let inputUkuran = document.getElementById("inputUkuran").value;
    let data = [];
    let starSin = ""
    for (let i=1; i<inputUkuran; i++) {
        for (let j= inputUkuran-i; j>= i; j--){
            starSin += " ";
        }
        for (let k=0; k<=i; k++){
            starSin += "*"
        }
        starSin += "\n"
    }
    data.push(starSin);
    let numberList = data.map((el) => {
        return `<h3>${el}</h3>`
    })
    inputUkuran++;
    document.getElementById("output").innerHTML = numberList.join("")
}



   