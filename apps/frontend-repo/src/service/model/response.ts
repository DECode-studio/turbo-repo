class ResponseModel<T = any> {
    codeResponse?: number;
    messageResponse?: string;
    dataResponse?: T;
  
    constructor(
      codeResponse?: number,
      messageResponse?: string,
      dataResponse?: T,
    ) {
      this.codeResponse = codeResponse;
      this.messageResponse = messageResponse;
      this.dataResponse = dataResponse;
    }
  }
  
  export default ResponseModel