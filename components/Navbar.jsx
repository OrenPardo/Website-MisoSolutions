"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// cubic-bezier(0.52, 0, 0.07, 1) easing via Newton-Raphson
function cubicBezierEase(x) {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  const x1 = 0.52, y1 = 0, x2 = 0.07, y2 = 1;
  let t = x;
  for (let i = 0; i < 8; i++) {
    const cx = ((1 - 3 * x2 + 3 * x1) * t * t * t + (3 * x2 - 6 * x1) * t * t + 3 * x1 * t) - x;
    if (Math.abs(cx) < 1e-7) break;
    const dx = 3 * (1 - 3 * x2 + 3 * x1) * t * t + 2 * (3 * x2 - 6 * x1) * t + 3 * x1;
    if (Math.abs(dx) < 1e-7) break;
    t -= cx / dx;
  }
  return (1 - 3 * y2 + 3 * y1) * t * t * t + (3 * y2 - 6 * y1) * t * t + 3 * y1 * t;
}

function AdalineLogo({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 132.922 22.5297"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9175 0L0 19.3923V22.1649H2.78381L16.6997 11.0809V0H13.9175ZM16.7013 18.8371H13.3591V22.1617H16.6981L16.7013 18.8371ZM61.7287 1.06713V9.24738H61.6711C60.9063 8.04906 59.2296 7.19472 57.3562 7.19472C53.4956 7.19472 50.7982 10.2441 50.7982 14.8902C50.7982 19.0515 53.2972 22.5297 57.4138 22.5297C59.06 22.5297 60.9623 21.7025 61.7287 20.2498H61.7847L61.9271 22.1585H64.0853V1.06713H61.7287ZM57.6105 20.3618C54.8283 20.3618 53.2668 17.9668 53.2668 14.8598C53.2668 11.6968 54.8283 9.30178 57.6105 9.30178C60.4216 9.30178 61.7543 11.7256 61.7543 14.8598C61.7543 17.9396 60.3352 20.3618 57.6105 20.3618ZM79.0427 20.0483V12.3816C79.0427 11.556 78.9019 10.7577 78.5899 10.0729C77.9356 8.50503 76.2045 7.19312 73.3935 7.19312C70.3281 7.19312 67.6595 8.87621 67.5459 11.812H69.9025C70.0449 10.0169 71.6624 9.18979 73.3935 9.18979C75.3534 9.18979 76.6301 10.1593 76.6301 12.1544V13.2103L72.1168 13.5223C68.285 13.7783 66.8931 16.0309 66.8931 18.226C66.8931 20.2498 68.4546 22.5297 71.9472 22.5297C74.1038 22.5297 75.8349 21.589 76.7149 20.1347H76.7725L77.0284 22.1585H80.577V20.0499L79.0427 20.0483ZM76.6301 16.0005C76.6301 18.538 74.899 20.4194 72.3152 20.4194C70.2433 20.4194 69.3906 19.2515 69.3906 17.9956C69.3906 16.2005 70.9808 15.487 72.5711 15.3734L76.6301 15.0886V16.0005ZM111.692 7.19472C109.932 7.19472 107.83 8.10666 107.121 9.78815H107.063L106.894 7.56429H104.766V22.1585H107.206V15.375C107.206 14.1495 107.262 12.7239 107.745 11.6408C108.398 10.3289 109.647 9.41697 111.095 9.41697C113.367 9.41857 114.471 10.8425 114.471 13.0967V22.1601H116.885V12.7527C116.885 9.27458 114.925 7.19472 111.689 7.19472M132.865 15.5462C132.865 15.5174 132.922 15.1462 132.922 14.6342C132.922 10.7001 130.708 7.19472 126.336 7.19472C121.992 7.19472 119.523 10.8713 119.523 14.919C119.523 18.5956 121.709 22.5297 126.28 22.5297C129.572 22.5297 132.098 20.5618 132.553 17.77H130.111C129.628 19.5363 128.294 20.3634 126.364 20.3634C123.611 20.3634 122.021 17.9412 122.021 15.6886V15.5462H132.865ZM126.31 9.27458C128.979 9.27458 130.257 11.3272 130.313 13.4935H122.109C122.166 11.356 123.841 9.27458 126.31 9.27458ZM88.3285 20.0499V1.06553H83.0472V3.08939H85.831V20.0499H82.8201V22.1585H91.3939V20.0499H88.3285ZM99.2286 20.0499V7.56589H93.9777V9.67455H96.7295V20.0499H93.6081V22.1585H102.38V20.0499H99.2286ZM102.323 1.06553H99.2286V4.11652H102.323V1.06553ZM41.09 14.1495L41.2612 13.8935H45.6033V4.99967L33.4538 22.2177H30.3884V22.1601L45.4914 1.06713H48.272V22.2177H45.6033V15.9733H41.0916L41.09 14.1495Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronDown({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 9.333 5.333"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.667 0.667L4.667 4.667L8.667 0.667"
        stroke="currentColor"
        strokeWidth="1.333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 8.484 10.335"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 2.098C0 1.143 0 0.666 0.2 0.399C0.286 0.285 0.395 0.19 0.521 0.121C0.647 0.053 0.786 0.012 0.929 0.001C1.261-0.022 1.662 0.236 2.465 0.752L7.24 3.821C7.937 4.269 8.285 4.493 8.405 4.778C8.457 4.901 8.484 5.034 8.484 5.167C8.484 5.301 8.457 5.434 8.405 5.557C8.285 5.841 7.937 6.065 7.24 6.513L2.465 9.583C1.662 10.099 1.261 10.357 0.929 10.334C0.786 10.323 0.647 10.282 0.521 10.213C0.395 10.144 0.286 10.049 0.2 9.934C0 9.668 0 9.191 0 8.237V2.098Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IterateIllustration({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 194.5 194.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Group 1: Top-left, 97.25×97.25 at (38.9, 0) */}
      <svg x="38.9" y="0" width="97.25" height="97.25" viewBox="0 0 97.889 96.404" overflow="visible">
        <path d="M48.9443 1.07797L80.1982 12.4535L96.8269 41.2561L91.0531 74.0112L65.5751 95.3908H32.3114L6.83546 74.0112L1.06158 41.2561L17.6904 12.4535L48.9443 1.07797Z" stroke="#0A1D08" strokeWidth="2.026" />
      </svg>
      <svg x="38.9" y="0" width="97.25" height="97.25" viewBox="0 0 96.994 94.562" overflow="visible">
        <path d="M48.4967 1.12425L86.5097 19.4298L95.8974 60.5625L69.5918 93.5493H27.4016L1.09606 60.5645L10.4838 19.4298L48.4967 1.12425Z" stroke="#0A1D08" strokeWidth="2.026" />
      </svg>
      <svg x="79.34" y="40.44" width="16.371" height="16.371" viewBox="0 0 16.371 16.371" overflow="visible">
        <path d="M0 8.186H16.371M8.186 0V16.371" stroke="#0A1D08" strokeWidth="2.046" />
      </svg>

      {/* Group 2: Top-right small, 38.89×38.89 at (145.9, 9.7) */}
      <svg x="145.9" y="9.7" width="38.89" height="38.89" viewBox="0 0 39.131 38.538" overflow="visible">
        <path d="M19.5656 0.430922L32.0594 4.97833L38.7068 16.4922L36.3987 29.5862L26.2138 38.1327H12.9166L2.73249 29.5862L0.424369 16.4922L7.07176 4.97833L19.5656 0.430922Z" stroke="#0A1D08" strokeWidth="0.81" />
      </svg>
      <svg x="145.9" y="9.7" width="38.89" height="38.89" viewBox="0 0 38.776 37.804" overflow="visible">
        <path d="M19.3881 0.449456L34.585 7.76768L38.3381 24.2118L27.8216 37.3994H10.9547L0.438187 24.2126L4.19125 7.76768L19.3881 0.449456Z" stroke="#0A1D08" strokeWidth="0.81" />
      </svg>
      <svg x="161.17" y="24.97" width="8.346" height="8.346" viewBox="0 0 8.346 8.346" overflow="visible">
        <path d="M0 4.173H8.346M4.173 0V8.346" stroke="#0A1D08" strokeWidth="1.043" />
      </svg>

      {/* Group 3: Middle-left, 68.06×68.06 at (0, 68.1) */}
      <svg x="0" y="68.1" width="68.06" height="68.06" viewBox="0 0 68.510 67.471" overflow="visible">
        <path d="M34.2549 0.754447L56.1288 8.71593L67.7669 28.8742L63.7259 51.7987L45.8944 66.7617H22.614L4.78398 51.7987L0.742974 28.8742L12.3811 8.71593L34.2549 0.754447Z" stroke="#0A1D08" strokeWidth="1.418" />
      </svg>
      <svg x="0" y="68.1" width="68.06" height="68.06" viewBox="0 0 67.887 66.185" overflow="visible">
        <path d="M33.9434 0.786877L60.5491 13.5991L67.1197 42.3884L48.7081 65.4762H19.1787L0.767148 42.3898L7.33775 13.5991L33.9434 0.786877Z" stroke="#0A1D08" strokeWidth="1.418" />
      </svg>
      <svg x="27.85" y="95.95" width="12.356" height="12.356" viewBox="0 0 12.356 12.356" overflow="visible">
        <path d="M0 6.178H12.356M6.178 0V12.356" stroke="#0A1D08" strokeWidth="1.544" />
      </svg>

      {/* Group 4: Bottom-right large, 126.42×126.42 at (48.6, 68.1) */}
      <svg x="48.6" y="68.1" width="126.42" height="126.42" viewBox="0 0 127.251 125.320" overflow="visible">
        <path d="M63.6253 1.40131L104.254 16.189L125.871 53.631L118.365 96.2112L85.2446 124.004H42.0034L8.88578 96.2112L1.38 53.631L22.9966 16.189L63.6253 1.40131Z" stroke="#0A1D08" strokeWidth="2.634" />
      </svg>
      <svg x="48.6" y="68.1" width="126.42" height="126.42" viewBox="0 0 126.094 122.933" overflow="visible">
        <path d="M63.0469 1.46155L112.465 25.2591L124.669 78.7326L90.471 121.616H35.6228L1.42491 78.7352L13.6292 25.2591L63.0469 1.46155Z" stroke="#0A1D08" strokeWidth="2.634" />
      </svg>
      <svg x="101.62" y="121.12" width="20.381" height="20.381" viewBox="0 0 20.381 20.381" overflow="visible">
        <path d="M0 10.190H20.381M10.190 0V20.381" stroke="#0A1D08" strokeWidth="2.548" />
      </svg>
    </svg>
  );
}

function EvaluateIllustration({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 194.5 194.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Group 1: Bottom-Left, 97.25×97.25 at (0, 71.95), rotation -66.99deg */}
      <svg x="0" y="71.95" width="97.25" height="97.25" viewBox="0 0 99.271 99.271" overflow="visible">
        <path
          d="M49.6355 98.258C76.4889 98.258 98.258 76.4889 98.258 49.6355C98.258 22.782 76.4889 1.013 49.6355 1.013C22.782 1.013 1.013 22.782 1.013 49.6355C1.013 76.4889 22.782 98.258 49.6355 98.258Z"
          stroke="#0A1D08" strokeWidth="2.026" strokeDasharray="10.13 6.08"
          transform="rotate(-66.99 49.636 49.636)"
        />
      </svg>
      <svg x="40.44" y="112.39" width="16.371" height="16.371" viewBox="0 0 16.371 16.371" overflow="visible">
        <path d="M0 8.186H16.371M8.186 0V16.371" stroke="#0A1D08" strokeWidth="2.046" />
      </svg>

      {/* Group 2: Top-Center, 106.97×106.97 at (38.89, 0), rotation +66.99deg */}
      <svg x="38.89" y="0" width="106.97" height="106.97" viewBox="0 0 109.201 109.201" overflow="visible">
        <path
          d="M54.6005 108.087C84.1402 108.087 108.087 84.1402 108.087 54.6005C108.087 25.061 84.1402 1.114 54.6005 1.114C25.061 1.114 1.114 25.061 1.114 54.6005C1.114 84.1402 25.061 108.087 54.6005 108.087Z"
          stroke="#0A1D08" strokeWidth="2.229" strokeDasharray="11.14 6.69"
          transform="rotate(66.99 54.6 54.6)"
        />
      </svg>
      <svg x="83.52" y="44.63" width="17.707" height="17.707" viewBox="0 0 17.707 17.707" overflow="visible">
        <path d="M0 8.854H17.707M8.854 0V17.707" stroke="#0A1D08" strokeWidth="2.213" />
      </svg>

      {/* Group 3: Right-Middle, 38.89×38.89 at (145.88, 68.06), rotation -66.99deg */}
      <svg x="145.88" y="68.06" width="38.89" height="38.89" viewBox="0 0 39.682 39.682" overflow="visible">
        <path
          d="M19.841 39.277C30.576 39.277 39.277 30.576 39.277 19.841C39.277 9.107 30.576 0.405 19.841 0.405C9.107 0.405 0.405 9.107 0.405 19.841C0.405 30.576 9.107 39.277 19.841 39.277Z"
          stroke="#0A1D08" strokeWidth="0.81" strokeDasharray="4.05 2.43"
          transform="rotate(-66.99 19.841 19.841)"
        />
      </svg>
      <svg x="161.15" y="83.33" width="8.346" height="8.346" viewBox="0 0 8.346 8.346" overflow="visible">
        <path d="M0 4.173H8.346M4.173 0V8.346" stroke="#0A1D08" strokeWidth="1.043" />
      </svg>

      {/* Group 4: Bottom-Center, 77.80×77.80 at (68.06, 116.69), rotation +66.99deg */}
      <svg x="68.06" y="116.69" width="77.80" height="77.80" viewBox="0 0 79.395 79.395" overflow="visible">
        <path
          d="M39.698 78.585C61.175 78.585 78.585 61.175 78.585 39.698C78.585 18.221 61.175 0.81 39.698 0.81C18.221 0.81 0.81 18.221 0.81 39.698C0.81 61.175 18.221 78.585 39.698 78.585Z"
          stroke="#0A1D08" strokeWidth="1.62" strokeDasharray="8.1 4.86"
          transform="rotate(66.99 39.698 39.698)"
        />
      </svg>
      <svg x="100.11" y="148.74" width="13.693" height="13.693" viewBox="0 0 13.693 13.693" overflow="visible">
        <path d="M0 6.847H13.693M6.847 0V13.693" stroke="#0A1D08" strokeWidth="1.712" />
      </svg>
    </svg>
  );
}

function DeployIllustration({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 194.5 194.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Group 1: Bottom-Left Large, 116.69×116.69 at (0, 77.8), rotate 94.13deg */}
      <svg x="0" y="77.8" width="116.69" height="116.69" viewBox="0 0 119.101 119.067" overflow="visible">
        <path
          d="M56.641 1.272C37.303 2.22 20.442 12.584 10.544 27.877L29.241 42.033L7.625 32.918C3.399 41.153 1.201 50.278 1.215 59.534C1.215 69.123 3.529 78.169 7.627 86.149L29.241 77.034L10.547 91.193C20.444 106.484 37.308 116.848 56.641 117.798L59.55 94.535L62.462 117.796C81.796 116.843 98.654 106.479 108.554 91.188L89.863 77.034L111.471 86.147C115.699 77.913 117.898 68.789 117.885 59.534C117.885 49.947 115.574 40.901 111.476 32.923L89.865 42.033L108.557 27.877C98.664 12.586 81.803 2.22 62.467 1.269L59.555 24.535L56.641 1.272Z"
          stroke="#0A1D08" strokeWidth="2.431"
          transform="rotate(94.13 59.551 59.534)"
        />
      </svg>
      <svg x="48.82" y="126.62" width="19.043" height="19.043" viewBox="0 0 19.043 19.043" overflow="visible">
        <path d="M0 9.522H19.043M9.522 0V19.043" stroke="#0A1D08" strokeWidth="2.380" />
      </svg>

      {/* Group 2: Top-Right Small, 48.63×48.63 at (87.52, 0), rotate 94.13deg */}
      <svg x="87.52" y="0" width="48.63" height="48.63" viewBox="0 0 119.101 119.067" overflow="visible">
        <path
          d="M56.641 1.272C37.303 2.22 20.442 12.584 10.544 27.877L29.241 42.033L7.625 32.918C3.399 41.153 1.201 50.278 1.215 59.534C1.215 69.123 3.529 78.169 7.627 86.149L29.241 77.034L10.547 91.193C20.444 106.484 37.308 116.848 56.641 117.798L59.55 94.535L62.462 117.796C81.796 116.843 98.654 106.479 108.554 91.188L89.863 77.034L111.471 86.147C115.699 77.913 117.898 68.789 117.885 59.534C117.885 49.947 115.574 40.901 111.476 32.923L89.865 42.033L108.557 27.877C98.664 12.586 81.803 2.22 62.467 1.269L59.555 24.535L56.641 1.272Z"
          stroke="#0A1D08" strokeWidth="2.431"
          transform="rotate(94.13 59.551 59.534)"
        />
      </svg>
      <svg x="107.0" y="19.47" width="9.684" height="9.684" viewBox="0 0 9.684 9.684" overflow="visible">
        <path d="M0 4.842H9.684M4.842 0V9.684" stroke="#0A1D08" strokeWidth="1.210" />
      </svg>

      {/* Group 3: Middle-Right, 77.8×77.8 at (116.69, 48.63), rotate -94.13deg */}
      <svg x="116.69" y="48.63" width="77.8" height="77.8" viewBox="0 0 79.395 79.373" overflow="visible">
        <path
          d="M37.758 0.848C24.867 1.48 13.627 8.389 7.029 18.584L19.492 28.02L5.083 21.944C2.266 27.433 0.801 33.517 0.81 39.687C0.81 46.079 2.353 52.11 5.085 57.429L19.492 51.353L7.031 60.791C13.629 70.985 24.87 77.894 37.758 78.527L39.698 63.019L41.639 78.526C54.527 77.89 65.765 70.981 72.365 60.788L59.905 51.353L74.309 57.427C77.127 51.939 78.594 45.856 78.585 39.687C78.585 33.296 77.044 27.265 74.312 21.947L59.906 28.02L72.366 18.584C65.772 8.39 54.532 1.48 41.642 0.846L39.701 16.356L37.758 0.848Z"
          stroke="#0A1D08" strokeWidth="1.620"
          transform="rotate(-94.13 39.698 39.687)"
        />
      </svg>
      <svg x="148.74" y="80.68" width="13.693" height="13.693" viewBox="0 0 13.693 13.693" overflow="visible">
        <path d="M0 6.847H13.693M6.847 0V13.693" stroke="#0A1D08" strokeWidth="1.712" />
      </svg>

      {/* Group 4: Bottom-Right Small, 38.89×38.89 at (126.42, 145.88), rotate -94.13deg */}
      <svg x="126.42" y="145.88" width="38.89" height="38.89" viewBox="0 0 79.395 79.373" overflow="visible">
        <path
          d="M37.758 0.848C24.867 1.48 13.627 8.389 7.029 18.584L19.492 28.02L5.083 21.944C2.266 27.433 0.801 33.517 0.81 39.687C0.81 46.079 2.353 52.11 5.085 57.429L19.492 51.353L7.031 60.791C13.629 70.985 24.87 77.894 37.758 78.527L39.698 63.019L41.639 78.526C54.527 77.89 65.765 70.981 72.365 60.788L59.905 51.353L74.309 57.427C77.127 51.939 78.594 45.856 78.585 39.687C78.585 33.296 77.044 27.265 74.312 21.947L59.906 28.02L72.366 18.584C65.772 8.39 54.532 1.48 41.642 0.846L39.701 16.356L37.758 0.848Z"
          stroke="#0A1D08" strokeWidth="1.620"
          transform="rotate(-94.13 39.698 39.687)"
        />
      </svg>
      <svg x="141.69" y="161.15" width="8.346" height="8.346" viewBox="0 0 8.346 8.346" overflow="visible">
        <path d="M0 4.173H8.346M4.173 0V8.346" stroke="#0A1D08" strokeWidth="1.043" />
      </svg>
    </svg>
  );
}

function MonitorIllustration({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 194.5 194.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Group 1: Top-Left Large, 126.42×126.42 at (0, 0) */}
      <svg x="0" y="0" width="126.42" height="126.42" viewBox="0 0 107.981 107.981" overflow="visible">
        <circle cx="53.99" cy="53.99" r="52.674" stroke="#0A1D08" strokeWidth="2.634" />
      </svg>
      <svg x="0" y="0" width="126.42" height="126.42" viewBox="0 0 129.05 129.05" overflow="visible">
        <circle cx="64.525" cy="64.525" r="63.208" stroke="#0A1D08" strokeWidth="2.634" strokeDasharray="13.17 7.9"
          transform="rotate(141.37 64.525 64.525)"
        />
      </svg>
      <svg x="53.02" y="53.02" width="20.381" height="20.381" viewBox="0 0 20.381 20.381" overflow="visible">
        <path d="M0 10.190H20.381M10.190 0V20.381" stroke="#0A1D08" strokeWidth="2.548" />
      </svg>

      {/* Group 2: Top-Right Small, 48.63×48.63 at (136.14, 0) */}
      <svg x="136.14" y="0" width="48.63" height="48.63" viewBox="0 0 41.519 41.519" overflow="visible">
        <circle cx="20.76" cy="20.76" r="20.253" stroke="#0A1D08" strokeWidth="1.013" />
      </svg>
      <svg x="136.14" y="0" width="48.63" height="48.63" viewBox="0 0 49.621 49.621" overflow="visible">
        <circle cx="24.81" cy="24.81" r="24.304" stroke="#0A1D08" strokeWidth="1.013" strokeDasharray="5.06 3.04"
          transform="rotate(-141.37 24.81 24.81)"
        />
      </svg>
      <svg x="155.61" y="19.47" width="9.684" height="9.684" viewBox="0 0 9.684 9.684" overflow="visible">
        <path d="M0 4.842H9.684M4.842 0V9.684" stroke="#0A1D08" strokeWidth="1.210" />
      </svg>

      {/* Group 3: Bottom-Left Medium, 54.45×54.45 at (19.44, 140.03) */}
      <svg x="19.44" y="140.03" width="54.45" height="54.45" viewBox="0 0 46.497 46.497" overflow="visible">
        <circle cx="23.249" cy="23.249" r="22.682" stroke="#0A1D08" strokeWidth="1.134" />
      </svg>
      <svg x="19.44" y="140.03" width="54.45" height="54.45" viewBox="0 0 55.569 55.569" overflow="visible">
        <circle cx="27.785" cy="27.785" r="27.218" stroke="#0A1D08" strokeWidth="1.134" strokeDasharray="5.67 3.4"
          transform="rotate(-141.37 27.785 27.785)"
        />
      </svg>
      <svg x="41.42" y="162.01" width="10.486" height="10.486" viewBox="0 0 10.486 10.486" overflow="visible">
        <path d="M0 5.243H10.486M5.243 0V10.486" stroke="#0A1D08" strokeWidth="1.311" />
      </svg>

      {/* Group 4: Bottom-Right, 87.52×87.52 at (106.97, 106.97) */}
      <svg x="106.97" y="106.97" width="87.52" height="87.52" viewBox="0 0 74.743 74.743" overflow="visible">
        <circle cx="37.372" cy="37.372" r="36.461" stroke="#0A1D08" strokeWidth="1.823" />
      </svg>
      <svg x="106.97" y="106.97" width="87.52" height="87.52" viewBox="0 0 89.327 89.327" overflow="visible">
        <circle cx="44.664" cy="44.664" r="43.753" stroke="#0A1D08" strokeWidth="1.823" strokeDasharray="9.11 5.47"
          transform="rotate(-141.37 44.664 44.664)"
        />
      </svg>
      <svg x="143.21" y="143.21" width="15.033" height="15.033" viewBox="0 0 15.033 15.033" overflow="visible">
        <path d="M0 7.517H15.033M7.517 0V15.033" stroke="#0A1D08" strokeWidth="1.879" />
      </svg>
    </svg>
  );
}

function ExternalLinkIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 7.583v3.5a1.167 1.167 0 0 1-1.167 1.167H2.917a1.167 1.167 0 0 1-1.167-1.167V4.667A1.167 1.167 0 0 1 2.917 3.5h3.5M8.75 1.75h3.5v3.5M5.833 8.167 12.25 1.75"
        stroke="currentColor"
        strokeWidth="1.167"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const menuColumns = [
  {
    number: "1",
    label: "Iterate",
    description: "Sketch, test and refine",
    href: "/editor",
    illustration: null,
    IllustrationComponent: IterateIllustration,
    opacity: 0.99,
    badgeTop: "58px",
    links: [
      { name: "Editor", href: "/editor" },
      { name: "Playground", href: "/playground" },
      { name: "Datasets", href: "/datasets" },
    ],
  },
  {
    number: "2",
    label: "Evaluate",
    description: "Reflect and measure",
    href: "/evaluations",
    illustration: null,
    IllustrationComponent: EvaluateIllustration,
    opacity: 0.83,
    badgeTop: "120px",
    links: [
      { name: "Evaluations", href: "/evaluations" },
      { name: "Datasets", href: "/datasets" },
    ],
  },
  {
    number: "3",
    label: "Deploy",
    description: "From draft to live",
    href: "/deployments",
    illustration: null,
    IllustrationComponent: DeployIllustration,
    opacity: 0.68,
    badgeTop: "6px",
    links: [
      { name: "Deployments", href: "/deployments" },
      { name: "Analytics", href: "/analytics" },
      { name: "Gateway", href: "https://github.com/adaline/gateway", external: true },
    ],
  },
  {
    number: "4",
    label: "Monitor",
    description: "Insights in real time",
    href: "/logs",
    illustration: null,
    IllustrationComponent: MonitorIllustration,
    opacity: 0.61,
    badgeTop: "66px",
    links: [
      { name: "Logs", href: "/logs" },
      { name: "Analytics", href: "/analytics" },
    ],
  },
];

function ProductsMenu({ isOpen }) {
  return (
    <div className="px-[48px] pb-[40px]">
      {/* Part 1: Double dashed divider */}
      <div className="flex flex-col gap-[4px] w-full">
        <hr className="border-t border-dashed border-[#E0E5D5] w-full" />
        <hr className="border-t border-dashed border-[#E0E5D5] w-full" />
      </div>

      {/* Part 2: Illustration grid */}
      <div className="flex gap-[24px] items-start justify-center w-full">
        {menuColumns.map((col) => (
          <Link
            key={`illust-${col.label}`}
            href={col.href}
            className="py-[48px] flex-1 min-w-0"
          >
            <div
              className="flex items-start w-full relative"
              style={{ aspectRatio: "327.75 / 194.5", maxHeight: "194.5px", minHeight: "128px", opacity: col.opacity }}
            >
              <div className="w-[194.5px] h-[194.5px] relative shrink-0 self-stretch">
                {col.IllustrationComponent && (
                  <col.IllustrationComponent className="w-full h-full" />
                )}
              </div>
              <div className="flex-1 min-w-0 relative self-stretch">
                <div
                  className="absolute flex items-center gap-[8px]"
                  style={{ left: "-24px", top: col.badgeTop }}
                >
                  <span
                    className="flex items-center justify-center size-[24px] rounded-full shrink-0"
                    style={{ backgroundColor: "#D7E8B5", fontFamily: '"Akkurat", sans-serif', fontSize: "12px", fontWeight: 700, lineHeight: "20px", color: "#0A1D08" }}
                  >
                    {col.number}
                  </span>
                  <span
                    className="whitespace-nowrap"
                    style={{ fontFamily: "var(--font-fragment-mono)", fontSize: "14px", fontWeight: 400, lineHeight: "14px", letterSpacing: "0.28px", color: "#0A1D08" }}
                  >
                    {col.label}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Part 3: Double dashed divider (76% opacity) */}
      <div className="flex flex-col gap-[4px] w-full">
        <hr className="border-t border-dashed border-[#E0E5D5] w-full opacity-[0.76]" />
        <hr className="border-t border-dashed border-[#E0E5D5] w-full opacity-[0.76]" />
      </div>

      {/* Part 4: Category descriptions and link lists */}
      <div className="flex gap-[24px] w-full">
        {/* Part 4.1: Iterate */}
        <div className="flex-1 min-w-0 flex flex-col gap-[24px]">
          {/* Upper half */}
          <Link href="/iterate" className="flex flex-col gap-[14.85px] pt-[48px]">
            <span
              style={{
                fontFamily: "var(--font-fragment-mono)",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "14px",
                letterSpacing: "0.28px",
                color: "#0A1D08",
                opacity: 0.89,
              }}
            >
              Iterate
            </span>
            <span
              className="whitespace-pre-wrap"
              style={{
                fontFamily: '"Akkurat", sans-serif',
                fontSize: "29.5px",
                fontWeight: 400,
                lineHeight: "34.7px",
                letterSpacing: "-0.6px",
                color: "#0A1D08",
                opacity: 0.46,
              }}
            >
              {"Sketch, test\nand refine"}
            </span>
          </Link>
          {/* Bottom half */}
          <div className="flex flex-col gap-[8px]">
            {[
              { name: "Editor", href: "/editor" },
              { name: "Playground", href: "/playground" },
              { name: "Datasets", href: "/datasets" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:opacity-70 transition-opacity"
                style={{
                  fontFamily: '"Akkurat", sans-serif',
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  color: "#0A1D08",
                  opacity: 0.46,
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Part 4.2: Evaluate */}
        <div className="flex-1 min-w-0 flex flex-col gap-[24px]">
          {/* Upper half */}
          <Link href="/evaluate" className="flex flex-col gap-[14.85px] pt-[48px]">
            <span
              style={{
                fontFamily: "var(--font-fragment-mono)",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "14px",
                letterSpacing: "0.28px",
                color: "#0A1D08",
                opacity: 0.89,
              }}
            >
              Evaluate
            </span>
            <span
              className="whitespace-pre-wrap"
              style={{
                fontFamily: '"Akkurat", sans-serif',
                fontSize: "29.5px",
                fontWeight: 400,
                lineHeight: "34.7px",
                letterSpacing: "-0.6px",
                color: "#0A1D08",
                opacity: 0.46,
              }}
            >
              {"Reflect\nand measure"}
            </span>
          </Link>
          {/* Bottom half */}
          <div className="flex flex-col gap-[8px]">
            <Link
              href="/evaluations"
              className="hover:opacity-70 transition-opacity"
              style={{
                fontFamily: '"Akkurat", sans-serif',
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "#0A1D08",
                opacity: 0.46,
              }}
            >
              Evaluations
            </Link>
            <Link
              href="/datasets"
              className="hover:opacity-70 transition-opacity"
              style={{
                fontFamily: '"Akkurat", sans-serif',
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "#0A1D08",
                opacity: 0.40,
              }}
            >
              Datasets
            </Link>
          </div>
        </div>

        {/* Part 4.3: Deploy */}
        <div className="flex-1 min-w-0 flex flex-col gap-[24px]">
          {/* Upper half */}
          <Link href="/deploy" className="flex flex-col gap-[14.85px] pt-[48px]">
            <span
              style={{
                fontFamily: "var(--font-fragment-mono)",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "14px",
                letterSpacing: "0.28px",
                color: "#0A1D08",
                opacity: 0.83,
              }}
            >
              Deploy
            </span>
            <span
              className="whitespace-pre-wrap"
              style={{
                fontFamily: '"Akkurat", sans-serif',
                fontSize: "29.6px",
                fontWeight: 400,
                lineHeight: "34.7px",
                letterSpacing: "-0.6px",
                color: "#0A1D08",
                opacity: 0.40,
              }}
            >
              {"From draft\nto live"}
            </span>
          </Link>
          {/* Bottom half */}
          <div className="flex flex-col gap-[8px]">
            <Link
              href="/deployments"
              className="hover:opacity-70 transition-opacity"
              style={{
                fontFamily: '"Akkurat", sans-serif',
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "#0A1D08",
                opacity: 0.40,
              }}
            >
              Deployments
            </Link>
            <Link
              href="/analytics"
              className="hover:opacity-70 transition-opacity"
              style={{
                fontFamily: '"Akkurat", sans-serif',
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "#0A1D08",
                opacity: 0.40,
              }}
            >
              Analytics
            </Link>
            <Link
              href="https://github.com/adaline/gateway"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[4px] hover:opacity-70 transition-opacity"
              style={{
                fontFamily: '"Akkurat", sans-serif',
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "#0A1D08",
                opacity: 0.40,
              }}
            >
              Gateway
              <ExternalLinkIcon className="w-[14px] h-[14px]" />
            </Link>
          </div>
        </div>

        {/* Part 4.4: Monitor */}
        <div className="flex-1 min-w-0 flex flex-col gap-[24px]">
          {/* Upper half */}
          <Link href="/monitor" className="flex flex-col gap-[14.85px] pt-[48px]">
            <span
              style={{
                fontFamily: "var(--font-fragment-mono)",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "14px",
                letterSpacing: "0.28px",
                color: "#0A1D08",
                opacity: 0.83,
              }}
            >
              Monitor
            </span>
            <span
              className="whitespace-pre-wrap"
              style={{
                fontFamily: '"Akkurat", sans-serif',
                fontSize: "29.9px",
                fontWeight: 400,
                lineHeight: "34.7px",
                letterSpacing: "-0.6px",
                color: "#0A1D08",
                opacity: 0.40,
              }}
            >
              {"Insights\nin real time"}
            </span>
          </Link>
          {/* Bottom half */}
          <div className="flex flex-col gap-[8px]">
            <Link
              href="/logs"
              className="hover:opacity-70 transition-opacity"
              style={{
                fontFamily: '"Akkurat", sans-serif',
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "#0A1D08",
                opacity: 0.40,
              }}
            >
              Logs
            </Link>
            <Link
              href="/analytics"
              className="hover:opacity-70 transition-opacity"
              style={{
                fontFamily: '"Akkurat", sans-serif',
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "#0A1D08",
                opacity: 0.34,
              }}
            >
              Analytics
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const contentRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const dropdown = dropdownRef.current;
    const content = contentRef.current;
    if (!dropdown || !content) return;

    if (animRef.current) cancelAnimationFrame(animRef.current);

    const startHeight = dropdown.offsetHeight;
    const targetHeight = menuOpen ? content.scrollHeight : 0;
    const startTime = performance.now();
    const duration = 600;

    function animate(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = cubicBezierEase(progress);
      dropdown.style.height = `${startHeight + (targetHeight - startHeight) * eased}px`;
      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        dropdown.style.height = menuOpen ? "auto" : "0px";
      }
    }

    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [menuOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ fontFamily: '"Akkurat", sans-serif' }}
    >
      <div className="mx-auto px-[48px] h-[65px] flex items-center justify-between relative z-50">
        {/* Left: Navigation links */}
        <div className="hidden md:flex items-center gap-[43px]">
          <button
            className="flex items-center gap-[8px] hover:opacity-70 transition-opacity"
            style={{
              fontFamily: "var(--font-fragment-mono)",
              fontSize: "15px",
              fontWeight: 400,
              fontVariantCaps: "all-small-caps",
              letterSpacing: "0.3px",
              lineHeight: "15px",
              color: "#0A1D08",
            }}
            onMouseEnter={() => setMenuOpen(true)}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span>Products</span>
            <div
              className="shrink-0 translate-y-[1px]"
              style={{
                transition: "transform 488ms cubic-bezier(0.40, 0.25, 0.15, 0.95)",
                transform: menuOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <ChevronDown className="w-[9px] h-[5px]" />
            </div>
          </button>
          <Link
            href="#"
            className="hover:opacity-70 transition-opacity"
            style={{
              fontFamily: "var(--font-fragment-mono)",
              fontSize: "15px",
              fontWeight: 400,
              fontVariantCaps: "all-small-caps",
              letterSpacing: "0.3px",
              lineHeight: "15px",
              color: "#0A1D08",
            }}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="hover:opacity-70 transition-opacity"
            style={{
              fontFamily: "var(--font-fragment-mono)",
              fontSize: "15px",
              fontWeight: 400,
              fontVariantCaps: "all-small-caps",
              letterSpacing: "0.3px",
              lineHeight: "15px",
              color: "#0A1D08",
            }}
          >
            Blog
          </Link>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <AdalineLogo className="h-[24px] w-[134px] text-forest" />
          </Link>
        </div>

        {/* Right: CTA buttons */}
        <div
          className="flex items-center gap-[8px] h-full hover:cursor-pointer"
          style={{
            fontFamily: "var(--font-fragment-mono)",
            fontSize: "15px",
            fontWeight: 400,
            fontVariantCaps: "all-small-caps",
            letterSpacing: "0.3px",
            lineHeight: "15px",
          }}
        >
          <Link
            href="#"
            className="hidden md:inline-flex items-center gap-[12px] h-[40px] pl-[20px] pr-[24px] rounded-[20px] hover:bg-sage/30 transition-colors"
            style={{ backgroundColor: "rgb(251, 253, 246)", border: "1px solid rgb(195, 207, 178)", color: "rgb(32, 59, 20)" }}
          >
            <span>Watch Demo</span>
            <span
              className="flex shrink-0 items-center justify-center size-[24px] rounded-full mr-[-14px]"
              style={{ backgroundColor: "rgb(224, 229, 213)" }}
            >
              <PlayIcon className="w-[8px] h-[10px]" style={{ color: "rgb(32, 59, 20)" }} />
            </span>
          </Link>
          <Link
            href="#"
            className="inline-flex items-center h-[40px] px-[24px] rounded-[20px] hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: "rgb(32, 59, 20)",
              color: "rgb(251, 253, 246)",
              fontVariantCaps: "all-small-caps",
            }}
          >
            <span>Start for free</span>
          </Link>
        </div>
      </div>

      {/* Products dropdown menu - height animation with overflow clip */}
      <div
        ref={dropdownRef}
        className={`absolute top-0 left-0 right-0 z-40 ${
          menuOpen ? "" : "pointer-events-none"
        }`}
        style={{ overflow: "clip", height: "0px" }}
        onMouseLeave={() => setMenuOpen(false)}
      >
        <div ref={contentRef} style={{ backgroundColor: "rgb(251, 253, 246)", paddingTop: "65px" }}>
          <ProductsMenu isOpen={menuOpen} />
        </div>
      </div>
    </nav>
  );
}
