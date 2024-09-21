import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let token = '';
  
  // localStorage sadece tarayıcı ortamında mevcut olduğunda kontrol ediyoruz
  if (typeof window !== 'undefined' && localStorage) {
    token = localStorage.getItem("token") || '';
  }

  const newRequest: HttpRequest<any> = req.clone({
    headers: req.headers.set("Authorization", "Bearer " + token)
  });

  return next(newRequest);
};
