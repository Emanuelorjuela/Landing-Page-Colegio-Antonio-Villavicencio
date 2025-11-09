
let alumnos=[
	["pedro",5],
	["juan",0],
	["sara",6],
	["laura",3],
	["brayan",8],
	["mariana",9],
	["gabriela",5],
	["santiago",6],
	["guzman",10],
	["miguel","k"],
	["ingrid",10]
]

for(validar of alumnos){
	if(Number(validar[1])){
		if(validar[1]<5){
		

		if(validar[1]==0){
			console.log(`${validar[0]} no tiene nota`)
		}
		else{
			console.log(`${validar[0]} no paso la materia`)
		}

	}else{
		if(validar[1]==6){
			console.log(`${validar[0]} paso raspando`)
		}

		else if(validar[1]==10){
			console.log(`${validar[0]} paso excelente`)
		}
		else{
			console.log(`${validar[0]} paso la materia`)
		}
	}
}else{
	console.log(`${validar[0]} tiene un error`)
}
}


