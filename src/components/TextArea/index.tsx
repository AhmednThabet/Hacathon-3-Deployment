/* eslint-disable react/display-name */
import React, { forwardRef } from "react";

export const TextArea = forwardRef<any, any>(
  ({ className, placeHolder, name, id, cols, rows, ...rest }, ref) => {
    return (
      <div>
        <textarea
          className={className}
          name={name}
          id={id}
          cols={cols}
          rows={rows}
          placeholder={placeHolder}
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);

export default TextArea;
