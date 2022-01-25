import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Suggest.module.css";

const SuggestFeature: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MH | Suggest Feature</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Suggest a new feature!</h1>

        <p className={styles.description}>
          Write down your suggestion and submit it. In a few moments you will be
          able to see it{" "}
          <a className={styles.navigateAnchor} href="/feature-voting">
            here
          </a>
        </p>

        <form className={styles.form}>
          <textarea
            className={styles.textArea}
            placeholder="Describe the feature"
          />
          <button className={styles.submitButton} type="submit">
            Submit
          </button>
        </form>

        <div className={styles.grid}>
          <a href="/feature-voting" className={styles.card}>
            <h2>Feature Voting</h2>
            <p>See the list of features and vote in the best ones!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://mousehaunt.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className={styles.logo}>Mouse Haunt</span>
        </a>
      </footer>
    </div>
  );
};

export default SuggestFeature;
