
//const username =  document.querySelector('#username')
const saveScoreBtn = document.querySelector("#saveScoreBtn")
const finalScore = document.querySelector("#finalScore")
const mostRecentScore = document.querySelector("#mostRecentScore")

const highScore = JSON.parse(localStorage.getItem('highschore')) || []
const Max_Highs = 5
//finalScore.innerText = mostRecentScore



const input = document.querySelector('#name_input');
const suggestions = document.querySelector('.suggestions ul');

const names = [ 'Josh', 'Mary', 'Chris', 'KMP', 'Anna', 'Christie', 'Hannah', 'Chetan', 'Brad', 'Dan', 'Elizabeth', 'David', 'Frank', 'Gary', 'Heather',"Liam","Noah","Oliver","Elijah","William","James","Benjamin","Lucas","Henry","Alexander","Mason","Michael","Ethan","Daniel","Jacob","Logan","Jackson","Levi","Sebastian","Mateo","Jack","Owen","Theodore","Aiden","Samuel","Joseph", "Olivia","Emma","Ava","Charlotte","Sophia","Amelia","Isabella","Mia","Evelyn","Harper","Camila","Gianna","Abigail","Luna","Ella","Elizabeth","Sofia","Emily","Avery","Mila","Scarlett","Eleanor","Madison","Layla","Penelope","Aria","Chloe","Grace","Ellie","Nora","Hazel","Zoey","Riley","Victoria","Lily"];

function search(str) {
	let results = [];
	const val = str.toLowerCase();

	for (i = 0; i < names.length; i++) {
		if (names[i].toLowerCase().indexOf(val) > -1) {
			results.push(names[i]);
		}
	}

	return results;
}

function searchHandler(e) {
	const inputVal = e.currentTarget.value;
	let results = [];
	if (inputVal.length > 0) {
		results = search(inputVal);
	}
	showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
    
    suggestions.innerHTML = '';

	if (results.length > 0) {
		for (i = 0; i < results.length; i++) {
			let item = results[i];
			// Highlights only the first match
			// TODO: highlight all matches
			const match = item.match(new RegExp(inputVal, 'i'));
			item = item.replace(match[0], `<strong>${match[0]}</strong>`);
			suggestions.innerHTML += `<li>${item}</li>`;
		}
		suggestions.classList.add('has-suggestions');
	} else {
		results = [];
		suggestions.innerHTML = '';
		suggestions.classList.remove('has-suggestions');
	}
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	input.focus();
	suggestions.innerHTML = '';
	suggestions.classList.remove('has-suggestions');
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);


//username.addEventListener('keyup', () => {
//     saveScoreBtn.disabled = username.value
// })
// saveHighScore = e => {
//     e.precentDefault()

//     const score = {
//         score: mostRecentScore,
//         name: username.value
//     }

//     highScores.push(score)

//     highScores.sort((a, b)=> {
//         return b.score - a.score
//     })
//     highScores.splice[5]
//     localStorage.setItem('highScores', JSON.stringify(highScores))
//     window.location.assign('/')
// }

