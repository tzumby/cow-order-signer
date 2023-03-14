/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface GPv2SigningInterface extends utils.Interface {
  functions: {
    "domainSeparator()": FunctionFragment;
    "preSignature(bytes)": FunctionFragment;
    "setPreSignature(bytes,bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "domainSeparator"
      | "preSignature"
      | "setPreSignature"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "domainSeparator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "preSignature",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPreSignature",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<boolean>]
  ): string;

  decodeFunctionResult(
    functionFragment: "domainSeparator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "preSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPreSignature",
    data: BytesLike
  ): Result;

  events: {
    "PreSignature(address,bytes,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PreSignature"): EventFragment;
}

export interface PreSignatureEventObject {
  owner: string;
  orderUid: string;
  signed: boolean;
}
export type PreSignatureEvent = TypedEvent<
  [string, string, boolean],
  PreSignatureEventObject
>;

export type PreSignatureEventFilter = TypedEventFilter<PreSignatureEvent>;

export interface GPv2Signing extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GPv2SigningInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    domainSeparator(overrides?: CallOverrides): Promise<[string]>;

    preSignature(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setPreSignature(
      orderUid: PromiseOrValue<BytesLike>,
      signed: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  domainSeparator(overrides?: CallOverrides): Promise<string>;

  preSignature(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setPreSignature(
    orderUid: PromiseOrValue<BytesLike>,
    signed: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    domainSeparator(overrides?: CallOverrides): Promise<string>;

    preSignature(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setPreSignature(
      orderUid: PromiseOrValue<BytesLike>,
      signed: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "PreSignature(address,bytes,bool)"(
      owner?: PromiseOrValue<string> | null,
      orderUid?: null,
      signed?: null
    ): PreSignatureEventFilter;
    PreSignature(
      owner?: PromiseOrValue<string> | null,
      orderUid?: null,
      signed?: null
    ): PreSignatureEventFilter;
  };

  estimateGas: {
    domainSeparator(overrides?: CallOverrides): Promise<BigNumber>;

    preSignature(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setPreSignature(
      orderUid: PromiseOrValue<BytesLike>,
      signed: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    domainSeparator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    preSignature(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setPreSignature(
      orderUid: PromiseOrValue<BytesLike>,
      signed: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
