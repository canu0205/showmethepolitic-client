import classes from "./header.module.css";
import Link from 'next/link';

export default function Header() {
  return (
    <header className={classes.header}>
      <h1>
        <Link href="/">
          정치보여줘.com
        </Link>
      </h1>
    </header>
  );
}
