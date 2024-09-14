import "./CodingPage.css";
import ProblemContainer from "../components/ProblemContainer/ProblemContainer";
import IdeContainer from "../components/IdeContainer/IdeContainer";
import EvaluationContainer from "../components/EvaluationContainer/EvaluationContainer";

function CodingPage() {
    return (
        <div className="coding-page">
            <ProblemContainer />
            <div className="code-arena">
                <IdeContainer />
                <EvaluationContainer />
            </div>
        </div>
    );
}

export default CodingPage;
