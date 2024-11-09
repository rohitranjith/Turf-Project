import React, { useEffect, useRef, useState } from "react";
import loader from "../assets/images/loader.gif"
import noImgAvaiable from "../assets/images/no_image_available.jpg"

const ForceLoadImage = (props) => {
    const { src } = props;
    const maxretrycount = props.maxretrycount ? props.maxretrycount : 3;
    const [imageUrl, setImageUrl] = useState(src);
    useEffect(() => {
        setImageUrl(src)
        retryCount.current = 0
    }, [src])

    const retryCount = useRef(0);
    return (
        <img
            {...props}
            alt={props.alt}
            src={imageUrl}
            loading="lazy"
            onError={(e) => {
                setImageUrl(loader)
                if (retryCount.current < maxretrycount) {
                    setTimeout(() => {
                        retryCount.current = retryCount.current + 1;
                        setImageUrl(src + "?retry=" + retryCount.current);
                    }, 5000);
                } else {
                    setImageUrl(props.url || noImgAvaiable)
                }
            }}
        />
    );
};

export default ForceLoadImage;