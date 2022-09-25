interface Props {
  date: Date;
}

export default function YmdView(props: Props) {
  const dateStrList = props.date.toISOString().split("T")[0].split("-");

  return (
    <div className="row">
      <div className="col">{dateStrList[0]}</div>
      <div className="col">{dateStrList[1]}</div>
      <div className="col">{dateStrList[2]}</div>
    </div>
  );
}
