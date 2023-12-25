import classes from "./issue.module.css";

export default function Issue({ params }) {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1>issue</h1>
      <div>{params.title}</div>
    </main>
  );
}
