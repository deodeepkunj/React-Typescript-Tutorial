type colorProps = {
  colorData: {
    color: string;
    value: string;
  }[];
};

export const ColorList = (props: colorProps) => {
  return (
    <div>
      {props.colorData.map((colorname) => {
        return <h4>{colorname.color}</h4>;
      })}
    </div>
  );
};
