import axios from "axios";
import { setAlert } from "./alert";

import { SCRAPE_SITE, DELETE_SCRAPE, SCRAPE_ERROR } from "./types";

// Mengikis berdasarkan seleksi dan mengembalikan data json
export const scrapeSite = selection => async dispatch => {
  try {
    const res = await axios.get(`/scrape/${selection}`);

    dispatch({
      type: SCRAPE_SITE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SCRAPE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Hapus satu hasil goresan
export const deleteScrape = title => async dispatch => {
  try {
    dispatch({
      type: DELETE_SCRAPE,
      payload: title
    });

    dispatch(setAlert("Scrape deleted", "success"));
  } catch (err) {
    dispatch({
      type: SCRAPE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
