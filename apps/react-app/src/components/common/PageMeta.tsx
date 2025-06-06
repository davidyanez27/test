import { Helmet } from "react-helmet-async";

interface PageMetaProps {
    title      : string;
    description: string;
}

export const PageMeta = ({title, description}: PageMetaProps) => {
  return (
    <Helmet>
        <title>{ title } </title>
        <meta name="description" content={description} />
    </Helmet>
  )
}


