import { useGetUser } from "@features/users/api/getUser/getUser.api.ts";
import styles from "./user.page.module.css";
import { UserIcon } from "@/shared/assets/icons/UserIcon.tsx";
// import { UserRounded } from "solar-icon-set/users";
export const UserPage = () => {
	// const { userId } = getRouteApi("/users/$userId").useParams();
	const { data: user } = useGetUser();
	// const [data, setData] = useState({});

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const response = await axios.get("https://shikimori.one/api/users/" + userId, {
	// 			headers: { "User-Agent": "ShikiLove" },
	// 		});
	// 		setData(response.data);
	// 	};
	// 	fetchData();
	// }, [userId]);

	// console.log({ data });

	return (
		<div className={styles.page} style={{ display: "flex", flexDirection: "column" }}>
			<div>
				<UserIcon />
			</div>
			{user && <div>{user.nickname}</div>}
		</div>
	);
};
