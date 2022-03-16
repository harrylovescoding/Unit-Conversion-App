

function convert(){
    var x = document.getElementById("myText").value;
    document.getElementById("num").innerHTML = x;
    let Num = document.getElementById("num").innerText
    console.log(Num)
    let mtr_tofeet = Num * 3.28084 
    let feet_tomtr = Num * 0.3048
    document.getElementById("len").textContent = Num + " meters = "+ mtr_tofeet.toFixed(3) + " feet | " + Num + " feet = " + feet_tomtr.toFixed(2) + " meters"
    let liter_togallon = Num / 3.785
    let gallon_toliter = Num * 3.785
    document.getElementById("vol").textContent = Num + " liters = "+ liter_togallon.toFixed(3) + " gallon | " + Num + " gallon = " + gallon_toliter.toFixed(3) + " liters"
    let kilos_topound =  Num * 2.205
    let pound_tokilos = Num / 2.205
    document.getElementById("mass").textContent = Num + " kilos = "+kilos_topound.toFixed(3) + " pounds | " + Num + " pounds = " + pound_tokilos.toFixed(3) + " kilos"
}
