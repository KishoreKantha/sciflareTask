
//This Http Interceptor file is used for handle HTTP request error in one place

import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { DataService } from '../service/data.service';

export const accesskeyInterceptor: HttpInterceptorFn = (req, next) => {
  const data = inject(DataService);
  return next(req).pipe(catchError(error => {
    data.keyInvalid = true;
    return throwError(() => error);
  }));
};
export const keyInterceptorProviders = (
  {
    provide: HTTP_INTERCEPTORS,
    useClass: accesskeyInterceptor,
    multi: true,
  }
);