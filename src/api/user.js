import request from "@/utils/request";

export function loginIn() {
    return request({
        url: "/info",
        method: "get",
    });
}
  