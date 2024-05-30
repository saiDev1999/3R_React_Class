import styles from "../headings/heading.module.css";
const ListComponent = (prop) => {
  const { list } = prop;
  console.log(list);
  return (
    <ol>
      {list.map((each) => {
        return <li>{each}</li>;
      })}
    </ol>
  );
};
export default ListComponent;
