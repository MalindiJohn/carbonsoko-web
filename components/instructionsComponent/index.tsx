import styles from "./instructionsComponent.module.css";
import { Link } from 'react-router-dom';



export default function InstructionsComponent() {
  return (
    <div className={styles.container}>
      <header className={styles.header_container}>
        <div className={styles.header}>
          <h1>
            Carbon<span>Soko</span>
          </h1>
          <h3>Trading a Greener Future</h3>
        </div>
      </header>

      <div className={styles.buttons_container}>
        <Link to="/profile" className={styles.button}>
          <p> My Account</p>
        </Link>
        
        <Link to="/trackers" className={styles.button}>
          <p>EmissionsTracker</p>
        </Link>

        <Link to="/submitpage" className={styles.button}>
          <img
            src="https://static.alchemyapi.io/images/cw3d/Icon%20Large/file-eye-01-l.svg"
            width={"20px"}
            height={"20px"}
          />
          <p>Submit Offset Request</p>
        </Link>

        <Link to="/donate" className={styles.button}>
          <p>Donate</p>
        </Link>
      </div>
      <p className={styles.get_started}>
        Get started by Connecting <span>Account</span>
      </p>
    </div>
  );
}