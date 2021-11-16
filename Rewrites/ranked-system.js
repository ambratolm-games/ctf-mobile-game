//==================================================
// Ranked System
//==================================================
function ranked_divisions(ranks, divisions) {
	let ranked_divisions = [];
	let k = 0;
	for (let i = 0; i < ranks.length; i++) {
		for (let j = 0; j < divisions.length; j++) {
			ranked_divisions.push({
				id : k + 1,
				rank: ranks[i],
				division : divisions[j]
			});
			k++;
		}
	}
	return ranked_divisions;
}
function player_high_score(player_rank_id) {
	let player_high_score = RANK_COEFFICIENT * Math.pow(player_rank_id, RANK_POWER);
	return player_high_score;
}
function player_rank(player_high_score) {
	let player_rank_id = Math.floor(Math.pow(player_high_score / RANK_COEFFICIENT, 1/RANK_POWER));
	return RANKED_DIVISIONS[player_rank_id];
}

//==================================================
// ♦ Ranked Constants
//==================================================
const RANKS =  [ "Bronze", "Silver", "Gold", "Platinum", "Diamond" ];
const DIVISIONS = [ "Commoner", "Baronet", "Baron", "Viscount", "Earl", "Marquess", "Duke", "Prince", "King", "Emperor" ];
const RANKED_DIVISIONS = ranked_divisions(RANKS, DIVISIONS);
const RANK_COEFFICIENT = 100;
const RANK_POWER = 3;
//==================================================

