import ProblemContainer from "../../components/ProblemContainer/ProblemContainer";
import EvaluationContainer from "../../components/EvaluationContainer/EvaluationContainer";
import "./CodingPage.css";
import "../../App.css";
import CodeEditor from "../../components/CodeEditor/CodeEditor";

function CodingPage() {
    return (
        <div className="coding-page">
            <div className="problem-description">
                <ProblemContainer />
            </div>
            <div className="code-arena">
                <div className="editor-container">
                    <CodeEditor />
                </div>
                <div className="evaluation-component">
                    <EvaluationContainer />
                </div>
            </div>
        </div>
    );
}

export default CodingPage;
