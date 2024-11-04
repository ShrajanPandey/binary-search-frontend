import { Divider } from "@mui/material";
import "./ProblemContainer.css";

function ProblemContainer() {
    function generateSampleCases() {
        const sampleCases = [
            {
                Input: "nums = [2,7,11,15], target = 9",
                Output: "[0,1]",
                Explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
            },
            {
                Input: "nums = [3,2,4], target = 6",
                Output: "[1,2]",
            },
            {
                Input: "nums = [3,3], target = 6",
                Output: "[0,1]",
            },
        ];

        return sampleCases.map((element) => {
            return (
                <div>
                    <span>Input : {element.Input}</span>
                    <br />
                    <span>Output : {element.Output}</span>
                    <br />
                    {element.Explanation && (
                        <span>
                            Explanation : {element.Explanation} <br />
                        </span>
                    )}
                    <br />
                    <Divider variant="middle" />
                </div>
            );
        });
    }

    function displayHint() {
        let hints = ["Shrajan good boy", "Boy boy good good"];
        return hints.map((curHint) => {
            return (
                <div>
                    <li>{curHint}</li>
                </div>
            );
        });
    }

    return (
        <div className="problem-container">
            <div className="problem-heading">
                <h2>1. Find Smallest Number</h2>
            </div>
            <span className="problem-description">
                Given an array of integers nums and an integer target, return
                indices of the two numbers such that they add up to target.
                <br />
                <br /> You may assume that each input would have exactly one
                solution, and you may not use the same element twice. <br />
                <br /> You can return the answer in any order.
            </span>
            <span className="problem-constraints">
                <Divider>
                    <h5>Constraits</h5>
                </Divider>
                ans = 100 <br />
                Only one valid answer exists.
            </span>
            <Divider>
                <h5>Sample Testcases</h5>
            </Divider>
            {generateSampleCases()}
            <Divider>
                <h5>Hint</h5>
            </Divider>
            {displayHint()}
            <Divider>
                <h5>Other Details</h5>
            </Divider>
        </div>
    );
}

export default ProblemContainer;
