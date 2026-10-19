import React, { useRef } from "react";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";

const QrCodeModal = ({ url, onClose }) => {
  const canvasRef = useRef(null);
  const svgRef = useRef(null);

  const downloadPng = () => {
    const canvas = canvasRef.current?.querySelector("canvas");
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "snipurl-qr.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const downloadSvg = () => {
    const svg = svgRef.current?.querySelector("svg");
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });

    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = "snipurl-qr.svg";
    link.click();

    URL.revokeObjectURL(objectUrl);
  };

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch (error) {
      console.error("Unable to copy URL:", error);
    }
  };

  if (!url) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="qr-modal-title"
        className="w-full max-w-md rounded-2xl border
                   border-slate-700 bg-slate-900 p-6 text-white
                   shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 id="qr-modal-title" className="text-xl font-bold">
            Your SnipURL QR Code
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close QR code modal"
            className="rounded-lg px-3 py-1 text-2xl
                       text-slate-400 hover:bg-slate-800"
          >
            &times;
          </button>
        </div>

        <div className="mb-5 rounded-xl bg-white p-4">
          <div ref={canvasRef} className="flex justify-center">
            <QRCodeCanvas
              value={url}
              size={240}
              level="H"
              marginSize={4}
              title="SnipURL QR Code"
            />
          </div>
        </div>

        {/* Hidden SVG renderer for SVG downloads */}
        <div
          ref={svgRef}
          className="absolute h-0 w-0 overflow-hidden"
          aria-hidden="true"
        >
          <QRCodeSVG value={url} size={240} level="H" marginSize={4} />
        </div>

        <p className="mb-2 text-sm text-slate-400">
          Scan to open your short link
        </p>

        <p className="mb-5 break-all rounded-lg bg-slate-800 p-3 text-sm">
          {url}
        </p>

        <button
          type="button"
          onClick={copyUrl}
          className="mb-3 w-full rounded-lg border
                     border-slate-700 py-2.5 font-semibold
                     hover:bg-slate-800"
        >
          Copy Short URL
        </button>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={downloadPng}
            className="rounded-lg bg-blue-600 py-2.5
                       font-semibold hover:bg-blue-500"
          >
            Download PNG
          </button>

          <button
            type="button"
            onClick={downloadSvg}
            className="rounded-lg bg-slate-700 py-2.5
                       font-semibold hover:bg-slate-600"
          >
            Download SVG
          </button>
        </div>
      </div>
    </div>
  );
};

export default QrCodeModal;
