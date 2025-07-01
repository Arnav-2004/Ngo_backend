import { responseUtils } from "../utils/response.utils.js";
import { errorWrapper } from "../middleware/errorWrapper.js";
import { successMessage } from "../constant/messages.js";

const healthCheck = errorWrapper(async (req, res, next) => {
  return responseUtils.success(res, {
    data: {
      message: successMessage.healthOk,
      timestamp: new Date().toISOString(),
    },
    status: 200,
  });
});

export { healthCheck };
