import Editor from "react-simple-code-editor";
import "./IdeContainer.css";
import { useState } from "react";
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const IdeContainer = () => {
    const [code, setCode] = useState(
        `function add(a, b) {\n  return a + b;\n}`
    );

    return (
        <div className="ide-container">
            <div className="ide">
            <Editor
            className="editor"
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => highlight(code, languages.js)}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 15,
                    backgroundColor: "#242424ab",
                    borderRadius: "1%"
                }}
            />
            </div>
        </div>
    );
};

export default IdeContainer;
