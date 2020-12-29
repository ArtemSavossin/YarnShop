import React from "react"
import { Helmet } from "react-helmet"

const Meta = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={"Трикотажная пряжа Нур-Султан"} />
      <meta
        name='keywords'
        content={
          "Пряжа, трикотажная пряжа, пряжа Астана, пряжа Нур-Султан, рукоделие Нур-Султан, рукоделие, товары для рукоделия"
        }
      />
    </Helmet>
  )
}

export default Meta
