import Raven from "raven-js";

const init = () => {
    Raven.config("https://1f0fde03b9da4ec498be669cc1e1f1ac@o446601.ingest.sentry.io/5526312", {
        release: "1-0-0",
        environment: "development-test"
      }).install();
};
  
const log = (error) => {
    console.log(error);
    Raven.captureException(error);
};

const logService = {
    init,
    log,
};

export default logService;