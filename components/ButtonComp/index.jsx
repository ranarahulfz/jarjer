import { Button } from "@cred/neopop-web/lib/components";

const ButtonComp = () => {
  return (
    <Button
      variant="primary"
      kind="elevated"
      size="big"
      colorMode="light"
      onClick={() => {
        console.log("I'm clicked");
      }}
    >
      Primary
    </Button>
  );
};

export default ButtonComp;
