import io from "socket.io-client";
import type { BusLocation } from "./types";
import { gZip2String } from "./helper";

const sid = "";
const uid = "";
const prm = "RKL";

const socket = io("https://rapidbus-socketio-avl.prasarana.com.my", {
  transports: ["websocket"],
});

function requestData() {
  socket.emit("onFts-reload", payload);
}

function handleData(jsonData: BusLocation[]) {
  // Do something with the data
  console.log("jsonData", jsonData);
}

socket.on("connect", () => {
  console.log("Connected to the server");
  requestData();
});

const payload = {
  sid,
  uid,
  provider: prm,
  route: "",
};

// Emit the "onFts-reload" event every 30 seconds
setInterval(() => {
  console.log('Emitting "onFts-reload" event with payload:', payload);
  requestData();
}, 15000); // 15 seconds in milliseconds

// Listen for the "onFts-client" event and log it
socket.on("onFts-client", (data: any) => {
  console.log('Received "onFts-client" event:');

  const stringData = gZip2String(data);
  const jsonData = JSON.parse(stringData);
  handleData(jsonData);
});

// Handle disconnection
socket.on("disconnect", () => {
  console.log("Disconnected from the server");
});

// Handle errors
socket.on("error", (error: any) => {
  console.error("Socket error:", error);
});
