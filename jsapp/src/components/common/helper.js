import store from "../../redux/store";
import { updatelocation } from "../../redux/helper";
export const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];
export const monthsFull = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
export function formattedDuration(duration) {
	var durationarray = duration.replace(/\s+/g, " ");
	durationarray = durationarray.split(" – ");
	if (durationarray) {
		durationarray = durationarray.map((el) => el.split(" "));
	}
	durationarray = durationarray.map((item) =>
		item.map((el) =>
			monthsFull.includes(el) ? months[monthsFull.indexOf(el) + 1] : el
		)
	);
	durationarray = durationarray.map((el) => el.join(" "));
	const result = durationarray.join(" - ");
	return result;
}
export function initpath() {
	store.dispatch(updatelocation(window.location.pathname));
}
