import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const ShowLessShowMore = ({ text, limit }) => {
    const theme = useTheme()

    const [showLess, setShowLess] = useState(true)

    return (
        <>
            {text ? (<>{text.length > limit ? (<>
                {showLess ? (<>
                    {text.substring(0, limit)}
                    <span
                        onClick={() => {
                            setShowLess(false)
                        }}
                        style={{
                            color: theme.palette.primary.main,
                            cursor: "pointer",
                            marginLeft: "3px"
                        }}
                    >more</span>
                </>) : (<>
                    {text}
                    <span
                        onClick={() => {
                            setShowLess(true)
                        }}
                        style={{
                            color: theme.palette.primary.main,
                            cursor: "pointer",
                            marginLeft: "3px"
                        }}
                    >show less</span>
                </>)}
            </>) : (<>
                {text}
            </>)}</>) : ""}
        </>
    );
};
export default ShowLessShowMore;