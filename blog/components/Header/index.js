import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

function Header({title}) {
    return(
        <Head>
            <title>
                {title}
            </title>
        </Head>
    )
}

Header.PropTypes = {
    title: PropTypes.string.isRequired,
}

export default Header