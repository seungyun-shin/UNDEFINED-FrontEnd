import React from 'react'

import { ContentsBannerStyleCom } from "../../styles/jsStyles/ContentsBannerStyle";

function ContentsBanner() {
    return (
        <>
            <ContentsBannerStyleCom>
                <div className="contents-banner-container">
                    <div className="contents-banner">
                        <div className="contents-banner-title">
                            WORK
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
