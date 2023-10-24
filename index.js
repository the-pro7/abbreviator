const names = [
	"Abida ",
	"Alex",
	"Ruth",
	"Eva",
	"Edwin",
	"Sewenna Rose",
	"Theo The Girl",
    true,
    127
];

let nameLettersArray = names.map((name) => typeof name === "string" && name.split());
let nameInitials = nameLettersArray.map((letter) => {
	// if (typeof letter !== "string") throw new Error("Only words allowed!!");
	return letter;
	//    return letter
});

let allInitials = nameInitials.join("");

let corrected = "";
if (allInitials.includes("", 0)) {
	corrected = allInitials.split("");
}

let noSpaces = corrected.filter((letter) => letter !== " ");
let initialsOnly = noSpaces.filter((letter) => letter === letter.toUpperCase());

let joinedLetters = initialsOnly.join("");

console.log(joinedLetters);
