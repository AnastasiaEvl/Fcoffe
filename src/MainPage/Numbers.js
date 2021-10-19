import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Counters() {
  const [loading, setLoading] = React.useState(false);
  const onStart = () => {
    setLoading(true);
  };
  const onEnd = () => {
    setLoading(false);
  };
  const containerProps = {
    "aria-busy": loading,
  };

  return (
    <div className="numbers">
      <img className="man" src="/image/man.png" />
      <img className="smallCup" src="/image/smallCup.png" />
      <div className="number1">
        {" "}
        <CountUp
          end={163}
          duration="2"
          onStart={onStart}
          onEnd={onEnd}
          redraw={false}
          containerProps={containerProps}
        >
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
      </div>
      <div className="number2">
        <CountUp
          end={856}
          duration="2"
          onStart={onStart}
          onEnd={onEnd}
          containerProps={containerProps}
        >
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
      </div>
      <div className="users">
        <p className="highLetters">ПОЛЬЗОВАТЕЛЕЙ</p> системы
      </div>
      <div className="numberCoffee">
        <p className="highLetters">КРУЖЕК</p> кофе заказано
      </div>
    </div>
  );
}
export default Counters;
