import axios from "axios";

import { URL, SEED } from "./config";

const getReq = async (source) => {
  try {
    const { data, status } = await axios.get(URL, {
      params: {
        seed: SEED,
        results: _.random(50, 300, false),
      },
      cancelToken: source.token,
    });
    return { data, status };
  } catch (err) {
    if (axios.isCancel(err)) {
      throw "Axios request cancelled!";
    }
    throw err;
  }
};

export default getReq;
