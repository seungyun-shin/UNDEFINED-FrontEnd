import React from 'react'

import { GallaryBannerStyleCom } from "../../styles/jsStyles/GallaryBannerStyle";

function ContentsBanner( { bannerTitle } ) {
    return (
        <>
            <GallaryBannerStyleCom>
                <div className="contents-banner-container">
                    <div className="contents-banner">
                        <div className="contents-banner-title">
                            {bannerTitle}
                        </div>
                        <div className="contents-sub-title-container">
                           - UNDEFINED CREATOR -
                        </div>
                    </div>
                </div>
            </GallaryBannerStyleCom>
        </>
    )
}

export default ContentsBanner
