const z=require('zlib');
const s=require('./chunks/0')+require('./chunks/1')+require('./chunks/2')+require('./chunks/3a')+require('./chunks/3b')+require('./chunks/4')+require('./chunks/5a')+require('./chunks/5b')+require('./chunks/6');
const F=JSON.parse(z.gunzipSync(Buffer.from(s,'base64')).toString());
const T={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8'};
module.exports=(req,res)=>{
 let p='/' + String(req.query.path||'').replace(/^\/+|\/+$/g,'');
 if(p==='//')p='/';
 if(p!=='/'&&!p.includes('.')&&!p.endsWith('/'))p+='/';
 if(p==='/servicios/dos-fotografos-boda-san-miguel-de-allende/'){res.statusCode=308;res.setHeader('location','/servicios/wedding-weekend-fotografia-video-san-miguel-de-allende/');return res.end();}
 const b=F[p];
 if(!b){res.statusCode=404;res.setHeader('content-type','text/plain; charset=utf-8');return res.end('404 Not Found');}
 const ext=p==='/'||p.endsWith('/')?'.html':p.slice(p.lastIndexOf('.'));
 res.setHeader('content-type',T[ext]||'application/octet-stream');
 res.setHeader('cache-control',ext==='.html'?'public, max-age=0, must-revalidate':'public, max-age=3600');
 res.end(Buffer.from(b,'base64'));
};
