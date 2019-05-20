declare const deviceEl: HTMLDivElement, iframeEl: HTMLIFrameElement, controlsEl: HTMLDivElement, viewsEl: HTMLDivElement, inputEls: {
    src: HTMLInputElement;
    width: HTMLInputElement;
    height: HTMLInputElement;
};
declare function wait(ms: number): Promise<{}>;
declare function updateView(view: string): Promise<void>;
declare function updateIframe(): void;
