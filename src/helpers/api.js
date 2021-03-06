import axios from "axios";
import config from "./config";

export class HttpException extends Error {
  isHttpException = true;
  name = "HttpException";

  constructor(message, status) {
    super(message);
    this.status = status;
  }

  static parse(error) {
    if (error.isAxiosError) {
      return new HttpException(
        error?.response?.data?.message || error.message,
        error?.response?.status || 0
      );
    }

    return error;
  }
}

export class HttpModule {
  constructor(url, $axios) {
    this.$axios = $axios.create({
      baseURL: url,
      headers: {
        "x-rapidapi-host": config.apiHost,
        "x-rapidapi-key": config.apiKey,
      },
    });
  }
  async $get(url, config) {
    try {
      const { data } = await this.$axios.get(url, config);

      return data;
    } catch (error) {
      throw HttpException.parse(error);
    }
  }
  async $post(url, body, config) {
    try {
      const { data } = await this.$axios.post(url, body, config);

      return data;
    } catch (error) {
      throw HttpException.parse(error);
    }
  }
}

class Api extends HttpModule {
  constructor() {
    super(config.apiUrl, axios);
  }
}
const $api = new Api();

export default $api;
