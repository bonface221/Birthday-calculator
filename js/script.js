const male = document.getElementById("male");
const female = document.getElementById("female");
let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");
let btn = document.getElementById("btnsum");

let akanFemale = [
	{ english: "Sunday", ghana: "Akosua" },
	{ english: "Monday", ghana: "Adwoa" },
	{ english: "Tuesday", ghana: "Abenaa" },
	{ english: "Wednesday", ghana: "Akua" },
	{ english: "Thursday", ghana: "Yaa" },
	{ english: "Friday", ghana: "Afua" },
	{ english: "Saturday", ghana: "Ama" },
];

let akanMale = [
	{ english: "Sunday", ghana: "Kwasi" },
	{ english: "Monday", ghana: "Kwadwo" },
	{ english: "Tuesday", ghana: "Kwabena" },
	{ english: "Wednesday", ghana: "Kwaku" },
	{ english: "Thursday", ghana: "Yaw" },
	{ english: "Friday", ghana: "Kofi" },
	{ english: "Saturday", ghana: "Kwame" },
];

function calculate() {
	let CC = parseInt(year.value.slice(0, 2));
	console.log(CC);
	let YY = parseInt(year.value.substring(2));
	console.log(YY);
	let MM = parseInt(month.value);
	let DD = parseInt(date.value);
	if (DD <= 0 || DD > 31) {
		alert("invalid date");
	}
	if (MM <= 0 || MM > 12) {
		alert("invalid month");
	}

	d = (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
	d = Math.floor(d);
	// let a = Math.trunc(((CC / 4) - (2 * CC) - 1));
	// let b = Math.trunc((5 * YY) / 4);
	// let c = Math.trunc(2.6 * (MM + 1));
	// let z = DD;
	// d = ((a + b + c + z) % 7);

	d = Math.abs(d);

	console.log(d);
	return d;
}
function picked() {
    if (male.checked) {
        akanMale.find((item, index, arr) => {
            if (index == calculate()) {
                console.log(item.ghana, item.english);
                title.innerHTML = item.ghana;
                document.getElementById(
                    "birthname"
                ).innerHTML = `Means an African male  born on ${item.english}`;
            }
        });
    }
    else if (female.checked) {
        akanFemale.find((item, index, arr) => {
            if (index == calculate()) {
                console.log(item.ghana, item.english);
                document.getElementById("title").innerHTML = item.ghana;
                document.getElementById(
                    "birthname"
                ).innerHTML = `Means an African female  born on ${item.english}`;
            }
        });
    }
}

btn.addEventListener("click", function (e) {
	e.preventDefault();
	picked();
});