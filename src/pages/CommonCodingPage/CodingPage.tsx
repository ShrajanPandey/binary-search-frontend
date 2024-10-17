import ProblemContainer from "../../components/ProblemContainer/ProblemContainer";
import IdeContainer from "../../components/IdeContainer/IdeContainer";
import EvaluationContainer from "../../components/EvaluationContainer/EvaluationContainer";
import "./CodingPage.css";
import "../../App.css";

function CodingPage() {
    return (
        <div className="coding-page">
            <div className="problem-description">
                <ProblemContainer />
            </div>
            <div className="code-arena">
                <div className="ide-component">
                    <IdeContainer />
                </div>
                <div className="evaluation-component">
                    <EvaluationContainer />
                </div>
            </div>
        </div>
    );
}

export default CodingPage;
