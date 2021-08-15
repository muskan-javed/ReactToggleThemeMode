import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/react";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <header className="bg-dark d-flex justify-content-end">
        <Button onClick={toggleColorMode} m={3}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </header>
    </>
  );
};
export default Home;
