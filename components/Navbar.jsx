"use client";

import { useState, useRef, useCallback, memo } from "react";
import Link from "next/link";

function AdalineLogo({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 84 15"
    >
      <path d="M9.15.003.451 12.124v1.733h1.74l8.698-6.928V.003zM10.89 11.777H8.801v2.078h2.087zM39.034.67v5.113h-.036C38.52 5.034 37.472 4.5 36.301 4.5c-2.413 0-4.099 1.906-4.099 4.81 0 2.601 1.562 4.775 4.135 4.775 1.029 0 2.218-.517 2.697-1.425h.035l.089 1.193h1.349V.67zM36.46 12.73c-1.739 0-2.715-1.497-2.715-3.439 0-1.977.976-3.474 2.715-3.474 1.757 0 2.59 1.515 2.59 3.474 0 1.925-.887 3.439-2.59 3.439m13.396-.196V7.742c0-.516-.088-1.015-.283-1.443-.409-.98-1.491-1.8-3.248-1.8-1.916 0-3.584 1.052-3.655 2.887h1.473c.089-1.122 1.1-1.639 2.182-1.639 1.225 0 2.023.606 2.023 1.853v.66l-2.821.195c-2.395.16-3.265 1.568-3.265 2.94 0 1.265.976 2.69 3.159 2.69 1.348 0 2.43-.588 2.98-1.497h.036l.16 1.265h2.218v-1.318zm-1.508-2.53c0 1.586-1.082 2.762-2.697 2.762-1.295 0-1.828-.73-1.828-1.515 0-1.122.994-1.568 1.988-1.639l2.537-.178zM70.263 4.5c-1.1 0-2.414.57-2.857 1.621h-.036l-.106-1.39h-1.33v9.122h1.525v-4.24c0-.766.035-1.657.337-2.334.408-.82 1.189-1.39 2.094-1.39C71.31 5.89 72 6.78 72 8.189v5.665h1.509V7.974c0-2.174-1.225-3.474-3.248-3.474m13.236 5.22c0-.018.036-.25.036-.57 0-2.459-1.384-4.65-4.117-4.65-2.715 0-4.258 2.298-4.258 4.828 0 2.298 1.366 4.757 4.223 4.757 2.058 0 3.637-1.23 3.921-2.975h-1.526c-.302 1.104-1.136 1.621-2.342 1.621-1.721 0-2.715-1.514-2.715-2.922V9.72zM79.4 5.8c1.668 0 2.467 1.283 2.502 2.637h-5.128C76.81 7.101 77.857 5.8 79.4 5.8m-23.74 6.735V.669h-3.301v1.265h1.74v10.601h-1.882v1.318h5.359v-1.318zm6.813 0V4.732h-3.282V6.05h1.72v6.485H58.96v1.318h5.483v-1.318zM64.407.669h-1.934v1.907h1.934zM26.134 8.847l.107-.16h2.714V3.128L21.361 13.89h-1.916v-.036L28.885.67h1.738v13.22h-1.668V9.987h-2.82z" />
    </svg>
  );
}

function ChevronDown({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function PlayIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M7 7.396c0-1.432 0-2.148.3-2.548a1.5 1.5 0 0 1 1.093-.597c.498-.035 1.1.352 2.305 1.126l7.162 4.604c1.045.672 1.567 1.008 1.748 1.435a1.5 1.5 0 0 1 0 1.168c-.18.427-.703.763-1.748 1.435l-7.162 4.604c-1.205.774-1.807 1.161-2.305 1.126A1.5 1.5 0 0 1 7.3 16.548C7 16.148 7 15.432 7 14V7.396Z" />
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

function IterateIllustration({ className }) {
  return (
    <svg className={className} viewBox="0 0 194.5 194.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <svg x="38.9" y="0" width="97.25" height="97.25" viewBox="0 0 97.889 96.404" overflow="visible">
        <path d="M48.9443 1.07797L80.1982 12.4535L96.8269 41.2561L91.0531 74.0112L65.5751 95.3908H32.3114L6.83546 74.0112L1.06158 41.2561L17.6904 12.4535L48.9443 1.07797Z" stroke="#0A1D08" strokeWidth="2.026" />
      </svg>
      <svg x="38.9" y="0" width="97.25" height="97.25" viewBox="0 0 96.994 94.562" overflow="visible">
        <path d="M48.4967 1.12425L86.5097 19.4298L95.8974 60.5625L69.5918 93.5493H27.4016L1.09606 60.5645L10.4838 19.4298L48.4967 1.12425Z" stroke="#0A1D08" strokeWidth="2.026" />
      </svg>
      <svg x="79.34" y="40.44" width="16.371" height="16.371" viewBox="0 0 16.371 16.371" overflow="visible">
        <path d="M0 8.186H16.371M8.186 0V16.371" stroke="#0A1D08" strokeWidth="2.046" />
      </svg>
      <svg x="145.9" y="9.7" width="38.89" height="38.89" viewBox="0 0 39.131 38.538" overflow="visible">
        <path d="M19.5656 0.430922L32.0594 4.97833L38.7068 16.4922L36.3987 29.5862L26.2138 38.1327H12.9166L2.73249 29.5862L0.424369 16.4922L7.07176 4.97833L19.5656 0.430922Z" stroke="#0A1D08" strokeWidth="0.81" />
      </svg>
      <svg x="145.9" y="9.7" width="38.89" height="38.89" viewBox="0 0 38.776 37.804" overflow="visible">
        <path d="M19.3881 0.449456L34.585 7.76768L38.3381 24.2118L27.8216 37.3994H10.9547L0.438187 24.2126L4.19125 7.76768L19.3881 0.449456Z" stroke="#0A1D08" strokeWidth="0.81" />
      </svg>
      <svg x="161.17" y="24.97" width="8.346" height="8.346" viewBox="0 0 8.346 8.346" overflow="visible">
        <path d="M0 4.173H8.346M4.173 0V8.346" stroke="#0A1D08" strokeWidth="1.043" />
      </svg>
      <svg x="0" y="68.1" width="68.06" height="68.06" viewBox="0 0 68.510 67.471" overflow="visible">
        <path d="M34.2549 0.754447L56.1288 8.71593L67.7669 28.8742L63.7259 51.7987L45.8944 66.7617H22.614L4.78398 51.7987L0.742974 28.8742L12.3811 8.71593L34.2549 0.754447Z" stroke="#0A1D08" strokeWidth="1.418" />
      </svg>
      <svg x="0" y="68.1" width="68.06" height="68.06" viewBox="0 0 67.887 66.185" overflow="visible">
        <path d="M33.9434 0.786877L60.5491 13.5991L67.1197 42.3884L48.7081 65.4762H19.1787L0.767148 42.3898L7.33775 13.5991L33.9434 0.786877Z" stroke="#0A1D08" strokeWidth="1.418" />
      </svg>
      <svg x="27.85" y="95.95" width="12.356" height="12.356" viewBox="0 0 12.356 12.356" overflow="visible">
        <path d="M0 6.178H12.356M6.178 0V12.356" stroke="#0A1D08" strokeWidth="1.544" />
      </svg>
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
    <svg className={className} viewBox="0 0 194.5 194.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <svg x="0" y="71.95" width="97.25" height="97.25" viewBox="0 0 99.271 99.271" overflow="visible">
        <path d="M49.6355 98.258C76.4889 98.258 98.258 76.4889 98.258 49.6355C98.258 22.782 76.4889 1.013 49.6355 1.013C22.782 1.013 1.013 22.782 1.013 49.6355C1.013 76.4889 22.782 98.258 49.6355 98.258Z" stroke="#0A1D08" strokeWidth="2.026" strokeDasharray="10.13 6.08" transform="rotate(-66.99 49.636 49.636)" />
      </svg>
      <svg x="40.44" y="112.39" width="16.371" height="16.371" viewBox="0 0 16.371 16.371" overflow="visible">
        <path d="M0 8.186H16.371M8.186 0V16.371" stroke="#0A1D08" strokeWidth="2.046" />
      </svg>
      <svg x="38.89" y="0" width="106.97" height="106.97" viewBox="0 0 109.201 109.201" overflow="visible">
        <path d="M54.6005 108.087C84.1402 108.087 108.087 84.1402 108.087 54.6005C108.087 25.061 84.1402 1.114 54.6005 1.114C25.061 1.114 1.114 25.061 1.114 54.6005C1.114 84.1402 25.061 108.087 54.6005 108.087Z" stroke="#0A1D08" strokeWidth="2.229" strokeDasharray="11.14 6.69" transform="rotate(66.99 54.6 54.6)" />
      </svg>
      <svg x="83.52" y="44.63" width="17.707" height="17.707" viewBox="0 0 17.707 17.707" overflow="visible">
        <path d="M0 8.854H17.707M8.854 0V17.707" stroke="#0A1D08" strokeWidth="2.213" />
      </svg>
      <svg x="145.88" y="68.06" width="38.89" height="38.89" viewBox="0 0 39.682 39.682" overflow="visible">
        <path d="M19.841 39.277C30.576 39.277 39.277 30.576 39.277 19.841C39.277 9.107 30.576 0.405 19.841 0.405C9.107 0.405 0.405 9.107 0.405 19.841C0.405 30.576 9.107 39.277 19.841 39.277Z" stroke="#0A1D08" strokeWidth="0.81" strokeDasharray="4.05 2.43" transform="rotate(-66.99 19.841 19.841)" />
      </svg>
      <svg x="161.15" y="83.33" width="8.346" height="8.346" viewBox="0 0 8.346 8.346" overflow="visible">
        <path d="M0 4.173H8.346M4.173 0V8.346" stroke="#0A1D08" strokeWidth="1.043" />
      </svg>
      <svg x="68.06" y="116.69" width="77.80" height="77.80" viewBox="0 0 79.395 79.395" overflow="visible">
        <path d="M39.698 78.585C61.175 78.585 78.585 61.175 78.585 39.698C78.585 18.221 61.175 0.81 39.698 0.81C18.221 0.81 0.81 18.221 0.81 39.698C0.81 61.175 18.221 78.585 39.698 78.585Z" stroke="#0A1D08" strokeWidth="1.62" strokeDasharray="8.1 4.86" transform="rotate(66.99 39.698 39.698)" />
      </svg>
      <svg x="100.11" y="148.74" width="13.693" height="13.693" viewBox="0 0 13.693 13.693" overflow="visible">
        <path d="M0 6.847H13.693M6.847 0V13.693" stroke="#0A1D08" strokeWidth="1.712" />
      </svg>
    </svg>
  );
}

function DeployIllustration({ className }) {
  const gearPath = "M56.641 1.272C37.303 2.22 20.442 12.584 10.544 27.877L29.241 42.033L7.625 32.918C3.399 41.153 1.201 50.278 1.215 59.534C1.215 69.123 3.529 78.169 7.627 86.149L29.241 77.034L10.547 91.193C20.444 106.484 37.308 116.848 56.641 117.798L59.55 94.535L62.462 117.796C81.796 116.843 98.654 106.479 108.554 91.188L89.863 77.034L111.471 86.147C115.699 77.913 117.898 68.789 117.885 59.534C117.885 49.947 115.574 40.901 111.476 32.923L89.865 42.033L108.557 27.877C98.664 12.586 81.803 2.22 62.467 1.269L59.555 24.535L56.641 1.272Z";
  const gearSmallPath = "M37.758 0.848C24.867 1.48 13.627 8.389 7.029 18.584L19.492 28.02L5.083 21.944C2.266 27.433 0.801 33.517 0.81 39.687C0.81 46.079 2.353 52.11 5.085 57.429L19.492 51.353L7.031 60.791C13.629 70.985 24.87 77.894 37.758 78.527L39.698 63.019L41.639 78.526C54.527 77.89 65.765 70.981 72.365 60.788L59.905 51.353L74.309 57.427C77.127 51.939 78.594 45.856 78.585 39.687C78.585 33.296 77.044 27.265 74.312 21.947L59.906 28.02L72.366 18.584C65.772 8.39 54.532 1.48 41.642 0.846L39.701 16.356L37.758 0.848Z";
  return (
    <svg className={className} viewBox="0 0 194.5 194.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <svg x="0" y="77.8" width="116.69" height="116.69" viewBox="0 0 119.101 119.067" overflow="visible">
        <path d={gearPath} stroke="#0A1D08" strokeWidth="2.431" transform="rotate(94.13 59.551 59.534)" />
      </svg>
      <svg x="48.82" y="126.62" width="19.043" height="19.043" viewBox="0 0 19.043 19.043" overflow="visible">
        <path d="M0 9.522H19.043M9.522 0V19.043" stroke="#0A1D08" strokeWidth="2.380" />
      </svg>
      <svg x="87.52" y="0" width="48.63" height="48.63" viewBox="0 0 119.101 119.067" overflow="visible">
        <path d={gearPath} stroke="#0A1D08" strokeWidth="2.431" transform="rotate(94.13 59.551 59.534)" />
      </svg>
      <svg x="107.0" y="19.47" width="9.684" height="9.684" viewBox="0 0 9.684 9.684" overflow="visible">
        <path d="M0 4.842H9.684M4.842 0V9.684" stroke="#0A1D08" strokeWidth="1.210" />
      </svg>
      <svg x="116.69" y="48.63" width="77.8" height="77.8" viewBox="0 0 79.395 79.373" overflow="visible">
        <path d={gearSmallPath} stroke="#0A1D08" strokeWidth="1.620" transform="rotate(-94.13 39.698 39.687)" />
      </svg>
      <svg x="148.74" y="80.68" width="13.693" height="13.693" viewBox="0 0 13.693 13.693" overflow="visible">
        <path d="M0 6.847H13.693M6.847 0V13.693" stroke="#0A1D08" strokeWidth="1.712" />
      </svg>
      <svg x="126.42" y="145.88" width="38.89" height="38.89" viewBox="0 0 79.395 79.373" overflow="visible">
        <path d={gearSmallPath} stroke="#0A1D08" strokeWidth="1.620" transform="rotate(-94.13 39.698 39.687)" />
      </svg>
      <svg x="141.69" y="161.15" width="8.346" height="8.346" viewBox="0 0 8.346 8.346" overflow="visible">
        <path d="M0 4.173H8.346M4.173 0V8.346" stroke="#0A1D08" strokeWidth="1.043" />
      </svg>
    </svg>
  );
}

function MonitorIllustration({ className }) {
  return (
    <svg className={className} viewBox="0 0 194.5 194.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <svg x="0" y="0" width="126.42" height="126.42" viewBox="0 0 107.981 107.981" overflow="visible">
        <circle cx="53.99" cy="53.99" r="52.674" stroke="#0A1D08" strokeWidth="2.634" />
      </svg>
      <svg x="0" y="0" width="126.42" height="126.42" viewBox="0 0 129.05 129.05" overflow="visible">
        <circle cx="64.525" cy="64.525" r="63.208" stroke="#0A1D08" strokeWidth="2.634" strokeDasharray="13.17 7.9" transform="rotate(141.37 64.525 64.525)" />
      </svg>
      <svg x="53.02" y="53.02" width="20.381" height="20.381" viewBox="0 0 20.381 20.381" overflow="visible">
        <path d="M0 10.190H20.381M10.190 0V20.381" stroke="#0A1D08" strokeWidth="2.548" />
      </svg>
      <svg x="136.14" y="0" width="48.63" height="48.63" viewBox="0 0 41.519 41.519" overflow="visible">
        <circle cx="20.76" cy="20.76" r="20.253" stroke="#0A1D08" strokeWidth="1.013" />
      </svg>
      <svg x="136.14" y="0" width="48.63" height="48.63" viewBox="0 0 49.621 49.621" overflow="visible">
        <circle cx="24.81" cy="24.81" r="24.304" stroke="#0A1D08" strokeWidth="1.013" strokeDasharray="5.06 3.04" transform="rotate(-141.37 24.81 24.81)" />
      </svg>
      <svg x="155.61" y="19.47" width="9.684" height="9.684" viewBox="0 0 9.684 9.684" overflow="visible">
        <path d="M0 4.842H9.684M4.842 0V9.684" stroke="#0A1D08" strokeWidth="1.210" />
      </svg>
      <svg x="19.44" y="140.03" width="54.45" height="54.45" viewBox="0 0 46.497 46.497" overflow="visible">
        <circle cx="23.249" cy="23.249" r="22.682" stroke="#0A1D08" strokeWidth="1.134" />
      </svg>
      <svg x="19.44" y="140.03" width="54.45" height="54.45" viewBox="0 0 55.569 55.569" overflow="visible">
        <circle cx="27.785" cy="27.785" r="27.218" stroke="#0A1D08" strokeWidth="1.134" strokeDasharray="5.67 3.4" transform="rotate(-141.37 27.785 27.785)" />
      </svg>
      <svg x="41.42" y="162.01" width="10.486" height="10.486" viewBox="0 0 10.486 10.486" overflow="visible">
        <path d="M0 5.243H10.486M5.243 0V10.486" stroke="#0A1D08" strokeWidth="1.311" />
      </svg>
      <svg x="106.97" y="106.97" width="87.52" height="87.52" viewBox="0 0 74.743 74.743" overflow="visible">
        <circle cx="37.372" cy="37.372" r="36.461" stroke="#0A1D08" strokeWidth="1.823" />
      </svg>
      <svg x="106.97" y="106.97" width="87.52" height="87.52" viewBox="0 0 89.327 89.327" overflow="visible">
        <circle cx="44.664" cy="44.664" r="43.753" stroke="#0A1D08" strokeWidth="1.823" strokeDasharray="9.11 5.47" transform="rotate(-141.37 44.664 44.664)" />
      </svg>
      <svg x="143.21" y="143.21" width="15.033" height="15.033" viewBox="0 0 15.033 15.033" overflow="visible">
        <path d="M0 7.517H15.033M7.517 0V15.033" stroke="#0A1D08" strokeWidth="1.879" />
      </svg>
    </svg>
  );
}

const menuColumns = [
  {
    number: "1",
    label: "Iterate",
    href: "/editor",
    categoryHref: "/iterate",
    descriptionText: "Sketch, test\nand refine",
    descriptionFontSize: "29.5px",
    IllustrationComponent: IterateIllustration,
    opacity: 0.99,
    badgeTop: "58px",
    labelOpacity: 0.89,
    descriptionOpacity: 0.46,
    links: [
      { name: "Editor", href: "/editor", opacity: 0.46 },
      { name: "Playground", href: "/playground", opacity: 0.46 },
      { name: "Datasets", href: "/datasets", opacity: 0.46 },
    ],
  },
  {
    number: "2",
    label: "Evaluate",
    href: "/evaluations",
    categoryHref: "/evaluate",
    descriptionText: "Reflect\nand measure",
    descriptionFontSize: "29.5px",
    IllustrationComponent: EvaluateIllustration,
    opacity: 0.83,
    badgeTop: "120px",
    labelOpacity: 0.89,
    descriptionOpacity: 0.46,
    links: [
      { name: "Evaluations", href: "/evaluations", opacity: 0.46 },
      { name: "Datasets", href: "/datasets", opacity: 0.40 },
    ],
  },
  {
    number: "3",
    label: "Deploy",
    href: "/deployments",
    categoryHref: "/deploy",
    descriptionText: "From draft\nto live",
    descriptionFontSize: "29.6px",
    IllustrationComponent: DeployIllustration,
    opacity: 0.68,
    badgeTop: "6px",
    labelOpacity: 0.83,
    descriptionOpacity: 0.40,
    links: [
      { name: "Deployments", href: "/deployments", opacity: 0.40 },
      { name: "Analytics", href: "/analytics", opacity: 0.40 },
      { name: "Gateway", href: "https://github.com/adaline/gateway", opacity: 0.40, external: true },
    ],
  },
  {
    number: "4",
    label: "Monitor",
    href: "/logs",
    categoryHref: "/monitor",
    descriptionText: "Insights\nin real time",
    descriptionFontSize: "29.9px",
    IllustrationComponent: MonitorIllustration,
    opacity: 0.61,
    badgeTop: "66px",
    labelOpacity: 0.83,
    descriptionOpacity: 0.40,
    links: [
      { name: "Logs", href: "/logs", opacity: 0.40 },
      { name: "Analytics", href: "/analytics", opacity: 0.34 },
    ],
  },
];

// Module-level style constants — allocated once, reused every render
const NAV_STYLE = { fontFamily: '"Akkurat", sans-serif' };
const NAV_INNER_STYLE = { zIndex: "var(--nav-z-index, 200)" };
const CHEVRON_OPEN_STYLE = { transition: "transform 488ms cubic-bezier(0.40, 0.25, 0.15, 0.95)", transform: "rotate(180deg)" };
const CHEVRON_CLOSED_STYLE = { transition: "transform 488ms cubic-bezier(0.40, 0.25, 0.15, 0.95)", transform: "rotate(0deg)" };
const DROPDOWN_WRAPPER_STYLE = { zIndex: "calc(var(--nav-z-index, 200) - 10)" };
const GRID_OPEN_STYLE = { gridTemplateRows: "1fr", transition: "grid-template-rows 600ms cubic-bezier(0.52, 0, 0.07, 1)" };
const GRID_CLOSED_STYLE = { gridTemplateRows: "0fr", transition: "grid-template-rows 600ms cubic-bezier(0.52, 0, 0.07, 1)" };
const OVERFLOW_HIDDEN_STYLE = { overflow: "hidden" };
const DROPDOWN_CONTENT_STYLE = { backgroundColor: "rgb(251, 253, 246)", paddingTop: "var(--nav-height, 64px)" };
const BADGE_STYLE = { backgroundColor: "#D7E8B5", fontFamily: '"Akkurat", sans-serif', fontSize: "12px", fontWeight: 700, lineHeight: "20px", color: "#0A1D08" };
const WATCH_DEMO_STYLE = { border: "1px solid #E0E5D5", color: "rgb(32, 59, 20)" };
const START_FREE_STYLE = { backgroundColor: "rgb(32, 59, 20)", color: "rgb(251, 253, 246)", fontVariantCaps: "all-small-caps" };

const DashedDivider = memo(function DashedDivider({ opacity = 1 }) {
  return (
    <div className="flex flex-col gap-[4px] w-full" style={opacity < 1 ? { opacity } : undefined}>
      <hr className="border-t border-dashed border-[#E0E5D5] w-full" />
      <hr className="border-t border-dashed border-[#E0E5D5] w-full" />
    </div>
  );
});

const WatchDemoContent = memo(function WatchDemoContent() {
  return (
    <>
      <span>Watch Demo</span>
      <div className="-mr-3.5 ml-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pebble-200">
        <PlayIcon className="w-4 h-4 text-meadow-900" />
      </div>
    </>
  );
});

const ProductsMenu = memo(function ProductsMenu() {
  return (
    <div className="px-[48px] pb-[40px]">
      <DashedDivider />
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
                <col.IllustrationComponent className="w-full h-full" />
              </div>
              <div className="flex-1 min-w-0 relative self-stretch">
                <div
                  className="absolute flex items-center gap-[8px]"
                  style={{ left: "-24px", top: col.badgeTop }}
                >
                  <span
                    className="flex items-center justify-center size-[24px] rounded-full shrink-0"
                    style={BADGE_STYLE}
                  >
                    {col.number}
                  </span>
                  <span className="menu-mono-label whitespace-nowrap">
                    {col.label}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <DashedDivider opacity={0.76} />
      <div className="flex gap-[24px] w-full">
        {menuColumns.map((col) => (
          <div key={`cat-${col.label}`} className="flex-1 min-w-0 flex flex-col gap-[24px]">
            <Link href={col.categoryHref} className="flex flex-col gap-[14.85px] pt-[48px]">
              <span className="menu-mono-label" style={{ opacity: col.labelOpacity }}>
                {col.label}
              </span>
              <span
                className="menu-description whitespace-pre-wrap"
                style={{ fontSize: col.descriptionFontSize, opacity: col.descriptionOpacity }}
              >
                {col.descriptionText}
              </span>
            </Link>
            <div className="flex flex-col gap-[8px]">
              {col.links.map((link) =>
                link.external ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="menu-link inline-flex items-center gap-[4px] hover:opacity-70 transition-opacity"
                    style={{ opacity: link.opacity }}
                  >
                    {link.name}
                    <ExternalLinkIcon className="w-[14px] h-[14px]" />
                  </Link>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="menu-link hover:opacity-70 transition-opacity"
                    style={{ opacity: link.opacity }}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const hasOpenedRef = useRef(false);
  if (menuOpen) hasOpenedRef.current = true;

  const handleMouseEnter = useCallback(() => setMenuOpen(true), []);
  const handleToggle = useCallback(() => setMenuOpen((prev) => !prev), []);
  const handleMouseLeave = useCallback(() => setMenuOpen(false), []);

  return (
    <nav
      className="sticky top-0 left-0 right-0 h-0 pointer-events-auto z-[var(--nav-z-index)]"
      style={NAV_STYLE}
    >
      <div
        className="relative flex flex-row items-center justify-center px-[48px] h-[var(--nav-height)] shadow-[0_1px_0_0_transparent] transition-shadow duration-200"
        style={NAV_INNER_STYLE}
      >
        {/* Left: Navigation links */}
        <div className="hidden md:flex flex-1 items-center gap-10 lg:gap-12">
          <a
            className="atlas-web-mono text-meadow-900 flex items-center gap-1 cursor-default"
            onMouseEnter={handleMouseEnter}
            onClick={handleToggle}
          >
            <span>Products</span>
            <div
              className="-mr-2"
              style={menuOpen ? CHEVRON_OPEN_STYLE : CHEVRON_CLOSED_STYLE}
            >
              <ChevronDown className="w-4 h-4" />
            </div>
          </a>
          <Link href="#" className="atlas-web-mono text-meadow-900 flex items-center gap-1">
            Pricing
          </Link>
          <Link href="#" className="atlas-web-mono text-meadow-900 flex items-center gap-1">
            Blog
          </Link>
        </div>

        {/* Center: Logo */}
        <Link href="/" className="flex-none overflow-hidden">
          <AdalineLogo className="text-meadow-900 h-6" />
        </Link>

        {/* Right: CTA buttons */}
        <div className="flex flex-1 items-center justify-end gap-8 atlas-web-mono">
          <div className="flex items-center gap-2">
            <div className="relative hidden md:block">
              <button
                className="inline-flex items-center justify-center gap-3 h-[40px] pl-5 pr-[24px] rounded-[20px] pointer-events-none !bg-pebble-50"
                style={WATCH_DEMO_STYLE}
                tabIndex={-1}
                aria-hidden="true"
              >
                <WatchDemoContent />
              </button>
              <button
                className="absolute inset-0 inline-flex items-center justify-center gap-3 h-[40px] pl-5 pr-[24px] rounded-[20px] hover:bg-sage/30 transition-[border-radius,background-color] duration-[450ms] ease-out !bg-pebble-50"
                style={WATCH_DEMO_STYLE}
              >
                <WatchDemoContent />
              </button>
            </div>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-3 h-[40px] px-[24px] rounded-[20px] hover:opacity-90 transition-opacity"
              style={START_FREE_STYLE}
            >
              <span>Start for free</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Products dropdown menu — CSS grid transition (GPU-composited) */}
      <div
        className={`absolute top-0 left-0 right-0 ${menuOpen ? "" : "pointer-events-none"}`}
        style={DROPDOWN_WRAPPER_STYLE}
        onMouseLeave={handleMouseLeave}
      >
        <div className="grid" style={menuOpen ? GRID_OPEN_STYLE : GRID_CLOSED_STYLE}>
          <div style={OVERFLOW_HIDDEN_STYLE}>
            <div style={DROPDOWN_CONTENT_STYLE}>
              {hasOpenedRef.current && <ProductsMenu />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
