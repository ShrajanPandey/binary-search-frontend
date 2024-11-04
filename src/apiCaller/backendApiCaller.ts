import axios from "axios";

class BackendApiCaller {

    BackendApiCaller(){

    }

    CODENEST_BASE_URL : string = "http://localhost:8083/code-nest";
    FETCH_PROBLEM_DESCRIPTION : string = "fetchProblemDescription";
    
    public getProblemDescription = async (problemId: string) => {

        let endpointUrl : string = this.CODENEST_BASE_URL + "/" + this.FETCH_PROBLEM_DESCRIPTION + "?" + "problemId=" + problemId;
        
        console.log("ENDPOING - " + endpointUrl);
        
        let response = await axios.get(endpointUrl)
        
        console.log(response.data);

    }
    
}

export const backendApiCaller = new BackendApiCaller();
