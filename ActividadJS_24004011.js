var mes_nacimiento = prompt("Ingrese el mes en números")
var dia_nacimiento = prompt("Ingrese el día en números")

if (mes_nacimiento == 3 && dia_nacimiento >= 21 || mes_nacimiento == 4 && dia_nacimiento <= 20){
alert("Su signo es Aries")
}else if(mes_nacimiento == 4 && dia_nacimiento >= 21 || mes_nacimiento == 5 && dia_nacimiento <= 20){
alert("Su signo es Tauro")
}else if(mes_nacimiento == 5 && dia_nacimiento >= 21 || mes_nacimiento == 6 && dia_nacimiento <= 20){
alert("Su signo es Géminis")
}else if(mes_nacimiento == 6 && dia_nacimiento >= 21 || mes_nacimiento == 7 && dia_nacimiento <= 22){
alert("Su signo es Cáncer")
}else if(mes_nacimiento == 7 && dia_nacimiento >= 23 || mes_nacimiento == 8 && dia_nacimiento <= 23){
alert("Su signo es Leo")
}else if(mes_nacimiento == 8 && dia_nacimiento >= 24 || mes_nacimiento == 9 && dia_nacimiento <= 22){
alert("Su signo es Virgo")
}else if(mes_nacimiento == 9 && dia_nacimiento >= 23 || mes_nacimiento == 10 && dia_nacimiento <= 23){
alert("Su signo es Libra")
}else if(mes_nacimiento == 10 && dia_nacimiento >= 24 || mes_nacimiento == 11 && dia_nacimiento <= 22){
alert("Su signo es Escorpio")
}else if(mes_nacimiento == 11 && dia_nacimiento >= 23 || mes_nacimiento == 12 && dia_nacimiento <= 21){
alert("Su signo es Sagitario")
}else if(mes_nacimiento == 12 && dia_nacimiento >= 22 || mes_nacimiento == 1 && dia_nacimiento <= 20){
alert("Su signo es Capricornio")
}else if(mes_nacimiento == 1 && dia_nacimiento >= 21 || mes_nacimiento == 2 && dia_nacimiento <= 19){
alert("Su signo es Acuario")
}else{
alert("Su signo es Piscis")  
}