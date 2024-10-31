import { sleep } from "k6";
import http from "k6/http";

export const options = {
  vus: 25,
  duration: "60s",
};

export default function () {
  http.get("http://localhost:8080/api");
  sleep(1);
}
