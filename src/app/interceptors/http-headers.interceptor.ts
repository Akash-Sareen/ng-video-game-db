import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                // 'x-rapidapi-key': 'esGbwrm390mshS2BC10RALxQRtZTp1W7sFMjsnyJ1JzDXVKW0H'
                'x-rapidapi-key': '42a40afbe1msh38b55458e6e03fbp1ec2cdjsnf3dd96fb3583',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
            },
            setParams: {
                key: 'e40e743af2c94b0c916a8aa618fb4473'
            }
        })

        return next.handle(req);
    }
    
}