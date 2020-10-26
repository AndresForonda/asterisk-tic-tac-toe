import client from "ari-client";

const ariUrl = process.env.ARI_URL || "https://localhost:8088";
const userName = process.env.ARI_USER_NAME || "asterisk";
const password = process.env.ARI_PASSWORD || "asterisk";

const connect = client.connect(ariUrl, userName, password);

export default {
  connect,
};
