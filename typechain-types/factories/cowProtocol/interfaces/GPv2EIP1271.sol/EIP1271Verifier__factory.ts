/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  EIP1271Verifier,
  EIP1271VerifierInterface,
} from "../../../../cowProtocol/interfaces/GPv2EIP1271.sol/EIP1271Verifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class EIP1271Verifier__factory {
  static readonly abi = _abi;
  static createInterface(): EIP1271VerifierInterface {
    return new utils.Interface(_abi) as EIP1271VerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EIP1271Verifier {
    return new Contract(address, _abi, signerOrProvider) as EIP1271Verifier;
  }
}
