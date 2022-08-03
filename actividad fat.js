let alumnos
{
alumno="1"
FechaNac="26/05/2004"
DNI="45350246"
NLegajo="100"
Materia="Matematica"
ArregloNot=("4,3,7")

alumno = "2"
FechaNac = "19/06/2004"
DNI = "45889977"
NLegajo = "200"
Materia = "EdFisica"
ArregloNot = ("4,5,5")
   
alumno = "3"
FechaNac = "08/10/2004"
DNI = "45876213"
NLegajo = "300"
Materia = "Fisica"
ArregloNot = ("4,7,7")
  
alumno = "4"
FechaNac = "17/08/2004"
DNI = "44567876"
NLegajo = "400"
Materia = "Quimica"
ArregloNot = ("5,6,7")

alumno = "5"
FechaNac = "16/6/2004"
DNI = "45876789"
NLegajo = "500"
Materia = "Biologia"
ArregloNot = ("5,6,8")
  
alumno = "6"
FechaNac = "10/04/2004"
DNI = "45678876"
NLegajo = "600"
Materia = "Logica Matematica"
ArregloNot = ("2,4,5")
,
alumno = "7"
FechaNac = "16/07/2004"
DNI = "45123432"
NLegajo = "700"
Materia = "Base de Datos"
ArregloNot = ("4,6,7")

alumno = "8"
FechaNac = "1/08/2004"
DNI = "44567890"
NLegajo = "800"
Materia = "Programacion"
ArregloNot = ("7,8,9")

alumno = "9"
FechaNac = "20/08/2004"
DNI = "45678987"
NLegajo = "900"
Materia = "FAT"
ArregloNot = ("6,6,7")

alumno = "10"
FechaNac = "20/01/2004"
DNI = "48765432"
NLegajo = "1000"
Materia = "Ciudadania y Participacion"
ArregloNot = ("9,8,9") }
console.log("El promedio de cada alumno es:")
for (let i = 0; i < alumnos.length; i++) {
    let suma = 0;
    for (let j = 0; j < alumnos[i].ArregloNot.length; j++) {
        suma += alumnos[i].ArregloNot[j]
    }
    let promedio = suma / alumnos[i].ArregloNot.length;
    alumnos[i].promedio = promedio
    console.log(`${alumnos[i].nombre}: ${alumnos[i].promedio.toFixed(2)}`)
}



