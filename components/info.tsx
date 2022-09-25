import { useEffect, useState } from "react";
import ElapseDate from "../lib/elapseDate";
import YmdElapse from "./ymdElapse";
import YmdInput from "./ymdInput";
import YmdView from "./ymdView";

const birtday_save_name = "howOldAreYouBirthDay";

export default function Info() {
  const loadBirthDay = () => {
    var dateStr = localStorage.getItem(birtday_save_name);
    if (dateStr === null) {
      dateStr = new Date().getTime().toString();
    }
    setBirthDayFunc(new Date(parseInt(dateStr)));
    setLoading(false);
  };
  const [loading, setLoading] = useState(true);
  const [birthDay, setBirthDay] = useState(new Date());
  const setBirthDayFunc = (date: Date) => {
    localStorage.setItem(birtday_save_name, date.getTime().toString());
    setBirthDay(date);
  };
  const [toDay, setToDay] = useState(new Date());
  const [elapseDate, setElapseDate] = useState(new ElapseDate());

  const calc = () => {
    // setBirthDayFunc(newBirthDay);
    var newElapseDate = new ElapseDate();
    newElapseDate.years = toDay.getFullYear() - birthDay.getFullYear();
    newElapseDate.months = toDay.getMonth() - birthDay.getMonth();
    if (newElapseDate.months < 0) {
      if (newElapseDate.years - 1 >= 0) {
        newElapseDate.months += 12;
        newElapseDate.years -= 1;
      }
    }
    newElapseDate.days = toDay.getDate() - birthDay.getDate();
    if (newElapseDate.days < 0) {
      if (newElapseDate.months - 1 >= 0) {
        var tempToday = new Date(toDay.getFullYear(), toDay.getMonth(), 0);
        newElapseDate.days += tempToday.getDate();
        newElapseDate.months -= 1;
      }
    }

    setElapseDate(newElapseDate);
  };

  useEffect(() => {
    setLoading(true);
    loadBirthDay();
  }, []);

  useEffect(() => {
    // loadBirthDay();
    calc();
  }, [birthDay]);

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div className="container">
      <YmdInput date={birthDay} setDate={setBirthDayFunc} />
      <YmdView date={toDay} />
      <YmdElapse elapseDate={elapseDate} />
    </div>
  );
}
