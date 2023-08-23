import React from "react";

const CheckboxInput = (props: {
  text:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
}) => {
  return (
    <div className="text-MyColor02 flex gap-1">
      <input type="checkbox" />
      {props.text}
    </div>
  );
};

export default CheckboxInput;
