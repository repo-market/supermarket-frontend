import { forwardRef } from "react";
import { IMaskInput } from "react-imask";
import { IMaskProps } from "../../types/IMaskProps";

export const CEPMask = forwardRef<HTMLInputElement, IMaskProps>(
  ({ onChange, name, ...rest }, ref) => {
    return (
      <IMaskInput
        {...rest}
        mask="00000-000"
        definitions={{
          "#": /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name, value } })}
      />
    );
  }
);