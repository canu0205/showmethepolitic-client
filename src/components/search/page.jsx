import classes from "./search.module.css";

export default function Search() {
  return (
    <div className={classes.searchBox}>
      <input
        type="text"
        placeholder="이슈를 입력하세요"
        className={classes.searchEngine}
      />
      <button className={classes.searchButton}>검색</button>
    </div>
  );
}
