import React from 'react'
import Helmet from 'react-helmet'

// import appleTouchIcon from '../images/apple-touch-icon.png'
// import favicon from '../images/favicon.png'
// import safariPinnedTab from '../images/safari-pinned-tab.svg'

const HelmetMeta = ({title}) => {
    return (
        <Helmet>
            <title>Simon Buutveld - {title}</title>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
            <link rel="manifest" href="./manifest.json" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg?v=2" color="#f03f36" />
            <meta name="msapplication-TileColor" content="#f03f36" />
            <meta name="theme-color" content="#f03f36" />
        </Helmet>
    )
}

export default HelmetMeta;