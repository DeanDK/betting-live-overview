import axios from "axios";
import io from "socket.io-client";

import { url } from "./../config";

export function getLiveOverview() {
  axios.get(`${url}`).then(function(response) {
    var socketUrl = response.data.config.liveDistributionSSL;
    var socket = io(socketUrl);

    socket.on("connect", function() {
      socket.emit("subscribe", {
        subscribeMode: "topSportBets",
        language: {
          default: "en"
        },
        deliveryPlatform: "WebSubscribe",
        playerUuid: null,
        subscribeOptions: {
          autoSubscribe: true,
          betCount: 3,
          excludeMeta: false,
          resubscriptions: 0,
          fullBetMeta: true,
          browser: {}
        }
      });
    });

    socket.on("message", function(message) {
      switch (message.type) {
        case "state":
          // We have all data needed to show
          console.log("Data =>", message.contentEncoding);
          console.log("Data initial =>", message);
          break;
        case "currentMatches":
          // We have matches to update
          console.log("Matches =>", message.contentEncoding);
          break;
        case "betchange":
          // We have match bets to update
          console.log("Match bets =>", message.contentEncoding);

          break;
        default:
          console.log("default");
      }
    });
  });

  return { type: "GET_LIVE_OVERVIEW" };
}
