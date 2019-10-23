import React from 'react'
import Helmet from 'react-helmet'

import appleTouchIcon from '../images/apple-touch-icon.png'
import favicon from '../images/favicon.png'
import safariPinnedTab from '../images/safari-pinned-tab.svg'

const HelmetMeta = ({title}) => {
    return (
        <Helmet>
            <title>Simon Buutveld - {title}</title>
            <link rel="shortcut icon" type="image/png" href={favicon} />
            <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
            <link rel="manifest" href="./manifest.json" />
            <link rel="mask-icon" href={safariPinnedTab} color="#f03f36" />
            <meta name="msapplication-TileColor" content="#f03f36" />
            <meta name="theme-color" content="#f03f36" />
        </Helmet>
    )
}

export default HelmetMeta;