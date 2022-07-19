import React from "react";
import { Helmet } from "react-helmet-async";
import Appsettings from "../../configs/appsettings";

interface IProps {
  title: string;
  description?: string;
  keywords?: string;
}

const HelmetTag: React.FC<IProps> = ({title, description, keywords}) => {
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={Appsettings.appName} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default HelmetTag;
