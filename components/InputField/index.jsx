import { InputField } from "@cred/neopop-web/lib/components";

const InputComp = () => {
  return (
    <div>
      <InputField
        type="text"
        label="your name"
        placeholder="enter your name"
        id="text_field"
        autoFocus
      />
    </div>
  );
};

export default InputComp;
