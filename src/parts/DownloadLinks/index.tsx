import React from "react";
import { Download, DownloadLink } from "./styled";

import apple from "./assets/apple.png";
import google from "./assets/google.png";

interface IDownloadLinks {
  big?: boolean;
}

function DownloadLinks({ big }: IDownloadLinks) {
  return (
    <Download>
      <DownloadLink big={big} src={apple} />
      <DownloadLink big={big} src={google} />
    </Download>
  );
}
export default DownloadLinks;
