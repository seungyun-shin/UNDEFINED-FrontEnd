import React from 'react'

import { ContentsBannerStyleCom } from "../../styles/jsStyles/ContentsBannerStyle";

function ContentsBanner( { bannerTitle } ) {
    return (
        <>
            <ContentsBannerStyleCom>
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
            </ContentsBannerStyleCom>
        </>
    )
}

export default ContentsBanner
