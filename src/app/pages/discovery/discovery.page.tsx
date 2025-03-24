import { FilterIcon } from "@/shared/assets/icons/FilterIcon";
import { BottomSheet } from "@components/ui/BottomSheet/BottomSheet.tsx";
import { Button } from "@components/ui/Button/Button.tsx";
import { Input } from "@components/ui/Input/Input.tsx";
import { ISelectOption, Select } from "@components/ui/Select/Select.tsx";
import { Typography } from "@components/ui/Typography/Typography.tsx";
import { SearchResults } from "@features/search/components/SearchResults/SearchResults.tsx";
import { ISearchType, useSearch } from "@features/search/store/search.store.ts";
import { useHeader } from "@features/storage/stores/header.storage.ts";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import styles from "./discovery.page.module.css";

const getSelectOption = (options: ISelectOption[], value: string) => {
	return options.filter((opt) => opt.value === value)[0];
};

export const DiscoveryPage = () => {
	const { setTitle } = useHeader();
	const [isFiltersOpen, setIsFiltersOpen] = useState(false);

	const [searchTypeOptions] = useState([
		{ label: "Anime", value: "anime" },
		{ label: "User", value: "user" },
	]);
	const [searchType, setSearchType] = useState<ISelectOption | null>();
	const { search, setSearch } = useSearch();
	const defaultTypeSelectOption = getSelectOption(searchTypeOptions, search.type);

	useEffect(() => {
		setTitle("Discovery");
	}, [setTitle]);

	const onSearchTypeChange = (newOption: ISelectOption | null) => {
		// setSearchType(newOption);
		setSearch((draft) => {
			draft.type = newOption?.value as ISearchType;
		});
	};

	return (
		<div className={styles.page}>
			<div className={styles.options}>
				<div className={styles.line}>
					<Button variant="outline" className={styles.option} asLink>
						<Link to="/discovery/ongoings">Ongoings</Link>
					</Button>
					<Button variant="outline" className={styles.option} asLink>
						<Link to="/discovery/latests">Latests</Link>
					</Button>
				</div>
				<div className={styles.line}>
					<Button variant="outline" className={styles.option} asLink>
						<Link to="/discovery/critiques">Critiques</Link>
					</Button>
					<Button variant="outline" className={styles.option} asLink>
						<Link to="/discovery/collections">Collections</Link>
					</Button>
				</div>
				<div className={styles.line}>
					<Button variant="outline" className={styles.option} asLink>
						<Link to="/discovery/calendar">Calendar</Link>
					</Button>
				</div>
			</div>
			<Input
				value={search.query}
				onChange={(value) => setSearch((prev) => ({ ...prev, query: value }))}
				placeholder="Search"
				rightSlot={
					<div className={styles.input_right_slot}>
						<FilterIcon onClick={() => setIsFiltersOpen(true)} />
						{/* <SearchIcon onClick={onSearchSubmit} /> */}
					</div>
				}
				classNames={{ form: styles.search, input: styles.search }}
				// onSubmit={onSearchSubmit}
				focused
			/>
			<SearchResults />

			<BottomSheet isShow={isFiltersOpen} onOutsideClick={() => setIsFiltersOpen(false)}>
				<div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
					<Typography>Type</Typography>
					<Select
						options={searchTypeOptions}
						onChange={onSearchTypeChange}
						defaultValue={defaultTypeSelectOption}
						placeholder="Type"
					/>
				</div>
			</BottomSheet>
		</div>
	);
};
