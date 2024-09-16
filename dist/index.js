var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  BybitWallet: () => BybitWallet,
  BybitWalletName: () => BybitWalletName
});
module.exports = __toCommonJS(src_exports);
var import_wallet_adapter_core = require("@aptos-labs/wallet-adapter-core");
var import_aptos = require("aptos");
var BybitWalletName = "Bybit Wallet";
var BybitWallet = class {
  constructor() {
    this.name = BybitWalletName;
    this.url = "https://bybit.com/web3/";
    this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHZpZXdCb3g9IjAgMCA4OCA4OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMTguN0MwIDguMzcyMjcgOC4zNzIyOCAwIDE4LjcgMEg2OS4zQzc5LjYyNzcgMCA4OCA4LjM3MjI4IDg4IDE4LjdWNjkuM0M4OCA3OS42Mjc3IDc5LjYyNzcgODggNjkuMyA4OEgxOC43QzguMzcyMjcgODggMCA3OS42Mjc3IDAgNjkuM1YxOC43WiIgZmlsbD0iIzQwNDM0NyIvPgo8cGF0aCBkPSJNNy41NzYxNyAyNi44MDY3QzYuNzg1MTYgMjQuMDc4NyA4LjQ3NzUgMjEuMjUzMSAxMS4yNTU5IDIwLjY2M0w1Ny42MDg3IDEwLjgxNzNDNTkuODA5IDEwLjM1IDYyLjA0NDMgMTEuNDQ0MyA2My4wMjQ3IDEzLjQ2ODlMODMuODQ0MyA1Ni40NjU3TDI1LjE3NzYgODcuNTEwMUw3LjU3NjE3IDI2LjgwNjdaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMzEyXzE3NTM0KSIvPgo8cGF0aCBkPSJNOC4xODI0MiAzMC4xNjE4QzcuMzUwNDkgMjcuMjgzOCA5LjI3OTI1IDI0LjM0MTMgMTIuMjUwMiAyMy45NTU5TDczLjY4NjUgMTUuOTg4MUM3Ni4yMzkxIDE1LjY1NzEgNzguNjExMSAxNy4zNjE4IDc5LjExMTEgMTkuODg2N0w4OC4wMDAzIDY0Ljc3NzFMMjQuNjg5MiA4Ny4yNjY1TDguMTgyNDIgMzAuMTYxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0wIDM0LjIyMjJDMCAyOC44MjIxIDQuMzc3NjYgMjQuNDQ0NSA5Ljc3Nzc4IDI0LjQ0NDVINjguNDQ0NEM3OS4yNDQ3IDI0LjQ0NDUgODggMzMuMTk5OCA4OCA0NFY2OC40NDQ1Qzg4IDc5LjI0NDcgNzkuMjQ0NyA4OCA2OC40NDQ0IDg4SDE5LjU1NTZDOC43NTUzMiA4OCAwIDc5LjI0NDcgMCA2OC40NDQ1VjM0LjIyMjJaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNTguMjIwMSA2MS4xOTU5VjQyLjg3NTVINjEuNzkzN1Y2MS4xOTU5SDU4LjIyMDFaIiBmaWxsPSIjRjdBNjAwIi8+CjxwYXRoIGQ9Ik0xNy40Mzk1IDY2LjY2MzdIOS43Nzc5NVY0OC4zNDM0SDE3LjEzMTNDMjAuNzA0OSA0OC4zNDM0IDIyLjc4NzQgNTAuMzUwNSAyMi43ODc0IDUzLjQ4OTNDMjIuNzg3NCA1NS41MjE1IDIxLjQ1MDQgNTYuODM0NSAyMC41MjU3IDU3LjI3MjFDMjEuNjMxNSA1Ny43ODY5IDIzLjA0NTYgNTguOTQzOCAyMy4wNDU2IDYxLjM4ODVDMjMuMDQ1NiA2NC44MTA4IDIwLjcwNDkgNjYuNjYzNyAxNy40Mzk1IDY2LjY2MzdaTTE2Ljg0ODEgNTEuNTM0M0gxMy4zNTE2VjU1Ljc1NDhIMTYuODQ4MUMxOC4zNjQyIDU1Ljc1NDggMTkuMjEzOCA1NC45MDY0IDE5LjIxMzggNTMuNjQ1NUMxOS4yMTM4IDUyLjM4MjYgMTguMzY2MiA1MS41MzQzIDE2Ljg0ODEgNTEuNTM0M1pNMTcuMDc5MyA1OC45NzA4SDEzLjM1MTZWNjMuNDcyOEgxNy4wNzkzQzE4LjY5OTQgNjMuNDcyOCAxOS40NyA2Mi40NDMyIDE5LjQ3IDYxLjIwOTJDMTkuNDcyIDU5Ljk3MzMgMTguNjk5NCA1OC45NzA4IDE3LjA3OTMgNTguOTcwOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zMi44OTI1IDU5LjE1MDFWNjYuNjYzN0gyOS4zNDM5VjU5LjE1MDFMMjMuODQxOSA0OC4zNDM0SDI3LjcyMzhMMzEuMTQzMiA1NS43Mjc4TDM0LjUxMDcgNDguMzQzNEgzOC4zOTI2TDMyLjg5MjUgNTkuMTUwMVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00OC41NjMzIDY2LjY2MzdINDAuOTAxN1Y0OC4zNDM0SDQ4LjI1NTFDNTEuODI4NyA0OC4zNDM0IDUzLjkxMTIgNTAuMzUwNSA1My45MTEyIDUzLjQ4OTNDNTMuOTExMiA1NS41MjE1IDUyLjU3NDIgNTYuODM0NSA1MS42NDk1IDU3LjI3MjFDNTIuNzU1MyA1Ny43ODY5IDU0LjE2OTMgNTguOTQzOCA1NC4xNjkzIDYxLjM4ODVDNTQuMTY3NCA2NC44MTA4IDUxLjgyNjggNjYuNjYzNyA0OC41NjMzIDY2LjY2MzdaTTQ3Ljk3MTkgNTEuNTM0M0g0NC40NzUzVjU1Ljc1NDhINDcuOTcxOUM0OS40ODggNTUuNzU0OCA1MC4zMzc2IDU0LjkwNjQgNTAuMzM3NiA1My42NDU1QzUwLjMzNTcgNTIuMzgyNiA0OS40ODggNTEuNTM0MyA0Ny45NzE5IDUxLjUzNDNaTTQ4LjIwMzEgNTguOTcwOEg0NC40NzUzVjYzLjQ3MjhINDguMjAzMUM0OS44MjMyIDYzLjQ3MjggNTAuNTkzOCA2Mi40NDMyIDUwLjU5MzggNjEuMjA5MkM1MC41OTM4IDU5Ljk3MzQgNDkuODIxMyA1OC45NzA4IDQ4LjIwMzEgNTguOTcwOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik03My40MzkgNTEuNTM0M1Y2Ni42NjM3SDY5Ljg2NTRWNTEuNTM0M0g2NS4wODM5VjQ4LjM0MzRINzguMjIyNFY1MS41MzQzSDczLjQzOVoiIGZpbGw9IndoaXRlIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMzEyXzE3NTM0IiB4MT0iNy4zMzMwOCIgeTE9IjI1LjU5NCIgeDI9Ijg0LjYzODEiIHkyPSIyMS43MjE2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkQ3NDgiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjdBNjAwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==";
    this.provider = typeof window !== "undefined" ? window == null ? void 0 : window.bybitWallet : void 0;
    this.readyState = typeof window !== "undefined" ? (window == null ? void 0 : window.bybitWallet) ? import_wallet_adapter_core.WalletReadyState.Installed : import_wallet_adapter_core.WalletReadyState.NotDetected : import_wallet_adapter_core.WalletReadyState.Unsupported;
  }
  deeplinkProvider(data) {
    var _a;
    const target = (data == null ? void 0 : data.url) || ((_a = window == null ? void 0 : window.location) == null ? void 0 : _a.href);
    return `https://app.bybit.com/inapp?by_dp=${encodeURIComponent("bybitapp://open/route?targetUrl=by%3A%2F%2Fweb3%2Ftab%2Findex%3Findex%3D0")}&by_web_link=${encodeURIComponent(target)}`;
  }
  connect() {
    return __async(this, null, function* () {
      var _a, _b;
      try {
        const addressInfo = yield (_b = (_a = this.provider) == null ? void 0 : _a.aptos) == null ? void 0 : _b.connect();
        if (!addressInfo) throw `${BybitWalletName} Address Info Error`;
        return addressInfo;
      } catch (error) {
        throw error;
      }
    });
  }
  account() {
    return __async(this, null, function* () {
      var _a, _b;
      const response = yield (_b = (_a = this.provider) == null ? void 0 : _a.aptos) == null ? void 0 : _b.account();
      if (!response) throw `${BybitWalletName} Account Error`;
      return response;
    });
  }
  disconnect() {
    return __async(this, null, function* () {
      var _a, _b;
      try {
        yield (_b = (_a = this.provider) == null ? void 0 : _a.aptos) == null ? void 0 : _b.disconnect();
      } catch (error) {
        throw error;
      }
    });
  }
  signAndSubmitTransaction(transaction, options) {
    return __async(this, null, function* () {
      var _a, _b;
      try {
        const response = yield (_b = (_a = this.provider) == null ? void 0 : _a.aptos) == null ? void 0 : _b.signAndSubmitTransaction(
          transaction,
          options
        );
        if (!response) {
          throw new Error("No response");
        }
        return response;
      } catch (error) {
        throw new Error(`${JSON.stringify(error)}`);
      }
    });
  }
  signTransaction(transaction, options) {
    return __async(this, null, function* () {
      var _a, _b;
      try {
        const response = yield (_b = (_a = this.provider) == null ? void 0 : _a.aptos) == null ? void 0 : _b.signTransaction(
          transaction,
          options
        );
        if (!response) {
          throw new Error("Failed to sign transaction");
        }
        return response;
      } catch (error) {
        throw error;
      }
    });
  }
  signMessage(message) {
    return __async(this, null, function* () {
      var _a, _b;
      try {
        if (typeof message !== "object" || !message.nonce) {
          `${BybitWalletName} Invalid signMessage Payload`;
        }
        const response = yield (_b = (_a = this.provider) == null ? void 0 : _a.aptos) == null ? void 0 : _b.signMessage(message);
        if (response) {
          return response;
        } else {
          throw `${BybitWalletName} Sign Message failed`;
        }
      } catch (error) {
        const errMsg = error.message;
        throw errMsg;
      }
    });
  }
  onNetworkChange(callback) {
    return __async(this, null, function* () {
      var _a, _b;
      try {
        const handleNetworkChange = (networkInfo) => __async(this, null, function* () {
          callback({
            name: networkInfo == null ? void 0 : networkInfo.name,
            chainId: networkInfo == null ? void 0 : networkInfo.chainId,
            api: void 0
          });
        });
        yield (_b = (_a = this.provider) == null ? void 0 : _a.aptos) == null ? void 0 : _b.onNetworkChange(handleNetworkChange);
      } catch (error) {
        const errMsg = error.message;
        throw errMsg;
      }
    });
  }
  onAccountChange(callback) {
    return __async(this, null, function* () {
      var _a, _b;
      try {
        const handleAccountChange = (newAccount) => __async(this, null, function* () {
          if (newAccount == null ? void 0 : newAccount.publicKey) {
            callback(__spreadValues({}, newAccount));
          } else {
            const response = yield this.connect();
            callback(__spreadValues({}, response));
          }
        });
        yield (_b = (_a = this.provider) == null ? void 0 : _a.aptos) == null ? void 0 : _b.onAccountChange(handleAccountChange);
      } catch (error) {
        console.log(error);
        const errMsg = error.message;
        throw errMsg;
      }
    });
  }
  network() {
    return __async(this, null, function* () {
      return {
        name: import_aptos.Network.MAINNET,
        chainId: "1"
      };
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BybitWallet,
  BybitWalletName
});
