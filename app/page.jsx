import Button from "@/components/ui/Button";
import classes from "./page.module.css"

export default function HomePage() {
  return (
    <>
      <main className={classes.main}>
        <h1 className={classes.title}>Crafting Websites with Precision and Elegance.</h1>
        <h2 className={classes.description}>Bringing artistry and functionality together, building visually stunning and seamless websites.</h2>
        <Button>Explore</Button>
      </main>
    </>
  );
}