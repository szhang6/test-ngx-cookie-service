export class MaskLayerAction {
  static readonly type = '[MaskLayer] Add item';
  constructor(public payload: string) { }
}

export class SetEventMessage {
    static readonly type = '[MaskLayer] SEND CLICK MESSAGE';
    constructor(public eventMessage: string) {}
}
