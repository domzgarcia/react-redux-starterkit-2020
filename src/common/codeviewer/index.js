import React from "react";
import { Pre, Line, LineNo, LineContent } from "./styles";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";

const CodeViewer = ({codeBlock, lang}) => (
<div className="code-viewer">
    <Highlight {...defaultProps} theme={theme} code={codeBlock} language={lang}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
            {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                <LineContent>
                {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                ))}
                </LineContent>
            </Line>
            ))}
        </Pre>
        )}
    </Highlight>
</div>
);

export default CodeViewer;