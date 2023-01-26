let colors = document.querySelector(".colors-header");
let color_rgb_output = document.querySelector(".color_rgb_output");
let spinner = document.querySelector(".spinner");

let copy_color = () => {
	let color = document.querySelectorAll(".colors");
	color.forEach((ele, index) => {
		ele.addEventListener("click",(e) => {
			let navbar = document.querySelector('nav');
			let footer = document.querySelector('footer');
			navbar.style.backgroundColor = ele.innerText 
			footer.style.backgroundColor = ele.innerText 
			let a_tag = document.createElement("input")
			a_tag.value = ele.innerText;
			a_tag.select();
			navigator.clipboard.writeText(a_tag.value)
			navigator.vibrate(100)
			ele.querySelector("div").innerHTML = ` ${a_tag.value} <ion-icon name="copy-outline"></ion-icon>`
		})
	})
}

let random_color = () => {
	let color_c = "0a1b2c3d4e567f89"
	let color_push = [] 
	for(let x=0;x<=2500;x++){
		let code_1 = Math.floor(Math.random()*color_c.length)
		let code_2 = Math.floor(Math.random()*color_c.length)
		let code_3 = Math.floor(Math.random()*color_c.length)
		let code_4 = Math.floor(Math.random()*color_c.length)
		let code_5 = Math.floor(Math.random()*color_c.length)
		let code_6 = Math.floor(Math.random()*color_c.length)
		color_push.push(`${color_c[code_1]}${color_c[code_2]}${color_c[code_3]}${color_c[code_4]}${color_c[code_5]}${color_c[code_6]}`)
	}
	let uniqueColor = [...new Set(color_push)];
	for(let x in uniqueColor){
		let color = document.createElement("div");
		color.innerHTML = `<div class=' p-4'>#${uniqueColor[x]} <ion-icon name="copy-outline"></ion-icon></div>`
		color.style.backgroundColor=`#${uniqueColor[x]}`
		color.className = 'col-4 p-2 col-md-3 col-lg-2  shadow colors'
		colors.appendChild(color)
	}
	copy_color()

}

let color_rgb = () => {
	let generate_collect = []
	for(let x=0;x<=255;x++){
		if(x % 5 == 0){
			generate_collect.push(x)
		}
	}
	let colors = []
	let alpha = ['.1','.2','.3','.4','.5','.6','.7','.8','.9','1']
	for(let x in generate_collect){
		for(let y in generate_collect){
			for(let z in generate_collect){
				if(x % 5 == 0 && y % 5 == 0 && z % 5 == 0){
						colors.push(`${generate_collect[x]},${generate_collect[y]},${generate_collect[z]}`)
				}
			}
		}
	}
	let uniqueColor = [...new Set(colors.reverse())];
	let color
	for(let x in uniqueColor){
		color = document.createElement("div");
		color.innerHTML = `<div class='py-3' data-rgb="rgb(${uniqueColor[x]})">rgb(${uniqueColor[x]}) <ion-icon name="copy-outline" class='copy-outline'></ion-icon></div>`
		color.style.backgroundColor=`rgb(${uniqueColor[x]})`
		color.className = 'col-4 mx-auto p-2 col-md-3 col-lg-2  shadow colors'
		color_rgb_output.appendChild(color)
	}
	copy_color()
	console.log(document.querySelector('.copy-outline').onloadend = () => 'js' )
}

if(location.href.includes('rgb')){
	color_rgb()
}else{
	random_color()
}

window.onload = () => {
		spinner.style.display = 'none'
}