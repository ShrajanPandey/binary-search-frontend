import DiscussionAndTimerContainer from "../../components/DiscussionAndTimerContainer/DiscussionAndTimerContainer";
import EvaluationContainer from "../../components/EvaluationContainer/EvaluationContainer";
import IdeContainer from "../../components/IdeContainer/IdeContainer";
import ProblemContainer from "../../components/ProblemContainer/ProblemContainer";
import './PeerCodingPage.css';
import "../../App.css";

function PeerCodingPage(){
    return( 
        <div className="peer-coding-page">
            <div className="peer-problem-description">
                <ProblemContainer />
            </div>
            <div className="peer-code-arena">
                <div className="ide-component">
                    <IdeContainer />
                </div>
                <div className="evaluation-component">
                    <EvaluationContainer />
                </div>
            </div>
            <div className="peer-dicussion-coontainer">
                <DiscussionAndTimerContainer />
            </div>
        </div>
    );
}

export default PeerCodingPage;