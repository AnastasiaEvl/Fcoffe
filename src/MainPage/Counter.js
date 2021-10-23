import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Counter() {
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
    <div className="counter">
      <div className="partners">НАШИ ПАРТНЕРЫ</div>
      <div>
        <img
          className="logoPartners"
          style={{ zIndex: "3" }}
          src="/image/partners.png"
        />
      </div>
      <div className="counterStyle">
        <CountUp
          end={25}
          duration="4"
          onStart={onStart}
          onEnd={onEnd}
          redraw={false}
          containerProps={containerProps}
        >
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span
                ref={countUpRef}
                style={{
                  // fontFamily: "SF UI Display",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "54px",
                  lineHeight: "16px",
                  zIndex: "5",
                  marginTop: "80px",
                  marginLeft: "31%",
                  position: "absolute",
                }}
              />
            </VisibilitySensor>
          )}
        </CountUp>
      </div>
      <div className="p">партнеров</div>
      <div>
        <img
          className="coffeePartners"
          style={{ zIndex: "3" }}
          src="/image/coffeePartners.png"
        />
      </div>
      <div className="counterStyle">
        <CountUp
          end={114}
          duration="4"
          onStart={onStart}
          onEnd={onEnd}
          redraw={false}
          containerProps={containerProps}
          style={{
            fontFamily: "SF UI Display",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "54px",
            lineHeight: "16px",
            marginLeft: "28%",
            marginTop: "72px",
            position: "absolute",
          }}
        >
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span
                ref={countUpRef}
                style={{
                  fontFamily: "SF UI Display",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "54px",
                  lineHeight: "16px",
                  zIndex: "5",
                  marginTop: "80px",
                  marginLeft: "28%",
                  position: "absolute",
                }}
              />
            </VisibilitySensor>
          )}
        </CountUp>
      </div>
      <div className="c">кофеен</div>
      <img className="hotfix" src="image/hotfix.svg" />
      <img className="yumy" src="image/yumy.svg" />
      <img className="guru" src="image/Guru.svg" />
      <img className="cofix" src="image/cofix.svg" />
      <img className="cofeSound" src="image/coffeeSaund.svg" />
      <img className="stantion" src="image/Stancya.svg" />
      <img className="zerno" src="image/Zerno.svg" />
      <img className="lavaza" src="image/lavazza.svg" />
    </div>
  );
}

export default Counter;
