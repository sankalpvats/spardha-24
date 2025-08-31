import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        
        {/* Left Section */}
        <div className={styles.left}>
          <h1 className={styles.heading}>GET IN TOUCH</h1>
          <p className={styles.subheading}>SPARDHA UNLEASHING POTENTIAL</p>

          <div className={styles.formBox}>
        <form className={styles.form}>
    <input type="text" placeholder="Name" className={styles.input} />
    <input type="email" placeholder="Email" className={styles.input} />
    <textarea placeholder="Message" className={styles.textarea}></textarea>
    <button className={styles.button}>Submit</button>
  </form>
</div>

        </div>

        {/* Right Section */}
        <div className={styles.right}>
          <img src="../public/image/worldmap.png" alt="World Map" className={styles.map} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
