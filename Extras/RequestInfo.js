export const RequestInfo = (req, res , next) =>{
    console.log(" - REQUETE -----------------------------------------------------------------------------");
    console.log(" |  - Mehtode : "+req.method);
    console.log(" |  - Version HTTP  :" + req.httpVersion );
    console.log(" |  - URL / HOST : "+req.headers.host+""+req.url );
    console.log(" |  - Date : " +new Date());
    console.log(" |  - Code De Reponse : " +res.statusCode);
    console.log(req.body)
    console.log(" ---------------------------------------------------------------------------------------");
    
    next()
 } 