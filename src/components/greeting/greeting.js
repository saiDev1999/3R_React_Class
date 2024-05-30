const GreetingComponent = (prop) => {
  console.log(prop);
  const { children } = prop;
  return (
    <>
      <h1>Hello Good morning</h1>

      {children}
    </>
  );
};
export default GreetingComponent;
