export class ProblemDetails {
    
    problemDescription: String;
    explanation: SampleCases;
    author: String;
    accepted: String;
    likes: Number;

    constructor(){
        this.problemDescription = "";
        this.explanation = new SampleCases();
        this.author = "";
        this.accepted = "";
        this.likes = 0;
    }

}

export class SampleCases {

    input: String;
    output: String;
    explanation: String;

    constructor(){
        this.input = "";
        this.output = "";
        this.explanation = "";
    }

}

problemDescription: String : "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.<br> You may assume that each input would have exactly one solution, and you may not use the same element twice. <br> You can return the answer in any order."