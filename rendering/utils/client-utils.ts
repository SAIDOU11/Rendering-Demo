import "client-only";

const ClientSideFunction = () => {
  console.log(`Use window object,
                    use localstorage`);

  return "Client result";
};

export default ClientSideFunction;
