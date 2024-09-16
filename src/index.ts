import {
    AptosWalletErrorResult,
    PluginProvider,
    WalletReadyState,
  } from "@aptos-labs/wallet-adapter-core";
  import type {
    AccountInfo,
    AdapterPlugin,
    NetworkInfo,
    SignMessagePayload,
    SignMessageResponse,
    WalletName,
  } from "@aptos-labs/wallet-adapter-core";
  import { Types, Network } from "aptos";
  
  interface BybitProvider extends Omit<PluginProvider, "signAndSubmitTransaction"> {
    signTransaction(
      transaction: any,
      options?: any
    ): Promise<Uint8Array | AptosWalletErrorResult>;
    signAndSubmitTransaction: (
      transaction: Types.TransactionPayload,
      options?: any
    ) => Promise<Types.HexEncodedBytes | AptosWalletErrorResult>;
  }
  
  interface BybitWalletInterface {
    aptos?: BybitProvider;
  }
  
  interface BybitWindow extends Window {
    bybitWallet?: BybitWalletInterface;
  }
  
  declare const window: BybitWindow;
  
  export const BybitWalletName = "Bybit Wallet" as WalletName<"Bybit Wallet">;
  
  export class BybitWallet implements AdapterPlugin {
    readonly name = BybitWalletName;
    readonly url = "https://bybit.com/web3/";
    readonly icon =
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHZpZXdCb3g9IjAgMCA4OCA4OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMTguN0MwIDguMzcyMjcgOC4zNzIyOCAwIDE4LjcgMEg2OS4zQzc5LjYyNzcgMCA4OCA4LjM3MjI4IDg4IDE4LjdWNjkuM0M4OCA3OS42Mjc3IDc5LjYyNzcgODggNjkuMyA4OEgxOC43QzguMzcyMjcgODggMCA3OS42Mjc3IDAgNjkuM1YxOC43WiIgZmlsbD0iIzQwNDM0NyIvPgo8cGF0aCBkPSJNNy41NzYxNyAyNi44MDY3QzYuNzg1MTYgMjQuMDc4NyA4LjQ3NzUgMjEuMjUzMSAxMS4yNTU5IDIwLjY2M0w1Ny42MDg3IDEwLjgxNzNDNTkuODA5IDEwLjM1IDYyLjA0NDMgMTEuNDQ0MyA2My4wMjQ3IDEzLjQ2ODlMODMuODQ0MyA1Ni40NjU3TDI1LjE3NzYgODcuNTEwMUw3LjU3NjE3IDI2LjgwNjdaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMzEyXzE3NTM0KSIvPgo8cGF0aCBkPSJNOC4xODI0MiAzMC4xNjE4QzcuMzUwNDkgMjcuMjgzOCA5LjI3OTI1IDI0LjM0MTMgMTIuMjUwMiAyMy45NTU5TDczLjY4NjUgMTUuOTg4MUM3Ni4yMzkxIDE1LjY1NzEgNzguNjExMSAxNy4zNjE4IDc5LjExMTEgMTkuODg2N0w4OC4wMDAzIDY0Ljc3NzFMMjQuNjg5MiA4Ny4yNjY1TDguMTgyNDIgMzAuMTYxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0wIDM0LjIyMjJDMCAyOC44MjIxIDQuMzc3NjYgMjQuNDQ0NSA5Ljc3Nzc4IDI0LjQ0NDVINjguNDQ0NEM3OS4yNDQ3IDI0LjQ0NDUgODggMzMuMTk5OCA4OCA0NFY2OC40NDQ1Qzg4IDc5LjI0NDcgNzkuMjQ0NyA4OCA2OC40NDQ0IDg4SDE5LjU1NTZDOC43NTUzMiA4OCAwIDc5LjI0NDcgMCA2OC40NDQ1VjM0LjIyMjJaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNTguMjIwMSA2MS4xOTU5VjQyLjg3NTVINjEuNzkzN1Y2MS4xOTU5SDU4LjIyMDFaIiBmaWxsPSIjRjdBNjAwIi8+CjxwYXRoIGQ9Ik0xNy40Mzk1IDY2LjY2MzdIOS43Nzc5NVY0OC4zNDM0SDE3LjEzMTNDMjAuNzA0OSA0OC4zNDM0IDIyLjc4NzQgNTAuMzUwNSAyMi43ODc0IDUzLjQ4OTNDMjIuNzg3NCA1NS41MjE1IDIxLjQ1MDQgNTYuODM0NSAyMC41MjU3IDU3LjI3MjFDMjEuNjMxNSA1Ny43ODY5IDIzLjA0NTYgNTguOTQzOCAyMy4wNDU2IDYxLjM4ODVDMjMuMDQ1NiA2NC44MTA4IDIwLjcwNDkgNjYuNjYzNyAxNy40Mzk1IDY2LjY2MzdaTTE2Ljg0ODEgNTEuNTM0M0gxMy4zNTE2VjU1Ljc1NDhIMTYuODQ4MUMxOC4zNjQyIDU1Ljc1NDggMTkuMjEzOCA1NC45MDY0IDE5LjIxMzggNTMuNjQ1NUMxOS4yMTM4IDUyLjM4MjYgMTguMzY2MiA1MS41MzQzIDE2Ljg0ODEgNTEuNTM0M1pNMTcuMDc5MyA1OC45NzA4SDEzLjM1MTZWNjMuNDcyOEgxNy4wNzkzQzE4LjY5OTQgNjMuNDcyOCAxOS40NyA2Mi40NDMyIDE5LjQ3IDYxLjIwOTJDMTkuNDcyIDU5Ljk3MzMgMTguNjk5NCA1OC45NzA4IDE3LjA3OTMgNTguOTcwOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zMi44OTI1IDU5LjE1MDFWNjYuNjYzN0gyOS4zNDM5VjU5LjE1MDFMMjMuODQxOSA0OC4zNDM0SDI3LjcyMzhMMzEuMTQzMiA1NS43Mjc4TDM0LjUxMDcgNDguMzQzNEgzOC4zOTI2TDMyLjg5MjUgNTkuMTUwMVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00OC41NjMzIDY2LjY2MzdINDAuOTAxN1Y0OC4zNDM0SDQ4LjI1NTFDNTEuODI4NyA0OC4zNDM0IDUzLjkxMTIgNTAuMzUwNSA1My45MTEyIDUzLjQ4OTNDNTMuOTExMiA1NS41MjE1IDUyLjU3NDIgNTYuODM0NSA1MS42NDk1IDU3LjI3MjFDNTIuNzU1MyA1Ny43ODY5IDU0LjE2OTMgNTguOTQzOCA1NC4xNjkzIDYxLjM4ODVDNTQuMTY3NCA2NC44MTA4IDUxLjgyNjggNjYuNjYzNyA0OC41NjMzIDY2LjY2MzdaTTQ3Ljk3MTkgNTEuNTM0M0g0NC40NzUzVjU1Ljc1NDhINDcuOTcxOUM0OS40ODggNTUuNzU0OCA1MC4zMzc2IDU0LjkwNjQgNTAuMzM3NiA1My42NDU1QzUwLjMzNTcgNTIuMzgyNiA0OS40ODggNTEuNTM0MyA0Ny45NzE5IDUxLjUzNDNaTTQ4LjIwMzEgNTguOTcwOEg0NC40NzUzVjYzLjQ3MjhINDguMjAzMUM0OS44MjMyIDYzLjQ3MjggNTAuNTkzOCA2Mi40NDMyIDUwLjU5MzggNjEuMjA5MkM1MC41OTM4IDU5Ljk3MzQgNDkuODIxMyA1OC45NzA4IDQ4LjIwMzEgNTguOTcwOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik03My40MzkgNTEuNTM0M1Y2Ni42NjM3SDY5Ljg2NTRWNTEuNTM0M0g2NS4wODM5VjQ4LjM0MzRINzguMjIyNFY1MS41MzQzSDczLjQzOVoiIGZpbGw9IndoaXRlIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMzEyXzE3NTM0IiB4MT0iNy4zMzMwOCIgeTE9IjI1LjU5NCIgeDI9Ijg0LjYzODEiIHkyPSIyMS43MjE2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkQ3NDgiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjdBNjAwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==';
    provider: BybitWalletInterface | undefined =
      typeof window !== "undefined" ? window?.bybitWallet : undefined;
  
    deeplinkProvider(data?: { url?: string }): string {
      const target = data?.url || window?.location?.href;
  
      return `https://app.bybit.com/inapp?by_dp=${encodeURIComponent('bybitapp://open/route?targetUrl=by%3A%2F%2Fweb3%2Ftab%2Findex%3Findex%3D0')}&by_web_link=${encodeURIComponent(target)}`
    }
  
    readyState: WalletReadyState =
      typeof window !== "undefined"
        ? window?.bybitWallet
          ? WalletReadyState.Installed
          : WalletReadyState.NotDetected
        : WalletReadyState.Unsupported;
  
    async connect(): Promise<AccountInfo> {
      try {
        const addressInfo = await this.provider?.aptos?.connect();
        if (!addressInfo) throw `${BybitWalletName} Address Info Error`;
        return addressInfo;
      } catch (error: any) {
        throw error;
      }
    }
  
    async account(): Promise<AccountInfo> {
      const response = await this.provider?.aptos?.account();
      if (!response) throw `${BybitWalletName} Account Error`;
      return response;
    }
  
    async disconnect(): Promise<void> {
      try {
        await this.provider?.aptos?.disconnect();
      } catch (error: any) {
        throw error;
      }
    }
  
    async signAndSubmitTransaction(
      transaction: Types.TransactionPayload,
      options?: any
    ): Promise<{ hash: Types.HexEncodedBytes }> {
      try {
        const response = await this.provider?.aptos?.signAndSubmitTransaction(
          transaction,
          options
        );
  
        if (!response) {
          throw new Error("No response") as AptosWalletErrorResult;
        }
        return response as any as { hash: Types.HexEncodedBytes };
      } catch (error: any) {
        // TODO: Message is improperly set from upstream, please convert it properly into a string.  Right now it shows the below:
        // `{"code":-32603,"message":"[object Object]","data":{"originalError":{}}}`
        // The `[object Object]` should be a string representation of the error, which should have an error message from the VM or elsewhere.
        // The JSON .stringify is a temporary fix to get some message to show up.
        throw new Error(`${JSON.stringify(error)}`);
      }
    }
  
    async signTransaction(
      transaction: Types.TransactionPayload,
      options?: any
    ): Promise<Uint8Array | AptosWalletErrorResult> {
      try {
        const response = await this.provider?.aptos?.signTransaction(
          transaction,
          options
        );
        if (!response) {
          throw new Error("Failed to sign transaction") as AptosWalletErrorResult;
        }
        return response;
      } catch (error: any) {
        throw error;
      }
    }
  
    async signMessage(message: SignMessagePayload): Promise<SignMessageResponse> {
      try {
        if (typeof message !== "object" || !message.nonce) {
          `${BybitWalletName} Invalid signMessage Payload`;
        }
        const response = await this.provider?.aptos?.signMessage(message);
        if (response) {
          return response;
        } else {
          throw `${BybitWalletName} Sign Message failed`;
        }
      } catch (error: any) {
        const errMsg = error.message;
        throw errMsg;
      }
    }
  
    async onNetworkChange(callback: any): Promise<void> {
      try {
        const handleNetworkChange = async (
          networkInfo: NetworkInfo
        ): Promise<void> => {
          // This doesn't currently apply, since non-mainnet networks are not supported on Bybit.
          callback({
            name: networkInfo?.name,
            chainId: networkInfo?.chainId,
            api: undefined,
          });
        };
        await this.provider?.aptos?.onNetworkChange(handleNetworkChange);
      } catch (error: any) {
        const errMsg = error.message;
        throw errMsg;
      }
    }
  
    async onAccountChange(callback: any): Promise<void> {
      try {
        const handleAccountChange = async (
          newAccount: AccountInfo
        ): Promise<void> => {
          if (newAccount?.publicKey) {
            callback({
              ...newAccount,
            });
          } else {
            const response = await this.connect();
            callback({
              ...response,
            });
          }
        };
        await this.provider?.aptos?.onAccountChange(handleAccountChange);
      } catch (error: any) {
        console.log(error);
        const errMsg = error.message;
        throw errMsg;
      }
    }
  
    async network(): Promise<NetworkInfo> {
      return {
        name: Network.MAINNET,
        chainId: "1",
      };
    }
  }