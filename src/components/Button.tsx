import { useState } from "@lynx-js/react/legacy-react-runtime";
import type React from "react";

interface Props {
    content: string;
}

const Button = ({ content }: Props) => {
    const [passedContent, changePassedcontent] = useState(content);
    const [clicked, setclicked] = useState(false);

    const onTap = () => {
        setclicked(!clicked);
    }

    clicked ? changePassedcontent("What is oging on") : ''

    return (
        <view className="button" bindtap={onTap}>
            <text>
                {content}
            </text>
            {clicked}?
            <text>
                {passedContent}
            </text>
        </view>
    )
}
export default Button