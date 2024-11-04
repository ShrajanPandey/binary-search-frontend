import { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-java";

import "./CodeEditor.css";

function CodeEditor(){

    const [updatedCode, updateCode] = useState(
        `function add(a, b) {\n    return a + b;\n}`
    );

    return <>
        <AceEditor
            className="code-editor"
            placeholder="Placeholder Text"
            mode="java"
            theme="monokai"
            name="blah2"
            // onLoad={this.onLoad}
            onChange={updateCode}
            fontSize={14}
            lineHeight={19}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={updatedCode}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 4,
            }}
            width="100%"
            height="100%"
        />
    </>

}

export default CodeEditor;