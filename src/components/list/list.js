import styles from "../headings/heading.module.css";
const ListComponent = () => {
  return (
    <ol>
      <li className={styles.heading}>Apple</li>
      <li className="head-text">Banana</li>
      <li className="head-text">Watermelon</li>
    </ol>
  );
};
export default ListComponent;
