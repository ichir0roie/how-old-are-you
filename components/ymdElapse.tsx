import ElapseDate from "../lib/elapseDate";

interface Props {
  elapseDate: ElapseDate;
}

export default function YmdElapse(props: Props) {
  return (
    <div className="row">
      <div className="col">{props.elapseDate.years}</div>
      <div className="col">{props.elapseDate.months}</div>
      <div className="col">{props.elapseDate.days}</div>
    </div>
  );
}
