import Dashboard from "./views/Dashboard/Dashboard";
import Login from "./views/Login/Login";
import RawData from "./views/RawData/RawData";
import Signup from "./views/Signup/Signup";
import Trustworthy_Overall from "./views/Trustworthy/Overall/trustworthy_overall";
import Trustworthy from "./views/Trustworthy/trustworthy";
import Under_Eng_Overall from "./views/UnderEng/Overall/under_eng_overall";
import Under_Eng from "./views/UnderEng/under_eng";

export const routes = [
	{
		path: "/",
		component: Login,
		auth: false,
	},
	{
		path: "/login",
		component: Login,
		auth: false,
	},
	{
		path: "/signup",
		component: Signup,
		auth: false,
	},
	{
		path: "/dashboard",
		component: Dashboard,
		auth: true,
	},
	{
		path: "/raw-data",
		component: RawData,
		auth: true,
	},
	{
		path: "/trustworthy",
		component: Trustworthy,
		auth: true,
	},
	{
		path: "/trustworthy-overall",
		component: Trustworthy_Overall,
		auth: true,
	},
	{
		path: "/under-eng",
		component: Under_Eng,
		auth: true,
	},
	{
		path: "/under-eng-overall",
		component: Under_Eng_Overall,
		auth: true,
	},
];
