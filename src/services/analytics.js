import ReactGA from "react-ga";

const trackingId = "UA-185982255-1";
const id = Math.floor(Math.random() * 1000);

ReactGA.initialize(trackingId, {
  debug: true,
  gaOptions: {
    userId: id,
  },
});

export const Event = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};
